"use client";

// Icon Components
function GoogleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="w-4 h-4">
      <path
        d="M18.7846 10.2789C18.7846 9.66221 18.7346 9.04221 18.628 8.43555H10.0713V11.9289H14.9713C14.768 13.0555 14.1146 14.0522 13.158 14.6855V16.9522H16.0813C17.798 15.3722 18.7846 13.0389 18.7846 10.2789Z"
        fill="#4285F4"
      />
      <path
        d="M10.0715 19.1429C12.5182 19.1429 14.5815 18.3396 16.0848 16.9529L13.1615 14.6862C12.3482 15.2396 11.2982 15.5529 10.0748 15.5529C7.70818 15.5529 5.70151 13.9562 4.98151 11.8096H1.96484V14.1462C3.50484 17.2096 6.64151 19.1429 10.0715 19.1429Z"
        fill="#34A853"
      />
      <path
        d="M4.97833 11.81C4.59833 10.6833 4.59833 9.46333 4.97833 8.33667V6H1.965C0.678333 8.56333 0.678333 11.5833 1.965 14.1467L4.97833 11.81Z"
        fill="#FBBC04"
      />
      <path
        d="M10.0715 4.59061C11.3648 4.57061 12.6148 5.05728 13.5515 5.95061L16.1415 3.36061C14.5015 1.82061 12.3248 0.973945 10.0715 1.00061C6.64151 1.00061 3.50484 2.93394 1.96484 6.00061L4.97818 8.33728C5.69484 6.18728 7.70484 4.59061 10.0715 4.59061Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 3.8L2.75 2.75V12.2L8 13.25M8 3.8L13.25 2.75V12.2L8 13.25M8 3.8V13.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 7.98999V7.99999M3.46012 4.84271L2.81628 5.88403C2.68081 6.10314 2.76504 6.38383 2.9599 6.55612C3.82824 7.32388 3.82825 8.67611 2.95992 9.44387C2.76507 9.61616 2.68084 9.89685 2.81631 10.116L3.46014 11.1573C3.59 11.3673 3.86848 11.4338 4.11036 11.3616C5.26915 11.0161 6.54871 11.678 6.8223 12.8011C6.88157 13.0444 7.08518 13.25 7.34377 13.25H8.65623C8.91482 13.25 9.11842 13.0444 9.1777 12.8011C9.45129 11.678 10.7308 11.0161 11.8896 11.3616C12.1315 11.4338 12.41 11.3673 12.5399 11.1573L13.1837 10.116C13.3192 9.89685 13.2349 9.61616 13.0401 9.44387C12.1717 8.67611 12.1718 7.32388 13.0401 6.55612C13.235 6.38383 13.3192 6.10314 13.1837 5.88403L12.5399 4.84271C12.41 4.63267 12.1315 4.56622 11.8897 4.63835C10.7309 4.98389 9.45129 4.32196 9.1777 3.19892C9.11842 2.95562 8.91482 2.75 8.65623 2.75H7.34377C7.08518 2.75 6.88157 2.95562 6.8223 3.19892C6.54871 4.32196 5.26913 4.98389 4.11033 4.63835C3.86845 4.56622 3.58997 4.63267 3.46012 4.84271Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Badge Component
function Badge({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "green" | "orange";
}) {
  const baseClasses =
    "relative inline-flex shrink-0 items-center rounded-sm px-2 py-1 text-xs font-medium ring-1 ring-inset";
  const variantClasses = {
    green:
      "bg-(--ceramic-green-400)/16 text-(--ceramic-positive) ring-(--ceramic-green-400)/16",
    orange:
      "bg-(--ceramic-orange-500)/24 text-(--ceramic-warning) ring-(--ceramic-orange-500)/16",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      <span className="px-0.5">{children}</span>
    </span>
  );
}

// Action Button Component
function ActionButton({
  icon: Icon,
  label,
  href,
  onClick,
}: {
  icon: React.ComponentType;
  label: string;
  href?: string;
  onClick?: () => void;
}) {
  const buttonClasses =
    "group/button inline-flex flex-none shrink-0 select-none transition relative text-start overflow-hidden justify-between rounded-[0.375rem] text-(--ceramic-primary) hover:bg-(--ceramic-gray-1100) hover:ring-1 hover:ring-[#3D3D4A]/88 p-1.5";

  if (href) {
    return (
      <a
        data-slot="button"
        className={buttonClasses}
        aria-label={label}
        href={href}
        target="_blank"
        rel="noopener"
        tabIndex={0}
      >
        <span className="flex w-full items-center self-stretch whitespace-nowrap p-0.5">
          <Icon />
        </span>
      </a>
    );
  }

  return (
    <button
      data-slot="button"
      data-table-row-link="true"
      type="button"
      className={buttonClasses}
      tabIndex={0}
      aria-label={label}
      onClick={onClick}
    >
      <span className="flex w-full items-center self-stretch whitespace-nowrap p-0.5">
        <Icon />
      </span>
    </button>
  );
}

// Table Cell Base Styles
const cellBaseClasses =
  "overflow-hidden border-0 px-4 py-4 text-left border-t border-(--ceramic-bg-separator)";

export default function Day2Component() {
  const cardStyles = {
    "--card-inset": "0.25rem",
    "--card-px": "1.5rem",
    "--card-section-px": "calc(var(--card-px) - var(--card-inset))",
    "--card-section-py": "var(--card-px)",
  } as React.CSSProperties;

  const shadowClasses =
    "shadow-[inset_0_0_1px_1px_rgba(255,255,255,.01),0_1px_3px_0_rgba(0,0,0,.4),0_0_3px_0_rgba(0,0,0,.2)]";

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <section
        data-variant="default"
        className="group flex flex-col rounded-2xl bg-(--ceramic-gray-1500) w-full max-w-4xl padding-y-0"
        style={cardStyles}
      >
        {/* Header */}
        <div className="flex sm:grid sm:grid-cols-[18rem_1fr_1fr] px-2 py-1">
          <span className="px-4 py-3 text-sm font-medium text-(--ceramic-secondary) w-44">
            Provider
          </span>
          <span className="px-4 py-3 text-sm font-medium text-(--ceramic-secondary)">
            Configuration
          </span>
          <span className="px-4 py-3 text-sm font-medium text-(--ceramic-secondary)"></span>
        </div>

        {/* Card Body */}
        <div
          data-slot="card-body"
          className={`mx-[3] mb-(--card-inset) rounded-xl bg-(--ceramic-gray-1400) border border-(--ceramic-black)/20 ${shadowClasses} overflow-hidden`}
        >
          <div className="overflow-hidden" style={{ height: "72px" }}>
            <div className="relative isolate flex flex-col overflow-hidden rounded-xl -mx-1 -my-0.5 px-1 py-0.5">
              <div className="relative overflow-x-auto overscroll-x-contain">
                <table className="relative min-w-full table-fixed whitespace-nowrap">
                  <tbody>
                    <tr className="group/table-row cursor-pointer hover:bg-(--ceramic-gray-700)/5 transition-colors">
                      {/* Provider Column */}
                      <td className={`${cellBaseClasses} w-44 sm:w-[18rem]`}>
                        <div className="flex items-center gap-3 max-w-36 sm:max-w-[16rem]">
                          <span className="flex items-center justify-center w-10 h-10 rounded-md shrink-0 border-2 border-(--ceramic-bg-separator)">
                            <GoogleIcon />
                          </span>
                          <span className="flex flex-col min-w-0">
                            <span className="text-(--ceramic-primary) font-medium truncate">
                              Google
                            </span>
                            <span className="text-(--ceramic-secondary) text-sm truncate">
                              Social provider
                            </span>
                          </span>
                        </div>
                      </td>

                      {/* Configuration Column */}
                      <td className={cellBaseClasses}>
                        <div className="flex items-center gap-2">
                          <Badge variant="green">Used for sign-in</Badge>
                          <Badge variant="orange">Shared Credentials</Badge>
                        </div>
                      </td>

                      {/* Actions Column */}
                      <td className={cellBaseClasses}>
                        <div className="flex items-center justify-end gap-1">
                          <ActionButton
                            icon={BookIcon}
                            label="View docs"
                            href="https://clerk.com/docs/guides/configure/auth-strategies/social-connections/google"
                          />
                          <ActionButton
                            icon={SettingsIcon}
                            label="Edit Google settings"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
