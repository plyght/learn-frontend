"use client";

import { useState } from "react";
import { Link as LinkIcon, MoreVertical, Clock, Zap } from "lucide-react";

export default function Day1Component() {
  const [url, setUrl] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [faviconError, setFaviconError] = useState(false);

  const getFaviconUrl = (urlString: string) => {
    if (!urlString) return null;
    try {
      const urlObj = new URL(
        urlString.startsWith("http") ? urlString : `https://${urlString}`,
      );
      return `https://www.google.com/s2/favicons?domain=${urlObj.hostname}&sz=32`;
    } catch {
      return null;
    }
  };

  const faviconUrl = getFaviconUrl(url);

  const handleFaviconError = () => {
    setFaviconError(true);
  };

  const showFavicon = faviconUrl && !faviconError;

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
    setFaviconError(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6" style={{ fontFamily: 'var(--font-inter)' }}>
      <div className="relative w-full max-w-md">
        <div className="absolute -top-6 left-0 z-0">
          <div className="flex items-center gap-1.5 bg-yellow-200 text-yellow-800 px-2.5 pb-10 pt-2 rounded-t-lg text-xs font-medium shadow-sm" style={{ fontFamily: 'var(--font-inter)' }}>
            <Zap className="w-2.5 h-2.5" fill="currentColor" />
            <span>Trigger</span>
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl overflow-visible shadow-sm relative z-10">
          <div className="flex items-center justify-between px-3 pt-3 pb-2">
            <div className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-stone-600" />
              <span className="text-sm font-medium text-stone-900" style={{ fontFamily: 'var(--font-inter)' }}>
                Input URL
              </span>
            </div>
            <button className="p-1 hover:bg-stone-100 rounded transition-colors">
              <MoreVertical className="w-4 h-4 text-stone-600" />
            </button>
          </div>

          <div className="px-3 pb-3">
            <div className="relative bg-stone-100 rounded-md overflow-hidden flex items-stretch">
              <div className="flex-shrink-0 bg-white border border-stone-200 rounded-l-md flex items-center justify-center px-2">
                {showFavicon ? (
                  <img
                    src={faviconUrl!}
                    alt="favicon"
                    className="w-6 h-3"
                    onError={handleFaviconError}
                  />
                ) : (
                  <LinkIcon className="w-3 h-3 text-stone-500" />
                )}
              </div>
              <div className="flex-1 relative min-w-0 overflow-hidden px-2 py-2">
                {!isFocused && url && (
                  <div className="absolute inset-0 flex items-center pointer-events-none">
                    <span className="text-sm text-stone-900 truncate block w-full" style={{ fontFamily: 'var(--font-inter)' }}>
                      {url}
                    </span>
                  </div>
                )}
                <input
                  type="text"
                  value={url}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="youtube.com/watch?v=dQw4w9WgXcQ&list=PLrAXtmRdnEQy6nuLMH..."
                  className={`w-full bg-transparent text-base text-stone-900 placeholder-stone-400 outline-none ${
                    !isFocused && url ? "opacity-0" : ""
                  }`}
                  style={isFocused ? { width: "100%", fontFamily: 'var(--font-inter)' } : { fontFamily: 'var(--font-inter)' }}
                />
                {isFocused && url && (
                  <>
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-stone-100 via-stone-100/50 to-transparent pointer-events-none z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-stone-100 via-stone-100/50 to-transparent pointer-events-none z-10"></div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-1.5">
              <div className="flex items-center gap-1.5 bg-stone-100 px-1.5 py-0.5 rounded-md text-xs text-stone-700" style={{ fontFamily: 'var(--font-inter)' }}>
                <Clock className="w-3 h-3" />
                <span>0.0 sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
