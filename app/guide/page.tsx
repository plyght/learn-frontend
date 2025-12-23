import Link from "next/link";

export default function GuidePage() {
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
            How to Recreate UI from Screenshots
          </h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            A systematic approach to pixel-perfect UI recreation
          </p>
        </header>

        <article>
          <div className="space-y-4 mb-12">
            
          
          </div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              1. Decompose. Ruthlessly.
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Before writing a single line of code, you need to understand the structure. 
              If you can't name the parts, you can't code it. This step is non-negotiable.
            </p>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Identify the Layout Pattern
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Look at the screenshot and ask: Is this a column? A row? A grid? A combination?
            </p>
            <ul className="list-none space-y-2 mb-6 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>
                  <strong>Column</strong>: Elements stacked vertically (most common for mobile-first designs)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>
                  <strong>Row</strong>: Elements side-by-side (headers, toolbars, cards in a row)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>
                  <strong>Grid</strong>: Multiple items in rows and columns (dashboards, galleries)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>
                  <strong>Stack</strong>: Overlapping elements (modals, dropdowns, tooltips)
                </span>
              </li>
            </ul>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Map the Component Hierarchy
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Break down the UI into a tree structure. Start from the top level and drill down:
            </p>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`Page
├── Header
│   ├── Logo
│   ├── Navigation
│   └── User Menu
├── Main Content
│   ├── Sidebar
│   │   ├── Filter Section
│   │   └── Category List
│   └── Content Area
│       ├── Search Bar
│       └── Card Grid
│           └── Card (repeated)
│               ├── Image
│               ├── Title
│               └── Meta Info
└── Footer`}
              </code>
            </pre>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Find Repetition
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Anything that appears more than once is a component. Don't code it multiple times—extract it.
            </p>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Look for:
            </p>
            <ul className="list-none space-y-2 mb-4 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>Repeated cards, buttons, or list items</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>Similar sections with different content</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>Patterns that could be loops or maps</span>
              </li>
            </ul>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Identify States
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Every interactive element has states. If the screenshot shows one state, think about the others:
            </p>
            <ul className="list-none space-y-2 mb-4 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Default</strong>: The base appearance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Hover</strong>: What happens on mouse over</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Active/Focused</strong>: When clicked or selected</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Disabled</strong>: When not available</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Loading</strong>: While data is fetching</span>
              </li>
            </ul>

            <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-4 mt-6">
              <p className="text-sm text-[var(--foreground)] italic">
                <strong>Pro tip:</strong> If it <em>looks</em> simple but feels hard to code, 
                you missed decomposition. Go back and break it down further. Every complex UI 
                is just simple parts arranged correctly.
              </p>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              2. Ignore Colors and Fonts First
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              This is where 90% of beginners waste time. They see a beautiful gradient or 
              a custom font and immediately try to match it. Don't. Structure comes first.
            </p>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Start with Boxes
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Draw invisible boxes around every element. Every component is just a box. 
              Understand the box model before you worry about what's inside.
            </p>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// Start with this
<div className="border border-gray-300">
  <div className="border border-gray-300">
    <div className="border border-gray-300">
      {/* Your content */}
    </div>
  </div>
</div>

// Once layout is correct, remove borders`}
              </code>
            </pre>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Spacing is Everything
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              The space between elements is more important than the elements themselves. 
              If spacing is wrong, the UI is wrong. Period.
            </p>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Use placeholder colors to focus on structure:
            </p>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// Brutal placeholders - no distractions
className="bg-gray-200 text-gray-800 font-system"
className="bg-gray-300 text-gray-900 font-system"
className="bg-gray-100 text-gray-700 font-system"

// System font = no font loading delays
// Gray scale = no color decisions yet`}
              </code>
            </pre>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Alignment and Proportions
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Check alignment: Are elements left-aligned, centered, or right-aligned? 
              What's the ratio between different sections? Is it 50/50, 30/70, or something else?
            </p>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Common mistakes:
            </p>
            <ul className="list-none space-y-2 mb-4 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">❌</span>
                <span>Matching colors before structure is solid</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">❌</span>
                <span>Spending hours finding the "perfect" font</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">✅</span>
                <span>Building the skeleton first, then adding skin</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              3. Rebuild the Layout Skeleton
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Modern CSS gives you everything you need with just a few properties. 
              If you're reaching for complex solutions, you're probably overthinking it.
            </p>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Use Flexbox for 1D Layouts
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Flexbox handles 99% of layouts. It's your primary tool.
            </p>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// Column (vertical stack)
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Row (horizontal)
<div className="flex flex-row gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Space between
<div className="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>

// Center everything
<div className="flex items-center justify-center">
  <div>Centered</div>
</div>`}
              </code>
            </pre>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Use Grid for 2D Layouts
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              When you need rows AND columns, use CSS Grid.
            </p>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// Simple grid
<div className="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Items */}
</div>

// Complex grid with areas
<div className="grid grid-cols-[200px_1fr] gap-4">
  <div>Sidebar</div>
  <div>Main</div>
</div>`}
              </code>
            </pre>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Gap and Padding
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Use <code className="bg-[var(--muted)] px-1.5 py-0.5 rounded-sm border border-[var(--border)] text-xs">gap</code> for space between flex/grid children. 
              Use <code className="bg-[var(--muted)] px-1.5 py-0.5 rounded-sm border border-[var(--border)] text-xs">padding</code> for internal space.
            </p>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// Gap = space between children
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Padding = space inside
<div className="p-4">
  <div>Content</div>
</div>

// Both together
<div className="flex gap-4 p-6">
  <div className="p-3">Item 1</div>
  <div className="p-3">Item 2</div>
</div>`}
              </code>
            </pre>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              When NOT to Use Absolute Positioning
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Absolute positioning breaks the flow. Only use it for:
            </p>
            <ul className="list-none space-y-2 mb-4 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Badges</strong>: Small indicators on top of other elements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Overlays</strong>: Modals, dropdowns, tooltips</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Floating actions</strong>: Fixed buttons that stay in viewport</span>
              </li>
            </ul>
            <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-4 mt-4">
              <p className="text-sm text-[var(--foreground)]">
                <strong>Red flag:</strong> If you find yourself writing{" "}
                <code className="bg-[var(--code-bg)] px-1.5 py-0.5 rounded-sm border border-[var(--border)] text-xs">
                  top: 13px; left: 47px;
                </code>
                , you're doing it wrong. Use flex or grid instead.
              </p>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              4. Reverse-Engineer Spacing (The Secret)
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Designers think in systems, even when they don't realize it. Most modern 
              design systems use an 8px base unit. Learn to see it.
            </p>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              The 8px System
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Everything is a multiple of 4 or 8 pixels. This creates visual harmony 
              and makes your code predictable.
            </p>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// Spacing scale (8px base)
4px   → 0.5 (tight, icons to text)
8px   → 1   (tight, related items)
12px  → 1.5 (normal, form fields)
16px  → 2   (normal, card padding)
24px  → 3   (section spacing)
32px  → 4   (section spacing)
48px  → 6   (page sections)
64px  → 8   (major sections)
96px  → 12  (hero sections)`}
              </code>
            </pre>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              How to Measure
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Use browser dev tools or a design tool to measure distances. Then round 
              to the nearest token. Never use random numbers like 13px or 47px.
            </p>
            <ul className="list-none space-y-2 mb-4 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Tight spacing</strong> (4px, 8px): Icons next to text, badges, tags</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Normal spacing</strong> (12px, 16px): Between form fields, card padding, list items</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Section spacing</strong> (24px, 32px): Between major sections, headers and content</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Page spacing</strong> (48px, 64px): Between page sections, hero spacing</span>
              </li>
            </ul>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Practical Example
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              You measure the gap between two cards: it's 18px. Don't use 18px. 
              Round to 16px (closest token). If it feels too tight, use 24px. 
              The system is more important than exact pixels.
            </p>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// ❌ Bad: Random numbers
<div className="flex gap-[18px] p-[13px]">

// ✅ Good: System tokens
<div className="flex gap-4 p-3">
// or
<div className="flex gap-6 p-4">`}
              </code>
            </pre>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              5. Typography is Hierarchy, Not Font Choice
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              You don't need the exact font to nail the UI. You need the right hierarchy. 
              A system font with correct sizing will look 90% as good as a custom font.
            </p>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              The Three Properties That Matter
            </h3>
            <ul className="list-none space-y-3 mb-6 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">1.</span>
                <div>
                  <strong>Size ratio</strong>: How much bigger is the heading than the body? 
                  1.5x? 2x? 3x? This creates visual hierarchy.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">2.</span>
                <div>
                  <strong>Weight</strong>: Regular (400), medium (500), semibold (600), bold (700). 
                  Heavier = more important.
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">3.</span>
                <div>
                  <strong>Line height</strong>: Usually 1.5 for body, 1.2-1.3 for headings. 
                  Tighter = more compact, looser = more readable.
                </div>
              </li>
            </ul>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Common Typography Patterns
            </h3>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// Hero/Page Title
className="text-3xl md:text-4xl font-bold leading-tight"

// Section Heading
className="text-xl md:text-2xl font-semibold leading-snug"

// Card Title
className="text-lg font-semibold leading-snug"

// Body Text
className="text-sm md:text-base leading-relaxed"

// Small Text / Meta
className="text-xs text-muted-foreground leading-normal"

// Caption / Helper
className="text-xs opacity-60 leading-normal"`}
              </code>
            </pre>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              The Black & White Test
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Convert your recreation to grayscale. If the hierarchy is still clear—if you 
              can tell what's important just from size and weight—you've nailed typography. 
              If everything looks the same, your sizes or weights are too similar.
            </p>
            <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-4 mt-4">
              <p className="text-sm text-[var(--foreground)]">
                <strong>Pro tip:</strong> Start with system fonts (system-ui, -apple-system). 
                Get the hierarchy right first. Then, if needed, swap in the custom font. 
                The hierarchy will transfer.
              </p>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              6. Only Now Add Polish
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Structure is done. Spacing is correct. Typography works. Now you can add the 
              visual details that make it beautiful.
            </p>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Colors
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Extract colors from the screenshot. Use a color picker tool. But remember: 
              if the structure is wrong, perfect colors won't save it.
            </p>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Common color roles:
            </p>
            <ul className="list-none space-y-2 mb-4 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Primary</strong>: Main brand color, CTAs, links</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Background</strong>: Page, card, surface colors</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Text</strong>: Primary text, secondary text, muted text</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Border</strong>: Dividers, outlines, subtle separators</span>
              </li>
            </ul>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Border Radius
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Modern UIs use subtle rounding. Common values:
            </p>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// Small elements (buttons, badges)
rounded-sm  // 2px
rounded     // 4px

// Cards, inputs
rounded-md  // 6px
rounded-lg  // 8px

// Large containers
rounded-xl  // 12px
rounded-2xl // 16px`}
              </code>
            </pre>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Shadows
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Shadows are <strong>subtle or nonexistent</strong> in modern UI. If you notice 
              the shadow, it's too much. Most modern designs use:
            </p>
            <ul className="list-none space-y-2 mb-4 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>No shadow (flat design)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>Subtle border instead of shadow</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>Very light shadow (barely visible)</span>
              </li>
            </ul>
            <pre className="bg-[var(--code-bg)] border border-[var(--border)] rounded-sm p-4 mb-4 overflow-x-auto text-xs font-mono">
              <code className="text-[var(--code-text)]">
{`// ❌ Too much
shadow-lg
shadow-xl

// ✅ Subtle
shadow-sm
// or just
border border-gray-200`}
              </code>
            </pre>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Gradients and Effects
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Use sparingly. Most modern UIs are flat. Gradients are usually reserved for 
              hero sections or special CTAs. Don't overdo it.
            </p>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              7. Compare Brutally
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              You're done coding. Now you need to verify. This step separates good recreations 
              from great ones.
            </p>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Side-by-Side Comparison
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Put the original screenshot next to your recreation. Use a split-screen view. 
              Compare systematically:
            </p>
            <ul className="list-none space-y-2 mb-4 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Spacing</strong>: Does the gap between elements match?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Density</strong>: Does it feel as heavy or light?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Alignment</strong>: Are elements aligned the same way?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Proportions</strong>: Are widths and heights in the same ratio?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span><strong>Typography</strong>: Does the text hierarchy match?</span>
              </li>
            </ul>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              The "Feels Off" Test
            </h3>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              If your version feels "off" but you can't pinpoint why, it's almost always:
            </p>
            <ol className="list-decimal space-y-2 mb-4 ml-6">
              <li><strong>Spacing is wrong</strong> (most common)</li>
              <li><strong>Typography hierarchy is off</strong> (sizes or weights too similar/different)</li>
              <li><strong>Alignment is inconsistent</strong> (things aren't lining up)</li>
            </ol>

            <h3 className="text-base font-mono font-semibold mb-3 mt-6 tracking-tight">
              Tools for Comparison
            </h3>
            <ul className="list-none space-y-2 mb-4 ml-0">
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>Browser dev tools overlay (measure distances)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>Figma/Design tool side-by-side view</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                <span>Take a screenshot and overlay in an image editor</span>
              </li>
            </ul>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Mental Checklist (Burn This In)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-mono font-semibold mb-3 text-red-500">
                  ❌ Don't Do This
                </h3>
                <ul className="list-none space-y-2 ml-0">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                    <span>Match exact pixels (13px, 47px, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                    <span>Use absolute positioning for layout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                    <span>Spend hours finding the perfect font</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                    <span>Code before understanding structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                    <span>Use random spacing values</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-mono font-semibold mb-3 text-green-500">
                  ✅ Do This Instead
                </h3>
                <ul className="list-none space-y-2 ml-0">
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                    <span>Use system tokens (4px, 8px, 16px, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                    <span>Use flex/grid for all layouts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                    <span>Focus on hierarchy, not font choice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                    <span>Decompose first, code second</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[var(--muted-foreground)]">•</span>
                    <span>Build structure before polish</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Common Mistakes and How to Avoid Them
            </h2>

            <div className="space-y-6">
              <div className="border border-[var(--border)] rounded-sm p-4">
                <h3 className="text-sm font-mono font-semibold mb-2">
                  Mistake: Starting with colors and fonts
                </h3>
                <p className="text-sm text-[var(--foreground)] mb-2">
                  You see a beautiful gradient and immediately try to recreate it. 
                  Two hours later, you realize the layout is broken.
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  <strong>Fix:</strong> Structure first. Use gray placeholders. Add colors last.
                </p>
              </div>

              <div className="border border-[var(--border)] rounded-sm p-4">
                <h3 className="text-sm font-mono font-semibold mb-2">
                  Mistake: Using absolute positioning for layout
                </h3>
                <p className="text-sm text-[var(--foreground)] mb-2">
                  You position everything with <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs">top</code> and <code className="bg-[var(--muted)] px-1 py-0.5 rounded text-xs">left</code>. 
                  It works on your screen but breaks everywhere else.
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  <strong>Fix:</strong> Use flex or grid. They're responsive by default.
                </p>
              </div>

              <div className="border border-[var(--border)] rounded-sm p-4">
                <h3 className="text-sm font-mono font-semibold mb-2">
                  Mistake: Not seeing the spacing system
                </h3>
                <p className="text-sm text-[var(--foreground)] mb-2">
                  You measure 18px and use 18px. Then 23px. Then 31px. Your spacing 
                  looks random and unprofessional.
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  <strong>Fix:</strong> Round to the nearest 4px or 8px token. Use a system.
                </p>
              </div>

              <div className="border border-[var(--border)] rounded-sm p-4">
                <h3 className="text-sm font-mono font-semibold mb-2">
                  Mistake: Coding before thinking
                </h3>
                <p className="text-sm text-[var(--foreground)] mb-2">
                  You start coding immediately. Halfway through, you realize you need 
                  to restructure everything.
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  <strong>Fix:</strong> Spend 10 minutes decomposing first. Draw boxes. 
                  Map the hierarchy. Then code.
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Practice Exercise: 15-Minute Daily Drill
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Do this every day until it becomes automatic. Pick a simple UI component 
              from Dribbble, Behance, or any design site.
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-2 border-[var(--accent)] pl-4">
                <h3 className="text-sm font-mono font-semibold mb-2">
                  Minute 0-2: Decompose
                </h3>
                <p className="text-sm text-[var(--foreground)]">
                  Write down: layout pattern, component hierarchy, repeated elements, states.
                </p>
              </div>

              <div className="border-l-2 border-[var(--accent)] pl-4">
                <h3 className="text-sm font-mono font-semibold mb-2">
                  Minute 2-8: Build Structure
                </h3>
                <p className="text-sm text-[var(--foreground)]">
                  Code the layout skeleton with flex/grid. Use gray placeholders. 
                  Focus only on boxes and spacing.
                </p>
              </div>

              <div className="border-l-2 border-[var(--accent)] pl-4">
                <h3 className="text-sm font-mono font-semibold mb-2">
                  Minute 8-12: Add Typography
                </h3>
                <p className="text-sm text-[var(--foreground)]">
                  Add text with correct hierarchy. Use system fonts. Get sizes and 
                  weights right.
                </p>
              </div>

              <div className="border-l-2 border-[var(--accent)] pl-4">
                <h3 className="text-sm font-mono font-semibold mb-2">
                  Minute 12-15: Polish
                </h3>
                <p className="text-sm text-[var(--foreground)]">
                  Add colors, borders, subtle shadows. Compare side-by-side with original.
                </p>
              </div>
            </div>

            <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-4">
              <p className="text-sm text-[var(--foreground)]">
                <strong>Goal:</strong> After 2 weeks, you should be able to recreate 
                simple UIs in 15 minutes without thinking. The process becomes automatic.
              </p>
            </div>
          </section>

          <div className="h-px bg-[var(--border)] my-12"></div>

          <section className="mb-12">
            <h2 className="text-xl font-mono font-semibold mb-6 tracking-tight">
              Hard Truth
            </h2>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              Most people fail at UI recreation because they <strong>code too early</strong> and{" "}
              <strong>think too little</strong>.
            </p>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              UI is logic before it's CSS. The structure, the relationships, the hierarchy—these 
              are all logical problems. CSS is just the tool to express the solution.
            </p>
            <p className="mb-4 text-[var(--foreground)] leading-relaxed">
              If you spend 80% of your time thinking and 20% coding, you'll create better UIs 
              faster than someone who does the opposite.
            </p>
            <div className="bg-[var(--muted)] border border-[var(--border)] rounded-sm p-4 mt-6">
              <p className="text-sm text-[var(--foreground)]">
                <strong>Remember:</strong> Perfect pixels don't matter if the structure is wrong. 
                A beautiful gradient won't save a broken layout. Focus on systems, not details. 
                Details come last.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
