import { getAllDays } from "@/app/lib/fileUtils";
import Link from "next/link";

export default function Home() {
  const days = getAllDays();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 border-b border-[var(--border)] pb-6">
          <h1 className="text-2xl font-mono font-semibold mb-2 tracking-tight">component-library</h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            daily component explorations
          </p>
        </header>

        {days.length === 0 ? (
          <div className="text-center p-8 border border-dashed border-[var(--border)] rounded-sm">
            <p className="text-[var(--muted-foreground)] mb-3 text-sm">
              no days found. create your first day
            </p>
            <p className="text-xs text-[var(--muted-foreground)] opacity-70">
              create a folder like{" "}
              <code className="bg-[var(--muted)] px-1.5 py-0.5 rounded-sm border border-[var(--border)]">
                app/day-1
              </code>{" "}
              with a{" "}
              <code className="bg-[var(--muted)] px-1.5 py-0.5 rounded-sm border border-[var(--border)]">
                Component.tsx
              </code>{" "}
              file
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {days.map((day) => {
              const dayNumber = day.replace("day-", "");
              return (
                <Link
                  key={day}
                  href={`/day-${dayNumber}`}
                  className="block p-4 border border-[var(--border)] rounded-sm hover:border-[var(--border-hover)] transition-colors"
                >
                  <h2 className="text-sm font-mono font-semibold mb-1">day-{dayNumber}</h2>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    view component →
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
