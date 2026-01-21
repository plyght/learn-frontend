import { notFound } from "next/navigation";
import { ComponentViewer } from "@/app/components/ComponentViewer";
import { getDayFiles } from "@/app/lib/fileUtils";
import Link from "next/link";
import DayComponent from "./Component";
import { Familjen_Grotesk } from "next/font/google";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function Day4Page() {
  const dayId = "day-4";
  const files = getDayFiles(dayId);

  if (files.length === 0) {
    notFound();
  }

  return (
    <div className={`min-h-screen p-6 ${familjenGrotesk.variable}`}>
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 border-b border-[var(--border)] pb-4">
          <Link
            href="/"
            className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-3 inline-block font-mono transition-colors"
          >
            ← back
          </Link>
          <h1 className="text-xl font-mono font-semibold tracking-tight">
            day-4
          </h1>
        </header>

        <ComponentViewer
          component={<DayComponent />}
          files={files}
          dayId={dayId}
        />
      </div>
    </div>
  );
}
