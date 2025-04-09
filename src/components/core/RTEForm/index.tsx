import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import type { Editor as TinyMCEEditor } from "tinymce";

// Define props explicitly, even if empty for now
interface RTEFormProps {
  initialValue?: string;
  onChange?: (content: string) => void;
}

const RTEForm = React.forwardRef<TinyMCEEditor | null, RTEFormProps>(
  (_props, ref) => {
    return (
      <Editor
        onInit={(_evt, editor) => {
          if (ref && typeof ref === "object" && ref !== null) {
            (ref as React.MutableRefObject<TinyMCEEditor | null>).current =
              editor;
          }
        }}
        apiKey={process.env.NEXT_PUBLIC_RTE_TINYMCE_KEY}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "image link media table | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    );
  }
);

RTEForm.displayName = "RTEForm";

export default RTEForm;
