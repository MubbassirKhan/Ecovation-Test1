/**
 * siteData — single source of truth for brand, navigation, contact and
 * the business story. Contact details are the client's real details and
 * must not be changed.
 */

export const SITE = {
  name: 'Ecovation',
  legalName: 'Ecovation Interiors',
  city: 'Bangalore',
  country: 'India',
  domain: 'https://ecovation.co.in',
  tagline: 'Sustainable Interiors & Acoustics',
  description:
    'Transforming modern workspaces with sustainable acoustic solutions. Custom PET panels and interior design built for comfort, clarity, and environmental responsibility.',
};

export const CONTACT = {
  phoneDisplay: '+91 9513877866',
  phoneHref: 'tel:+919513877866',
  email: 'info@ecovation.co.in',
  emailHref: 'mailto:info@ecovation.co.in',
  addressLine1: 'Unit No, B/19/01, Nagasandra Tumkur Road',
  addressLine2: 'Bangalore — 560073',
  address: 'Unit No, B/19/01, Nagasandra Tumkur Road, Bangalore — 560073',
  region: 'Karnataka, India',
};

export const NAVIGATION = [
  { label: 'Home', to: '/' },
  { label: 'Workspaces', to: '/workspaces' },
  { label: 'Residential', to: '/residential' },
  { label: 'Acoustic Panels', to: '/acoustic-panels' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export const MARQUEE_WORDS = [
  'Workspaces',
  'PET Acoustic Panels',
  'Acoustic Planning',
  'Recycled PET',
  'Custom Finishes',
  'End-to-End Delivery',
];

export const LOGO = {
  /** Official logo mark — the client's own asset, never modified. */
  src: '/images/logo.png',
  alt: 'Ecovation — sustainable workspaces & PET acoustic panels, Bangalore',
};

/* ------------------------------------------------------------
   Business story — real Ecovation content (not invented).
   ------------------------------------------------------------ */

export const HIGHLIGHTS = [
  { value: '38+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '67', label: 'Panel Color Options' },
];

export const KEY_CAPABILITIES = [
  'Recycled PET Materials',
  'Acoustic Planning',
  'Custom Finishes',
  'End-to-End Delivery',
];

export const MISSION_VISION = [
  {
    tag: 'Mission',
    text: 'To deliver sustainable, acoustically comfortable interiors that improve the way people work and live.',
  },
  {
    tag: 'Vision',
    text: 'To make circular materials and responsible design the standard for modern interiors across India.',
  },
];

export const WHY_CHOOSE = [
  {
    index: '01',
    title: 'Designed for performance',
    body: 'Layouts and finishes planned for comfort, productivity, and acoustic balance.',
  },
  {
    index: '02',
    title: 'Material responsibility',
    body: 'Recycled-material solutions that support sustainability goals without sacrificing quality.',
  },
  {
    index: '03',
    title: 'End-to-end delivery',
    body: 'From planning and visualization to execution and handover — one accountable team.',
  },
];

export const APPROACH_STEPS = [
  {
    index: '01',
    title: 'Consultation',
    body: 'We align on goals, scope, timelines, and budget — then map the best approach.',
  },
  {
    index: '02',
    title: 'Design & Visualization',
    body: 'Space planning, material selection, and 3D views so you can approve with confidence.',
  },
  {
    index: '03',
    title: 'Execution & Handover',
    body: 'On-site coordination, quality checks, and a clean handover with support.',
  },
];

/** Real client/brand references — displayed as text wordmarks (no fake logos). */
export const CLIENTS = ['ADT', 'Alphadyne', 'Enfinity', 'Sears', 'UKG'];