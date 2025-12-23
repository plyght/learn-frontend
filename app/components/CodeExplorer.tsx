"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { FileTree } from "./FileTree";

interface CodeExplorerProps {
  files: Array<{ name: string; content: string; language: string }>;
}

export function CodeExplorer({ files }: CodeExplorerProps) {
  const [selectedFile, setSelectedFile] = useState(files[0]?.name || "");
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const currentFile = files.find((f) => f.name === selectedFile) || files[0];

  useEffect(() => {
    if (!currentFile) return;

    let isCancelled = false;

    codeToHtml(currentFile.content, {
      lang: currentFile.language,
      theme: "github-dark",
    })
      .then((html) => {
        if (!isCancelled) {
          setHighlightedCode(html);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (!isCancelled) {
          console.error("Failed to highlight code:", error);
          setHighlightedCode(`<pre><code>${currentFile.content}</code></pre>`);
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [currentFile]);

  if (!currentFile) {
    return (
      <div className="p-6 text-center text-xs text-[var(--muted-foreground)]">no files to display</div>
    );
  }

  return (
    <div className="flex flex-col h-full border border-[var(--border)] rounded-sm overflow-hidden bg-[#0d1117]">
      <FileTree
        files={files.map((f) => f.name)}
        selectedFile={selectedFile}
        onFileSelect={setSelectedFile}
      />
      <div className="flex-1 overflow-auto">
        {isLoading ? (
          <div className="p-6 text-center text-xs text-gray-400">loading...</div>
        ) : (
          <div
            className="text-xs leading-relaxed"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        )}
      </div>
    </div>
  );
}
