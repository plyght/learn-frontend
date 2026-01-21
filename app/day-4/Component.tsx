"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Day4Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      const maxScroll = 200;
      const progress = Math.min(scrollDistance / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CSS Variables for the design system
  const styles = {
    '--font-sans': 'var(--font-familjen), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    '--font-display': 'var(--font-familjen), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    '--spacing': '0.25rem',
    '--container-7xl': '80rem',
    '--text-sm': '0.875rem',
    '--text-lg': '1.125rem',
    '--text-5xl': '3rem',
    '--font-weight-medium': '500',
    '--font-weight-semibold': '600',
    '--tracking-tight': '-0.025em',
    '--radius-md': '0.375rem',
    '--radius-lg': '0.5rem',
    '--color-mist-100': 'oklch(96.3% 0.002 197.1)',
    '--color-mist-200': 'oklch(92.5% 0.005 214.3)',
    '--color-mist-400': 'oklch(72.3% 0.014 214.4)',
    '--color-mist-600': 'oklch(45% 0.017 213.2)',
    '--color-mist-950': 'oklch(14.8% 0.004 228.8)',
    '--scroll-padding-top': '5.25rem',
  } as React.CSSProperties;

  return (
      <div 
        className="flex flex-col w-full" 
        style={{ 
          ...styles, 
          fontFamily: 'var(--font-sans)', 
          backgroundColor: '#F1F3F2',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      >
        {/* Navigation Header */}
        <header 
          className="sticky top-0 z-50"
          style={{ 
            backgroundColor: `rgba(241, 243, 242, ${0.5 + (scrollProgress * 0.5)})`,
            backdropFilter: `blur(${scrollProgress * 16}px) saturate(${100 + (scrollProgress * 80)}%)`,
            WebkitBackdropFilter: `blur(${scrollProgress * 16}px) saturate(${100 + (scrollProgress * 80)}%)`
          }}
        >
          <nav className="mx-auto" style={{ maxWidth: 'var(--container-7xl)', paddingInline: 'calc(var(--spacing)*10)' }}>
            <div className="flex items-center justify-between" style={{ height: '5.25rem' }}>
              {/* Left Navigation Links */}
              <div className="hidden lg:flex items-center flex-1" style={{ gap: 'calc(var(--spacing)*8)' }}>
                <a 
                  href="#" 
                  className="flex items-center"
                  style={{ 
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-950)'
                  }}
                >
                  Pricing
                </a>
                <a 
                  href="#" 
                  className="flex items-center"
                  style={{ 
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-950)'
                  }}
                >
                  About
                </a>
                <a 
                  href="#" 
                  className="flex items-center"
                  style={{ 
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-950)'
                  }}
                >
                  Docs
                </a>
              </div>

              {/* Center Logo */}
              <div className="flex justify-center flex-1">
                <a href="#" className="flex items-center">
                  <span 
                    style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-mist-950)',
                      fontFamily: 'var(--font-display)'
                    }}
                  >
                    Oatmeal.
                  </span>
                </a>
              </div>

              {/* Right Actions */}
              <div className="hidden lg:flex items-center justify-end flex-1" style={{ gap: 'calc(var(--spacing)*4)' }}>
                <a 
                  href="#" 
                  style={{ 
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-950)'
                  }}
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center"
                  style={{
                    padding: 'calc(var(--spacing)*2) calc(var(--spacing)*3)',
                    backgroundColor: 'var(--color-mist-950)',
                    color: 'white',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    borderRadius: '9999px'
                  }}
                >
                  Get started
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2"
                style={{ color: 'var(--color-mist-950)' }}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t" style={{ backgroundColor: '#F1F3F2', borderColor: 'var(--color-mist-200)' }}>
              <div className="px-4 py-4 space-y-3">
                <a 
                  href="#" 
                  className="flex items-center justify-between"
                  style={{ 
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-950)'
                  }}
                >
                  Pricing
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-between"
                  style={{ 
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-950)'
                  }}
                >
                  About
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-between"
                  style={{ 
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-950)'
                  }}
                >
                  Docs
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-between"
                  style={{ 
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-950)'
                  }}
                >
                  Log in
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="w-full" style={{ backgroundColor: '#F1F3F2' }}>
          <div 
            className="mx-auto flex flex-col items-start text-left"
            style={{ 
              maxWidth: 'var(--container-7xl)',
              paddingInline: 'calc(var(--spacing)*10)',
              paddingTop: 'calc(var(--spacing)*8)',
              paddingBottom: 'calc(var(--spacing)*16)',
              gap: 'calc(var(--spacing)*16)'
            }}
          >
            <div className="flex flex-col items-start" style={{ gap: 'calc(var(--spacing)*6)' }}>
              {/* Announcement Banner */}
              <a
                href="#"
                className="inline-flex items-center group"
                style={{
                  padding: 'calc(var(--spacing)*2) calc(var(--spacing)*4)',
                  marginBottom: 'calc(var(--spacing)*8)',
                  borderRadius: '9999px',
                  backgroundColor: '#E6E8EA'
                }}
              >
                <span 
                  style={{ 
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-950)'
                  }}
                >
                  Oatmeal raises 80M Series A funding
                </span>
                <span 
                  style={{
                    width: '1px',
                    height: '0.75rem',
                    backgroundColor: 'var(--color-mist-400)',
                    marginLeft: 'calc(var(--spacing)*3)',
                    marginRight: 'calc(var(--spacing)*3)'
                  }}
                />
                <span 
                  className="inline-flex items-center"
                  style={{ 
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-600)',
                    gap: 'calc(var(--spacing)*1.5)',
                    lineHeight: '1'
                  }}
                >
                  Learn more
                  <svg width="5" height="8" viewBox="0 0 5 8" fill="currentColor" style={{ width: '0.3125rem', height: '0.5rem', flexShrink: 0, marginTop: '0.125rem' }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M.22.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06L1.28 7.78A.75.75 0 01.22 6.72L2.94 4 .22 1.28a.75.75 0 010-1.06z" />
                  </svg>
                </span>
              </a>

              {/* Main Headline */}
              <h1 
                style={{ 
                  fontSize: '3.5rem',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-mist-950)',
                  letterSpacing: 'var(--tracking-tight)',
                  fontFamily: 'var(--font-display)',
                  lineHeight: '1.1',
                  marginBottom: 'calc(var(--spacing)*6)'
                }}
              >
                Customer support that<br />feels like a conversation.
              </h1>

              {/* Description */}
              <div style={{ marginBottom: 'calc(var(--spacing)*10)' }}>
                <p 
                  style={{ 
                    fontSize: '1.375rem',
                    color: 'var(--color-mist-600)',
                    lineHeight: '1.6',
                    maxWidth: '56rem'
                  }}
                >
                  Simplify your shared inbox, collaborate effortlessly, and give every customer a reply that<br />feels personal — even if it was generated by a bot.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-start" style={{ gap: 'calc(var(--spacing)*4)' }}>
                <a
                  href="#"
                  className="inline-flex items-center justify-center"
                  style={{
                    padding: 'calc(var(--spacing)*2.5) calc(var(--spacing)*3)',
                    backgroundColor: 'var(--color-mist-950)',
                    color: 'white',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    borderRadius: '9999px'
                  }}
                >
                  Start free trial
                </a>
                <a
                  href="#"
                  className="inline-flex items-center"
                  style={{
                    padding: 'calc(var(--spacing)*2) 0',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-mist-950)',
                    gap: 'calc(var(--spacing)*2)'
                  }}
                >
                  See how it works
                  <svg width="13" height="7" viewBox="0 0 13 7" fill="none" style={{ width: '0.8125rem', height: '0.4375rem' }}>
                    <path
                      d="M12.5049 3.49512L0.504883 3.49512"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 6.5L12.5 3.5L9.5 0.5"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div 
              className="flex items-center justify-center w-full"
              style={{ 
                marginTop: 'calc(var(--spacing)*16)'
              }}
            >
              <div
                className="w-full"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--color-mist-200)',
                  aspectRatio: '16/9',
                  maxWidth: '100%',
                  overflow: 'hidden'
                }}
              >
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    color: 'var(--color-mist-400)',
                    fontSize: 'var(--text-sm)'
                  }}
                >
                  Image placeholder
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

