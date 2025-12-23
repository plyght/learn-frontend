"use client";

import { useEffect } from "react";
import {
  Tree,
  File as FileComponent,
  useTree,
} from "@/components/ui/file-tree";

interface FileTreeProps {
  files: string[];
  selectedFile: string;
  onFileSelect: (file: string) => void;
}

function FileTreeContent({ files, selectedFile, onFileSelect }: FileTreeProps) {
  const { selectItem, selectedId } = useTree();

  useEffect(() => {
    if (selectedFile && selectedFile !== selectedId) {
      selectItem(selectedFile);
    }
  }, [selectedFile, selectedId, selectItem]);

  useEffect(() => {
    if (selectedId && selectedId !== selectedFile) {
      onFileSelect(selectedId);
    }
  }, [selectedId, selectedFile, onFileSelect]);

  return (
    <>
      {files.map((file) => (
        <FileComponent key={file} value={file} isSelect={selectedFile === file}>
          {file}
        </FileComponent>
      ))}
    </>
  );
}

export function FileTree({ files, selectedFile, onFileSelect }: FileTreeProps) {
  if (files.length <= 1) return null;

  return (
    <div className="border-b border-[var(--border)] bg-[var(--muted)] p-1.5">
      <Tree initialSelectedId={selectedFile}>
        <FileTreeContent
          files={files}
          selectedFile={selectedFile}
          onFileSelect={onFileSelect}
        />
      </Tree>
    </div>
  );
}
