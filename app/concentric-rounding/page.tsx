"use client";

import Link from "next/link";
import { useState } from "react";

export default function ConcentricRoundingPage() {
  const [outerRadius, setOuterRadius] = useState(16);
  const [gap, setGap] = useState(8);
  const innerRadius = Math.max(0, outerRadius - gap);

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
            Concentric Rounding
          </h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            The outer radius = padding + inner radius rule
          </p>
        </header>

        <article>
          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              The Rule
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              When you have nested rounded elements, the outer radius should equal 
              the gap (padding/margin) between containers plus the inner radius. 
              This creates visual harmony and prevents awkward gaps or overlaps.
            </p>
            <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-6 mb-6">
              <p className="text-lg font-mono font-semibold mb-2">
                outer radius = gap + inner radius
              </p>
              <p className="text-sm text-[var(--muted-foreground)] mb-2">
                Or rearranged: <strong>inner radius = outer radius - gap</strong>
              </p>
              <p className="text-xs text-[var(--muted-foreground)]">
                Where "gap" is the padding/margin between the outer and inner containers
              </p>
            </div>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              This rule ensures that nested rounded corners align perfectly, creating 
              a cohesive, polished look. When done correctly, the inner element's corners 
              will smoothly follow the outer element's curve.
            </p>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Interactive Example
            </h2>
            <p className="mb-6 text-[var(--foreground)] leading-relaxed">
              Adjust the values below to see how the rule works in practice:
            </p>

            <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-mono font-semibold mb-2">
                    Outer Radius: {outerRadius}px
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="32"
                    step="1"
                    value={outerRadius}
                    onChange={(e) => setOuterRadius(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono font-semibold mb-2">
                    Gap (padding/margin): {gap}px
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="24"
                    step="1"
                    value={gap}
                    onChange={(e) => setGap(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              <div 
                className="rounded-lg"
                style={{ 
                  borderRadius: `${outerRadius}px`,
                  padding: `${gap}px`,
                  backgroundColor: '#3b82f6'
                }}
              >
                <div 
                  className="rounded-lg p-4"
                  style={{ 
                    borderRadius: `${innerRadius}px`,
                    backgroundColor: '#1e40af'
                  }}
                >
                  <p className="text-sm text-white">
                    Inner element with calculated radius: <strong>{innerRadius}px</strong>
                  </p>
                  <p className="text-xs text-blue-200 mt-2">
                    Formula: {outerRadius}px - {gap}px = {innerRadius}px
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// Outer container with gap (padding/margin)
<div 
  className="rounded-lg"
  style={{ 
    borderRadius: '${outerRadius}px',
    padding: '${gap}px'  // This is the gap between containers
  }}
>
  {/* Inner element */}
  <div 
    className="rounded-lg p-4"
    style={{ 
      borderRadius: '${innerRadius}px'
      // Inner padding is separate from the gap
    }}
  >
    Content
  </div>
</div>`}
              </code>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Why This Matters
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              When nested rounded elements don't follow this rule, you get visual 
              inconsistencies that make the UI feel unpolished:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border border-red-500/50 rounded-lg p-4">
                <h3 className="text-sm font-mono font-semibold mb-2 text-red-500">
                  ❌ Wrong
                </h3>
                <div 
                  className="rounded-lg"
                  style={{ 
                    borderRadius: '16px', 
                    padding: '12px',
                    backgroundColor: '#ef4444'
                  }}
                >
                  <div 
                    className="rounded-lg p-2"
                    style={{ 
                      borderRadius: '12px',
                      backgroundColor: '#dc2626'
                    }}
                  >
                    <p className="text-xs text-white">Inner radius too large</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] mt-2">
                  Gap between curves looks awkward
                </p>
              </div>

              <div className="border border-green-500/50 rounded-lg p-4">
                <h3 className="text-sm font-mono font-semibold mb-2 text-green-500">
                  ✅ Correct
                </h3>
                <div 
                  className="rounded-lg"
                  style={{ 
                    borderRadius: '16px', 
                    padding: '8px',
                    backgroundColor: '#10b981'
                  }}
                >
                  <div 
                    className="rounded-lg p-2"
                    style={{ 
                      borderRadius: '8px',
                      backgroundColor: '#059669'
                    }}
                  >
                    <p className="text-xs text-white">16px - 8px = 8px</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] mt-2">
                  Curves align perfectly
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Quick Reference
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Common radius combinations that work well together:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left p-3 font-mono font-semibold">Outer Radius</th>
                    <th className="text-left p-3 font-mono font-semibold">Gap</th>
                    <th className="text-left p-3 font-mono font-semibold">Inner Radius</th>
                    <th className="text-left p-3 font-mono font-semibold">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">8px</td>
                    <td className="p-3 font-mono">4px</td>
                    <td className="p-3 font-mono">4px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">Small buttons, badges</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">12px</td>
                    <td className="p-3 font-mono">8px</td>
                    <td className="p-3 font-mono">4px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">Cards, inputs</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">16px</td>
                    <td className="p-3 font-mono">12px</td>
                    <td className="p-3 font-mono">4px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">Large cards, containers</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">16px</td>
                    <td className="p-3 font-mono">8px</td>
                    <td className="p-3 font-mono">8px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">Modals, dialogs</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-3 font-mono">24px</td>
                    <td className="p-3 font-mono">16px</td>
                    <td className="p-3 font-mono">8px</td>
                    <td className="p-3 text-[var(--muted-foreground)]">Hero sections, large modals</td>
                  </tr>
                </tbody>
              </table>
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
                  <strong className="block mb-1">Use CSS variables or a design system</strong>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Define your radius values as tokens so you can easily maintain the relationship. 
                    For example: <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs">--radius-sm: 4px</code>, 
                    <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs"> --radius-md: 8px</code>, 
                    <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs"> --radius-lg: 12px</code>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--muted-foreground)]">2.</span>
                <div>
                  <strong className="block mb-1">Calculate dynamically when needed</strong>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    If you're using dynamic gap spacing, calculate the inner radius: 
                    <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs"> innerRadius = outerRadius - gap</code>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--muted-foreground)]">3.</span>
                <div>
                  <strong className="block mb-1">Test visually</strong>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Sometimes the math works but it doesn't look right. Trust your eyes. 
                    Slight adjustments (1-2px) are okay if it looks better.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[var(--muted-foreground)]">4.</span>
                <div>
                  <strong className="block mb-1">Don't overthink it</strong>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    For simple cases, common combinations (12px outer / 8px padding / 4px inner) 
                    work great. You don't need to calculate for every element.
                  </p>
                </div>
              </li>
            </ul>
          </section>

        </article>
      </div>
    </div>
  );
}

