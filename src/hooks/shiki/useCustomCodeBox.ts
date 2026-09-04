import { useEffect, useState } from "react";
import { createCssVariablesTheme, createHighlighter } from "shiki";

export const useCustomCodeBox = (code: string) => {
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const customTheme = createCssVariablesTheme({
      name: "codebox-style",
      variablePrefix: "--codebox-",
      variableDefaults: {},
      fontStyle: true,
    });

    async function initShiki() {
      try {
        const highlighter = await createHighlighter({
          langs: ["typescript"],
          themes: [customTheme],
        });

        const html = highlighter.codeToHtml(code, {
          lang: "typescript",
          theme: "codebox-style",
          transformers: [
            {
              code(node) {
                this.addClassToHast(node, "codebox-style__code");
              },
              line(node) {
                this.addClassToHast(node, "codebox-style__line");
              },
            },
          ],
        });

        setHtml(html);
      } catch (error) {
        setError("Failed to initialize code box");
        throw new Error("Failed to initialize highlighter", { cause: error });
      } finally {
        setLoading(false);
      }
    }
    initShiki();
  }, [code]);

  return {
    html,
    loading,
    error,
  };
};
