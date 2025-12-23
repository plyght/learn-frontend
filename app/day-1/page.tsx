import { notFound } from "next/navigation";
import { ComponentViewer } from "@/app/components/ComponentViewer";
import { getDayFiles } from "@/app/lib/fileUtils";
import Link from "next/link";
import DayComponent from "./Component";

export default async function Day1Page() {
  const dayId = "day-1";
  const files = getDayFiles(dayId);

  if (files.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 border-b border-[var(--border)] pb-4">
          <Link
            href="/"
            className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-3 inline-block font-mono transition-colors"
          >
            ← back
          </Link>
          <h1 className="text-xl font-mono font-semibold tracking-tight">day-1</h1>
        </header>

        <ComponentViewer component={<DayComponent />} files={files} dayId={dayId} />
      </div>
    </div>
  );
}
