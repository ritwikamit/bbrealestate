import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

/**
 * 1. Vector Nav Home Icon (Sacred Architectural Sanctuary / Estate Pavilion)
 * Validated by custom-icons skill (24x24 viewBox)
 */
export const NavIconHome: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 10.5L12 3l9 7.5" />
    <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
    <path d="M9 21V12h6v9" />
    <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/**
 * 2. Vector Nav Developments Icon (Master-Planned Plotted Layout Matrix)
 * Validated by custom-icons skill (24x24 viewBox)
 */
export const NavIconDevelopments: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    <circle cx="17.25" cy="6.75" r="1.25" fill="currentColor" stroke="none" />
  </svg>
);

/**
 * 3. Vector Nav Calculator Icon (Precision Land Computing & EMI Engine)
 * Validated by custom-icons skill (24x24 viewBox)
 */
export const NavIconCalculator: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
    <rect x="7" y="5.5" width="10" height="3.5" rx="0.75" />
    <line x1="7.5" y1="12.5" x2="9.5" y2="12.5" />
    <line x1="8.5" y1="11.5" x2="8.5" y2="13.5" />
    <line x1="14.5" y1="12.5" x2="16.5" y2="12.5" />
    <line x1="7.5" y1="17" x2="9.5" y2="17" />
    <line x1="14.5" y1="16" x2="16.5" y2="16" />
    <line x1="14.5" y1="18" x2="16.5" y2="18" />
  </svg>
);

/**
 * 4. Vector Nav Call Icon (Official Direct Desk Handset with Signal Wave)
 * Validated by custom-icons skill (24x24 viewBox)
 */
export const NavIconCall: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.5 4.5a6 6 0 0 1 5 5" />
    <path d="M14.5 1.5a9.5 9.5 0 0 1 8 8" />
  </svg>
);

/**
 * 5. Vector Nav Enquire Icon (Sacred Enquiry Dossier & Consultation Registry)
 * Validated by custom-icons skill (24x24 viewBox)
 */
export const NavIconEnquire: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <path d="M10 9H8" />
  </svg>
);
