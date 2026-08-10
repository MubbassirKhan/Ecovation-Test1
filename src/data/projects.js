// Curated imagery — stable Unsplash CDN URLs (no local assets required).
// Imagery is workspace / office / acoustic-interior focused.
const u = (id, w = 2400) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: u('photo-1497366216548-37526070297c', 2400),
  studio: u('photo-1517245386807-bb43f82c33c4', 2000),
  studioSmall: u('photo-1522071820081-009f0129c71c', 1200),
  contact: u('photo-1560179707-f14e90ef3623', 2000),
  // Workspaces page / acoustic pages
  openOffice: u('photo-1497366754035-f200968a6e72', 2000),
  meetingRoom: u('photo-1542744173-8e7e53415bb0', 2000),
  collaboration: u('photo-1521737604893-d14cc237f11d', 2000),
  reception: u('photo-1497215728101-856f4ea42174', 2000),
  acousticPanels: u('photo-1618221195710-dd6b41faaea6', 2000),
  baffles: u('photo-1553877522-43269d4ea984', 2000),
  clouds: u('photo-1524758631624-e2822e304c36', 2000),
  screens: u('photo-1563986768609-322da13575f3', 2000),
  customAcoustics: u('photo-1615873968403-89e068629265', 2000),
};

/**
 * PROJECTS — workspace & commercial fit-outs.
 *
 * Facts about Ecovation's own delivered projects are not public yet, so
 * client-specific story fields carry an explicit [PROJECT ...] placeholder.
 * Imagery illustrates the space typology; edit title/slug/summary/meta as
 * real project data becomes available.
 */
export const PROJECTS = [
  {
    id: 'open-plan-workspace',
    index: '01',
    slug: 'open-plan-workspace',
    title: 'Open-Plan Workspace',
    category: 'Workspace Design',
    location: 'Bangalore',
    year: '—',
    area: '—',
    disciplines: ['Space planning', 'Acoustic panels', 'Fit-out'],
    summary:
      'An open floor tuned for focus — PET panels on walls and ceilings quiet the room while daylight keeps it alive.',
    description: '[PROJECT DESCRIPTION] A flexible open-plan environment planned around light, movement and acoustic comfort. Ceiling and wall surfaces carry PET acoustic panels; dedicated quiet and collaboration zones shape how the room is used across the day.',
    approach:
      'The plan was drawn from how the team actually works — flow first, walls second. Acoustic panels do the architectural work: baffles above the desks, panels on the glazing lines, and soft surfaces wherever the voice travels.',
    heroImage: u('photo-1497366216548-37526070297c', 2200),
    gallery: [
      u('photo-1497366754035-f200968a6e72', 1600),
      u('photo-1524758631624-e2822e304c36', 1600),
      u('photo-1519389950473-47ba0277781c', 1600),
    ],
  },
  {
    id: 'meeting-suite',
    index: '02',
    slug: 'meeting-suite',
    title: 'Meeting & Board Suite',
    category: 'Acoustic Interiors',
    location: 'Bangalore',
    year: '—',
    area: '—',
    disciplines: ['Meeting rooms', 'Acoustic panels', 'Joinery'],
    summary:
      'Rooms where every word lands — panel-wrapped boardrooms and huddle rooms tuned for speech clarity.',
    description:
      '[PROJECT DESCRIPTION] A suite of meeting rooms designed around one idea — that the room should disappear and leave the conversation. Patterned PET panels absorb early reflection, carpets kill footfall noise, and lighting is warm, even and glare-free.',
    approach:
      'Each room is tuned differently for how it is used: the boardroom for presentations and debate, the huddle rooms for calls. Absorption is placed on the walls that talk back, so voices carry without shouting.',
    heroImage: u('photo-1517245386807-bb43f82c33c4', 2200),
    gallery: [
      u('photo-1542744173-8e7e53415bb0', 1600),
      u('photo-1553877522-43269d4ea984', 1600),
      u('photo-1563986768609-322da13575f3', 1600),
    ],
  },
  {
    id: 'collaboration-zone',
    index: '03',
    slug: 'collaboration-zone',
    title: 'Collaboration Zone',
    category: 'Workspace Design',
    location: 'Bangalore',
    year: '—',
    area: '—',
    disciplines: ['Collaboration zones', 'Acoustic screens', 'Furniture'],
    summary:
      'A neighborhood of touchpoints — workshop tables, soft seating and acoustic screens that divide without walls.',
    description:
      '[PROJECT DESCRIPTION] A collaboration zone that borrows the relaxed logic of a café — people gather, pair off, and settle in. Movable acoustic screens shape smaller rooms inside the bigger one; power and light follow the furniture rather than the other way around.',
    approach:
      'The brief was for a place ideas survive — so we gave it surfaces to draw on, walls to write on, and quiet corners to think. Acoustic screens are the quiet walls, keeping energy in and sound out.',
    heroImage: u('photo-1522071820081-009f0129c71c', 2200),
    gallery: [
      u('photo-1521737604893-d14cc237f11d', 1600),
      u('photo-1556761175-5973dc0f32e7', 1600),
      u('photo-1497366754035-f200968a6e72', 1600),
    ],
  },
  {
    id: 'reception-welcome',
    index: '04',
    slug: 'reception-welcome',
    title: 'Reception & Welcome',
    category: 'Brand & Fit-out',
    location: 'Bangalore',
    year: '—',
    area: '—',
    disciplines: ['Reception areas', 'Brand presence', 'Acoustic panels'],
    summary:
      'The brand revealed in the first ten seconds — a calm, panel-lined arrival that greets before anyone speaks.',
    description:
      '[PROJECT DESCRIPTION] A reception that carries the company identity in material rather than logo — a sculpted acoustic wall at the threshold, warm light on the desk, and a lounge that absorbs the noise of arrival so the conversation can start softly.',
    approach:
      'First impressions are acoustic as much as visual. The wall behind reception is a PET acoustic surface — brand-patterned where it counts, quiet where it must be — and everything else steps back to let it speak.',
    heroImage: u('photo-1497215728101-856f4ea42174', 2200),
    gallery: [
      u('photo-1560179707-f14e90ef3623', 1600),
      u('photo-1497366216548-37526070297c', 1600),
      u('photo-1529400971008-f566de0e6dfc', 1600),
    ],
  },
];