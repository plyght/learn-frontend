# Component Library

A Next.js 16 component library site with interactive code exploration.

## Features

- **Daily Components**: Create components in `app/day-N/` folders
- **Toggle View**: Switch between component preview and code view
- **Syntax Highlighting**: Powered by Shiki with GitHub Dark theme
- **File Tree Navigation**: Browse multiple files per component
- **Responsive Design**: Works on mobile and desktop

## Quick Start

```bash
bun run dev
```

Visit `http://localhost:3000` to see all available days.

## Creating a New Day

1. Create a new folder: `app/day-2/`
2. Create a component file: `app/day-2/Component.tsx`

```tsx
"use client";

export default function Day2Component() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">My Day 2 Component</h1>
    </div>
  );
}
```

3. Create a page file: `app/day-2/page.tsx`

```tsx
import { notFound } from "next/navigation";
import { ComponentViewer } from "@/app/components/ComponentViewer";
import { getDayFiles } from "@/app/lib/fileUtils";
import Link from "next/link";
import DayComponent from "./Component";

export default async function Day2Page() {
  const dayId = "day-2";
  const files = getDayFiles(dayId);

  if (files.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Day 2</h1>
        </header>

        <ComponentViewer component={<DayComponent />} files={files} />
      </div>
    </div>
  );
}
```

4. Navigate to `/day-2` to see your component!

## Adding Multiple Files

You can add additional files to your day folder:

```
app/day-2/
  Component.tsx
  page.tsx
  utils.ts
  styles.css
```

All files (except `page.tsx`) will appear in the file tree navigator.

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Lint all files
- `bun run type-check` - TypeScript type checking
- `bun run format` - Format code with Prettier

## Architecture

- **app/page.tsx** - Homepage listing all days
- **app/day-[id]/page.tsx** - Dynamic route handler for all days
- **app/day-N/** - Individual day folders with components
- **app/components/** - Shared UI components
- **app/lib/** - Utility functions for file reading

## Tech Stack

- Next.js 16.1.1 (App Router)
- React 19.2.3
- Tailwind CSS 4.1.18
- Shiki 3.20.0 (syntax highlighting)
- TypeScript 5.9.3
- Bun (package manager)
