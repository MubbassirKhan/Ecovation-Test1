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
 * PROJECTS — featured workspace & acoustic projects.
 *
 * No detailed client facts are fabricated: each entry is a visual,
 * space-typology card (title, category, concise summary). Year and
 * area are intentionally "—" rather than invented. Titles match the
 * project categories the business actually delivers.
 */
export const PROJECTS = [
  {
    id: 'open-office',
    index: '01',
    slug: 'open-office',
    title: 'Open Office',
    category: 'Workspaces',
    location: 'Bangalore',
    year: '—',
    area: '—',
    disciplines: ['Open-plan design', 'Acoustic planning', 'Fit-out'],
    summary:
      'An open floor tuned for focus — daylight, calm materials and acoustic surfaces that keep the openness without the echo.',
    description:
      'A flexible open-plan environment planned around natural light, movement and acoustic comfort. Ceiling and wall surfaces carry PET acoustic panels, with quiet and collaboration zones shaping how the room is used across the day.',
    approach:
      'The plan follows how the team works — flow first, walls second. Acoustic panels do the architectural work: baffles above the desks and panels wherever the voice travels.',
    heroImage: u('photo-1497366216548-37526070297c', 2200),
    gallery: [
      u('photo-1497366754035-f200968a6e72', 1600),
      u('photo-1524758631624-e2822e304c36', 1600),
      u('photo-1519389950473-47ba0277781c', 1600),
    ],
  },
  {
    id: 'meeting-room',
    index: '02',
    slug: 'meeting-room',
    title: 'Meeting Room',
    category: 'Acoustics',
    location: 'Bangalore',
    year: '—',
    area: '—',
    disciplines: ['Meeting rooms', 'Acoustic panels', 'Ceiling clouds'],
    summary:
      'Rooms where every word lands — panel-wrapped walls and ceiling clouds tuned for speech clarity.',
    description:
      'Meeting rooms designed around one idea — that the room should disappear and leave the conversation. PET panels absorb early reflection, carpets kill footfall noise, and light is warm, even and glare-free.',
    approach:
      'Each room is tuned for how it is used: presentation and debate in the boardroom, clear calls in the huddle rooms. Absorption sits on the walls that talk back, so voices carry without shouting.',
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
    category: 'Workspaces',
    location: 'Bangalore',
    year: '—',
    area: '—',
    disciplines: ['Collaboration zones', 'Acoustic screens', 'Furniture'],
    summary:
      'A workshop-style zone with acoustic screens that divide space without building walls.',
    description:
      'A collaboration zone that borrows the relaxed logic of a café — people gather, pair off, and settle in. Movable acoustic screens shape smaller rooms inside the bigger one.',
    approach:
      'The brief is a place where ideas survive — surfaces to draw on, walls to write on, and quiet corners to think. Acoustic screens are the quiet walls, keeping energy in and sound out.',
    heroImage: u('photo-1522071820081-009f0129c71c', 2200),
    gallery: [
      u('photo-1521737604893-d14cc237f11d', 1600),
      u('photo-1556761175-5973dc0f32e7', 1600),
      u('photo-1497366754035-f200968a6e72', 1600),
    ],
  },
  {
    id: 'reception',
    index: '04',
    slug: 'reception',
    title: 'Reception',
    category: 'Workspaces',
    location: 'Bangalore',
    year: '—',
    area: '—',
    disciplines: ['Reception areas', 'Brand presence', 'Acoustic panels'],
    summary:
      'A calm, panel-lined arrival that carries the brand in the first ten seconds.',
    description:
      'A reception that carries the company identity in material rather than logo — a sculpted acoustic wall at the threshold, warm light on the desk, and a lounge that absorbs the noise of arrival.',
    approach:
      'First impressions are acoustic as much as visual. The wall behind reception is a PET acoustic surface — quiet where it must be — and everything else steps back to let it speak.',
    heroImage: u('photo-1497215728101-856f4ea42174', 2200),
    gallery: [
      u('photo-1560179707-f14e90ef3623', 1600),
      u('photo-1497366216548-37526070297c', 1600),
      u('photo-1529400971008-f566de0e6dfc', 1600),
    ],
  },
  {
    id: 'breakout-space',
    index: '05',
    slug: 'breakout-space',
    title: 'Breakout Space',
    category: 'Acoustics',
    location: 'Bangalore',
    year: '—',
    area: '—',
    disciplines: ['Breakout spaces', 'Soft seating', 'Acoustic panels'],
    summary:
      'Relaxed corners to pause — soft surfaces and acoustic panels that keep the break comfortable and the noise down.',
    description:
      'Breakout spaces designed as a genuine rest from the work floor. Soft seating, warm materials and PET acoustic panels absorb the chatter so the room stays calm.',
    approach:
      'A break should sound like a break. Panel-backed seating nooks and absorptive ceilings keep energy high and decibels low.',
    heroImage: u('photo-1560250097-0b93528c311a', 2200),
    gallery: [
      u('photo-1497366754035-f200968a6e72', 1600),
      u('photo-1524758631624-e2822e304c36', 1600),
      u('photo-1497215728101-856f4ea42174', 1600),
    ],
  },
  {
    id: 'workspace-interior',
    index: '06',
    slug: 'workspace-interior',
    title: 'Workspace Interior',
    category: 'Workspaces',
    location: 'Bangalore',
    year: '—',
    area: '—',
    disciplines: ['Interior design', 'Sustainable materials', 'Custom finishes'],
    summary:
      'Complete interior planning — sustainable materials, custom finishes and acoustic comfort designed as one system.',
    description:
      'A full workspace interior where the brief, the material and the room meet. Recycled PET surfaces, honest finishes and careful planning make the space feel settled from the first step in.',
    approach:
      'Good interiors begin with the room, not the look. Material selection, acoustic planning and custom finishes are drawn together so the space performs and endures.',
    heroImage: u('photo-1519389950473-47ba0277781c', 2200),
    gallery: [
      u('photo-1522071820081-009f0129c71c', 1600),
      u('photo-1542744173-8e7e53415bb0', 1600),
      u('photo-1517245386807-bb43f82c33c4', 1600),
    ],
  },
];