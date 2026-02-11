FROM node:20-alpine

WORKDIR /app

# Copy standalone server (contains server.js + minimal node_modules)
COPY .next/standalone ./

# Copy Next static files
COPY .next/static ./.next/static

# Copy public folder
COPY public ./public

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "server.js"]
