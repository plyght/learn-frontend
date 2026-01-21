"use client";

import Link from "next/link";
import { useState } from "react";

export default function SpacingPage() {
  const [baseUnit, setBaseUnit] = useState(8);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 border-b border-[var(--border)] pb-6">
          <Link
            href="/"
            className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-3 inline-block font-mono transition-colors"
          >
            ← back
          </Link>
          <h1 className="text-2xl font-mono font-semibold mb-2 tracking-tight">
            Spacing Systems
          </h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            Building consistent spacing with scale systems
          </p>
        </header>

        <article>
          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Why Spacing Systems Matter
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Random spacing values create visual chaos. A spacing system gives
              your UI rhythm, consistency, and makes decisions faster. Instead
              of guessing "is this 13px or 17px?", you pick from a scale.
            </p>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Most modern design systems use an <strong>8px base unit</strong>.
              Everything is a multiple of 4 or 8 pixels. This creates visual
              harmony and makes your code predictable.
            </p>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              The 8px System
            </h2>
            <p className="mb-6 text-[var(--foreground)] leading-relaxed">
              Adjust the base unit to see how the scale works:
            </p>

            <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-6 mb-6">
              <div className="mb-6">
                <label
                  htmlFor="base-unit-slider"
                  className="block text-sm font-mono font-semibold mb-2"
                >
                  Base Unit:{" "}
                  <span className="text-[var(--accent)]">{baseUnit}px</span>
                </label>
                <input
                  id="base-unit-slider"
                  type="range"
                  min={4}
                  max={16}
                  step={4}
                  value={baseUnit}
                  onChange={(e) => setBaseUnit(parseInt(e.target.value, 10))}
                  onInput={(e) =>
                    setBaseUnit(
                      parseInt((e.target as HTMLInputElement).value, 10),
                    )
                  }
                  className="w-full h-2 bg-[var(--border)] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[var(--muted-foreground)] mt-2">
                  <span>4px</span>
                  <span>8px</span>
                  <span>12px</span>
                  <span>16px</span>
                </div>
              </div>

              <div className="space-y-3">
                {[0.5, 1, 1.5, 2, 3, 4, 6, 8, 12, 16].map((multiplier) => {
                  const value = baseUnit * multiplier;
                  return (
                    <div key={multiplier} className="flex items-center gap-4">
                      <div className="w-24 text-xs font-mono text-[var(--muted-foreground)]">
                        {multiplier}x = {value}px
                      </div>
                      <div className="flex-1 bg-[var(--border)] rounded h-4 relative overflow-hidden">
                        <div
                          className="bg-blue-500 h-full rounded transition-all duration-200"
                          style={{ width: `${Math.min(value, 200)}px` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Common spacing scale (8px base):
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left p-3 font-mono font-semibold">
                      Multiplier
                    </th>
                    <th className="text-left p-3 font-mono font-semibold">
                      Value
                    </th>
                    <th className="text-left p-3 font-mono font-semibold">
                      Use Case
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">0.5x</td>
                    <td className="p-3 font-mono">4px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">
                      Tight spacing, icons to text
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">1x</td>
                    <td className="p-3 font-mono">8px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">
                      Related items, small gaps
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">1.5x</td>
                    <td className="p-3 font-mono">12px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">
                      Form fields, normal spacing
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">2x</td>
                    <td className="p-3 font-mono">16px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">
                      Card padding, list items
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">3x</td>
                    <td className="p-3 font-mono">24px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">
                      Section spacing, headers
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">4x</td>
                    <td className="p-3 font-mono">32px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">
                      Major sections, containers
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">6x</td>
                    <td className="p-3 font-mono">48px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">
                      Page sections, hero spacing
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">8x</td>
                    <td className="p-3 font-mono">64px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">
                      Large sections, page margins
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Spacing Categories
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-mono font-semibold mb-3 tracking-tight">
                  Tight (4px, 8px)
                </h3>
                <p className="mb-4 text-[var(--foreground)] leading-relaxed">
                  For closely related elements that belong together:
                </p>
                <ul className="list-none space-y-2 mb-4 ml-0">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Icons next to text</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Badges and tags</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Button icons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Inline elements</span>
                  </li>
                </ul>
                <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm">Icon with 8px gap</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-mono font-semibold mb-3 tracking-tight">
                  Normal (12px, 16px)
                </h3>
                <p className="mb-4 text-[var(--foreground)] leading-relaxed">
                  Standard spacing for most UI elements:
                </p>
                <ul className="list-none space-y-2 mb-4 ml-0">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Between form fields</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Card padding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>List items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Button groups</span>
                  </li>
                </ul>
                <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-4">
                  <div className="space-y-3">
                    <div className="h-10 bg-blue-500 rounded"></div>
                    <div className="h-10 bg-blue-500 rounded"></div>
                    <div className="h-10 bg-blue-500 rounded"></div>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] mt-2">
                    12px between elements
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-mono font-semibold mb-3 tracking-tight">
                  Section (24px, 32px)
                </h3>
                <p className="mb-4 text-[var(--foreground)] leading-relaxed">
                  For separating major sections:
                </p>
                <ul className="list-none space-y-2 mb-4 ml-0">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Headers and content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Card sections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Content blocks</span>
                  </li>
                </ul>
                <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-4">
                  <div className="space-y-6">
                    <div>
                      <div className="h-4 bg-blue-500 rounded w-24 mb-2"></div>
                      <div className="h-20 bg-blue-500/30 rounded"></div>
                    </div>
                    <div>
                      <div className="h-4 bg-blue-500 rounded w-24 mb-2"></div>
                      <div className="h-20 bg-blue-500/30 rounded"></div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] mt-2">
                    24px between sections
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-mono font-semibold mb-3 tracking-tight">
                  Page (48px, 64px)
                </h3>
                <p className="mb-4 text-[var(--foreground)] leading-relaxed">
                  For major page-level spacing:
                </p>
                <ul className="list-none space-y-2 mb-4 ml-0">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Hero sections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Page margins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">
                      •
                    </span>
                    <span>Large content blocks</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Common Mistakes
            </h2>

            <div className="space-y-6">
              <div className="border border-red-500/50 rounded-sm p-4">
                <h3 className="text-sm font-mono font-semibold mb-2 text-red-500">
                  ❌ Using Random Values
                </h3>
                <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-3 overflow-x-auto text-xs font-mono mb-2">
                  <code className="text-[var(--code-text)]">
                    {`// Bad: Random numbers
<div className="gap-[13px] p-[17px] mb-[23px]">`}
                  </code>
                </pre>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Creates visual inconsistency and makes maintenance harder.
                </p>
              </div>

              <div className="border border-green-500/50 rounded-sm p-4">
                <h3 className="text-sm font-mono font-semibold mb-2 text-green-500">
                  ✅ Using System Tokens
                </h3>
                <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-3 overflow-x-auto text-xs font-mono mb-2">
                  <code className="text-[var(--code-text)]">
                    {`// Good: System tokens
<div className="gap-3 p-4 mb-6">`}
                  </code>
                </pre>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Consistent, predictable, and easy to maintain.
                </p>
              </div>

              <div className="border border-red-500/50 rounded-sm p-4">
                <h3 className="text-sm font-mono font-semibold mb-2 text-red-500">
                  ❌ Inconsistent Spacing
                </h3>
                <p className="text-sm text-[var(--foreground)] mb-2">
                  Using 12px in one place and 14px in another for the same
                  purpose.
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Pick one value and stick to it. Consistency {">"} perfection.
                </p>
              </div>

              <div className="border border-green-500/50 rounded-sm p-4">
                <h3 className="text-sm font-mono font-semibold mb-2 text-green-500">
                  ✅ Consistent Scale
                </h3>
                <p className="text-sm text-[var(--foreground)] mb-2">
                  All related elements use the same spacing value from your
                  scale.
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Creates visual rhythm and makes the UI feel intentional.
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Implementation Tips
            </h2>
            <ul className="list-none space-y-4 ml-0">
              <li className="flex items-start">
                <span className="mr-3 text-[var(--muted-foreground)]">1.</span>
                <div>
                  <strong className="block mb-1">
                    Use CSS variables or design tokens
                  </strong>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Define your spacing scale as tokens:{" "}
                    <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs">
                      --space-1: 4px
                    </code>
                    ,
                    <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs">
                      {" "}
                      --space-2: 8px
                    </code>
                    , etc.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--muted-foreground)]">2.</span>
                <div>
                  <strong className="block mb-1">
                    Round to the nearest token
                  </strong>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    If you measure 18px, use 16px. If you measure 22px, use
                    24px. The system is more important than exact pixels.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--muted-foreground)]">3.</span>
                <div>
                  <strong className="block mb-1">
                    Use semantic names when helpful
                  </strong>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs">
                      gap-tight
                    </code>
                    ,
                    <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs">
                      {" "}
                      gap-normal
                    </code>
                    ,
                    <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs">
                      {" "}
                      gap-section
                    </code>
                    can be clearer than numbers.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--muted-foreground)]">4.</span>
                <div>
                  <strong className="block mb-1">
                    Start with the scale, adjust if needed
                  </strong>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Pick from your scale first. Only deviate if it genuinely
                    looks wrong, and then round to the nearest token.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Quick Reference
            </h2>
            <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-6">
              <p className="text-sm font-mono font-semibold mb-4">
                Tailwind CSS spacing scale:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <div className="mb-2">
                    <code className="bg-[var(--code-bg)] px-2 py-1 rounded">
                      p-1
                    </code>{" "}
                    = 4px
                  </div>
                  <div className="mb-2">
                    <code className="bg-[var(--code-bg)] px-2 py-1 rounded">
                      p-2
                    </code>{" "}
                    = 8px
                  </div>
                  <div className="mb-2">
                    <code className="bg-[var(--code-bg)] px-2 py-1 rounded">
                      p-3
                    </code>{" "}
                    = 12px
                  </div>
                  <div className="mb-2">
                    <code className="bg-[var(--code-bg)] px-2 py-1 rounded">
                      p-4
                    </code>{" "}
                    = 16px
                  </div>
                  <div className="mb-2">
                    <code className="bg-[var(--code-bg)] px-2 py-1 rounded">
                      p-6
                    </code>{" "}
                    = 24px
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <code className="bg-[var(--code-bg)] px-2 py-1 rounded">
                      p-8
                    </code>{" "}
                    = 32px
                  </div>
                  <div className="mb-2">
                    <code className="bg-[var(--code-bg)] px-2 py-1 rounded">
                      p-12
                    </code>{" "}
                    = 48px
                  </div>
                  <div className="mb-2">
                    <code className="bg-[var(--code-bg)] px-2 py-1 rounded">
                      p-16
                    </code>{" "}
                    = 64px
                  </div>
                  <div className="mb-2">
                    <code className="bg-[var(--code-bg)] px-2 py-1 rounded">
                      p-20
                    </code>{" "}
                    = 80px
                  </div>
                  <div className="mb-2">
                    <code className="bg-[var(--code-bg)] px-2 py-1 rounded">
                      p-24
                    </code>{" "}
                    = 96px
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
