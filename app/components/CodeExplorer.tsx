"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { FileTree } from "./FileTree";

interface CodeExplorerProps {
  files: Array<{ name: string; content: string; language: string }>;
}

function CopyButton({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-2 py-1 text-xs font-mono border border-[var(--border)] rounded hover:bg-[var(--muted)] transition-colors"
      title="Copy code"
    >
      {copied ? "copied" : "copy"}
    </button>
  );
}

export function CodeExplorer({ files }: CodeExplorerProps) {
  const [selectedFile, setSelectedFile] = useState(files[0]?.name || "");
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const currentFile = files.find((f) => f.name === selectedFile) || files[0];

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(
        theme === "dark" ||
          (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches),
      );
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", checkTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", checkTheme);
    };
  }, []);

  useEffect(() => {
    if (!currentFile) return;

    let isCancelled = false;

    const highlightCode = async () => {
      setIsLoading(true);
      try {
        const html = await codeToHtml(currentFile.content, {
          lang: currentFile.language,
          theme: isDark ? "github-dark" : "github-light",
        });
        if (!isCancelled) {
          setHighlightedCode(html);
          setIsLoading(false);
        }
      } catch (error) {
        if (!isCancelled) {
          console.error("Failed to highlight code:", error);
          setHighlightedCode(`<pre><code>${currentFile.content}</code></pre>`);
          setIsLoading(false);
        }
      }
    };

    highlightCode();

    return () => {
      isCancelled = true;
    };
  }, [currentFile, isDark]);

  if (!currentFile) {
    return (
      <div className="p-6 text-center text-xs text-[var(--muted-foreground)]">
        no files to display
      </div>
    );
  }

  const lineCount = currentFile.content.split("\n").length;

  return (
    <div className="flex flex-col h-full border border-[var(--border)] rounded-sm overflow-hidden bg-[var(--code-bg)]">
      <FileTree
        files={files.map((f) => f.name)}
        selectedFile={selectedFile}
        onFileSelect={setSelectedFile}
      />
      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)] bg-[var(--code-header-bg)]">
        <span className="text-xs font-mono text-[var(--code-text)]">
          {selectedFile}
        </span>
        <CopyButton content={currentFile.content} />
      </div>
      <div className="flex-1 overflow-auto relative">
        {isLoading ? (
          <div className="p-6 text-center text-xs text-[var(--code-text)]">
            loading...
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-0 top-0 w-12 bg-[var(--code-line-number-bg)] border-r border-[var(--border)] text-right pr-3 pl-2 text-xs text-[var(--code-line-number)] select-none py-4">
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i} className="leading-[1.5rem] h-6">
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="pl-14">
              <div
                className="text-xs [&_pre]:!m-0 [&_pre]:!p-4 [&_pre]:!bg-transparent [&_pre]:!overflow-visible [&_pre_code]:!block [&_pre_code]:!overflow-x-auto [&_pre_code]:!leading-[1.5rem] [&_pre_code_line]:!h-6 [&_pre_code_line]:!block"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
