"use client";

import { useState } from "react";
import Image from "next/image";
import { CodeExplorer } from "./CodeExplorer";

interface ComponentViewerProps {
  component: React.ReactNode;
  files: Array<{ name: string; content: string; language: string }>;
  dayId?: string;
}

function numberToWord(num: number): string {
  const words = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];
  return words[num - 1] || num.toString();
}

function getImagePaths(dayId?: string): string[] {
  if (!dayId) return [];
  const dayNumber = parseInt(dayId.replace("day-", ""), 10);
  if (isNaN(dayNumber)) return [];
  const dayWord = numberToWord(dayNumber);
  const formats = ["png", "jpg", "jpeg", "webp"];
  return formats.map((format) => `/days/day ${dayWord}.${format}`);
}

function DayImage({ dayId }: { dayId?: string }) {
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagePaths = getImagePaths(dayId);
  const currentImagePath = imagePaths[currentImageIndex] || null;

  const handleImageError = () => {
    if (currentImageIndex < imagePaths.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  return (
    <div className="p-6 border border-[var(--border)] rounded-sm bg-[var(--background)] min-h-[200px] flex items-center justify-center">
      {currentImagePath && !imageError ? (
        <div className="relative w-full h-[400px] max-h-[600px]">
          <Image
            src={currentImagePath}
            alt={`Day ${dayId?.replace("day-", "") || ""} reference`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={handleImageError}
          />
        </div>
      ) : (
        <p className="text-xs text-[var(--muted-foreground)] font-mono">
          {imagePaths.length > 0 ? "image not found" : "image placeholder"}
        </p>
      )}
    </div>
  );
}

export function ComponentViewer({
  component,
  files,
  dayId,
}: ComponentViewerProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1 border-b border-[var(--border)]">
        <button
          onClick={() => setShowCode(false)}
          className={`px-3 py-1.5 text-xs font-mono transition-colors border-b-2 -mb-[1px] ${
            !showCode
              ? "border-[var(--accent)] text-[var(--foreground)]"
              : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          }`}
        >
          component
        </button>
        <button
          onClick={() => setShowCode(true)}
          className={`px-3 py-1.5 text-xs font-mono transition-colors border-b-2 -mb-[1px] ${
            showCode
              ? "border-[var(--accent)] text-[var(--foreground)]"
              : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          }`}
        >
          code
        </button>
      </div>

      <div className="min-h-[400px]">
        {showCode ? (
          <CodeExplorer files={files} />
        ) : (
          <div className="flex flex-col gap-3">
            <div className="p-6 border border-[var(--border)] rounded-sm bg-[var(--background)]">
              {component}
            </div>

            <DayImage key={dayId} dayId={dayId} />
          </div>
        )}
      </div>
    </div>
  );
}
