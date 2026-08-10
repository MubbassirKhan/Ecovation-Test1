/**
 * siteData — single source of truth for brand, navigation and contact.
 * Contact details are the client's real details and must not be changed.
 */

export const SITE = {
  name: 'Ecovation',
  legalName: 'Ecovation Interiors',
  city: 'Bangalore',
  country: 'India',
  domain: 'https://ecovation-test.vercel.app',
  tagline: 'Sustainable Workspaces. Thoughtful Design. Better Acoustics.',
  description:
    'Ecovation designs and builds sustainable workspaces and acoustic interiors in Bangalore — offices, meeting rooms and collaboration zones with PET acoustic panels that quiet the room and carry the voice.',
};

export const CONTACT = {
  phoneDisplay: '+91 95138 77866',
  phoneHref: 'tel:+919513877866',
  email: 'info@ecovation.co.in',
  emailHref: 'mailto:info@ecovation.co.in',
  addressLine1: 'Nagasandra Tumkur Road',
  addressLine2: 'Bangalore 560073',
  address: 'Nagasandra Tumkur Road, Bangalore 560073',
  region: 'Karnataka, India',
};

export const NAVIGATION = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Workspaces', to: '/workspaces' },
  { label: 'Acoustic Panels', to: '/acoustic-panels' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export const MARQUEE_WORDS = [
  'Workspace Design',
  'PET Acoustic Panels',
  'Interior Fit-Outs',
  'Meeting Rooms',
  'Collaboration Zones',
  'Reception Areas',
];

export const LOGO = {
  /** Official logo mark — the client's own asset, never modified. */
  src: '/images/logo.png',
  alt: 'Ecovation — sustainable workspaces & acoustic solutions, Bangalore',
};