# =========================
# 1️⃣ Builder
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Fix common alpine native build issues
RUN apk add --no-cache libc6-compat python3 make g++

# Install deps
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Inject build-time env (important!)
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_RTE_TINYMCE_KEY

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_RTE_TINYMCE_KEY=$NEXT_PUBLIC_RTE_TINYMCE_KEY

# Build
RUN npm run build


# =========================
# 2️⃣ Runner
# =========================
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Security: non-root user
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Copy standalone build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
