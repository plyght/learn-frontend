import { notFound } from "next/navigation";
import { ComponentViewer } from "@/app/components/ComponentViewer";
import { getDayFiles } from "@/app/lib/fileUtils";
import Link from "next/link";
import { DynamicComponent } from "@/app/components/DynamicComponent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DayPage({ params }: PageProps) {
  const { id } = await params;
  const dayId = `day-${id}`;

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
          <h1 className="text-xl font-mono font-semibold tracking-tight">
            day-{id}
          </h1>
        </header>

        <ComponentViewer
          component={<DynamicComponent dayId={dayId} />}
          files={files}
          dayId={dayId}
        />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
