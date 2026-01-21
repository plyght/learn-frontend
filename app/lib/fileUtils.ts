import fs from "fs";
import path from "path";

export interface FileInfo {
  name: string;
  content: string;
  language: string;
}

const languageMap: Record<string, string> = {
  ".ts": "typescript",
  ".tsx": "tsx",
  ".js": "javascript",
  ".jsx": "jsx",
  ".css": "css",
  ".json": "json",
  ".md": "markdown",
};

export function getDayFiles(dayId: string): FileInfo[] {
  const dayDir = path.join(process.cwd(), "app", dayId);

  if (!fs.existsSync(dayDir)) {
    return [];
  }

  const files = fs
    .readdirSync(dayDir)
    .filter((file) => {
      return (
        file !== "page.tsx" &&
        !file.startsWith(".") &&
        fs.statSync(path.join(dayDir, file)).isFile()
      );
    })
    .map((file) => {
      const filePath = path.join(dayDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const ext = path.extname(file);
      const language = languageMap[ext] || "typescript";

      return {
        name: file,
        content,
        language,
      };
    });

  return files;
}

export function getAllDays(): string[] {
  const appDir = path.join(process.cwd(), "app");

  if (!fs.existsSync(appDir)) {
    return [];
  }

  const days = fs
    .readdirSync(appDir)
    .filter((file) => {
      const fullPath = path.join(appDir, file);
      return fs.statSync(fullPath).isDirectory() && file.startsWith("day-");
    })
    .sort((a, b) => {
      const numA = parseInt(a.replace("day-", ""));
      const numB = parseInt(b.replace("day-", ""));
      return numA - numB;
    });

  return days;
}
