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
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Open-plan design', 'Acoustic planning', 'Fit-out'],
    summary: 'Open office environments planned for productive, comfortable and acoustically balanced work.',
    description:
      'Open office environments are one of Ecovation\'s featured workspace typologies, supported by smart space planning and acoustic solutions.',
    approach:
      'Ecovation approaches open office areas through space planning, acoustic comfort and sustainable materials.',
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
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Meeting rooms', 'Acoustic panels', 'Ceiling clouds'],
    summary: 'Meeting rooms designed for clear speech, privacy and a premium client experience.',
    description:
      'Meeting rooms are a featured Ecovation workspace solution, with planning focused on clear speech, privacy and acoustic comfort.',
    approach:
      'The live offering describes meeting rooms as spaces for clear speech, privacy and a premium client experience.',
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
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Collaboration zones', 'Acoustic screens', 'Furniture'],
    summary: 'Collaborative spaces designed to foster teamwork while maintaining acoustic comfort.',
    description:
      'Collaboration zones are part of Ecovation\'s workspace solutions, balancing teamwork with acoustic comfort.',
    approach:
      'Ecovation uses smart space planning and acoustic solutions to support collaboration and well-being.',
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
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Reception areas', 'Brand presence', 'Acoustic panels'],
    summary: 'Reception and lobby environments designed to reflect brand identity from the first impression.',
    description:
      'Reception and lobby environments are designed around brand identity, spatial flow and acoustic comfort.',
    approach:
      'Ecovation identifies reception and lobby spaces as a core workspace application.',
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
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Breakout spaces', 'Soft seating', 'Acoustic panels'],
    summary: 'Breakout spaces designed for quick resets, creative ideas and comfortable acoustics.',
    description:
      'Breakout spaces are a featured workspace solution for relaxed resets and creative ideas.',
    approach:
      'The offering combines space planning with acoustic solutions to support comfort and collaboration.',
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
    location: 'Ecovation portfolio',
    year: '—',
    area: '—',
    disciplines: ['Interior design', 'Sustainable materials', 'Custom finishes'],
    summary: 'Modern workspace design and fit-outs that improve productivity, comfort and brand experience.',
    description:
      'Ecovation provides sustainable workplace design and fit-outs with smart space planning, ergonomic layouts and acoustic comfort.',
    approach:
      'The live workspace service covers discovery, space planning, design development, 3D visualisation, execution and handover.',
    heroImage: u('photo-1519389950473-47ba0277781c', 2200),
    gallery: [
      u('photo-1522071820081-009f0129c71c', 1600),
      u('photo-1542744173-8e7e53415bb0', 1600),
      u('photo-1517245386807-bb43f82c33c4', 1600),
    ],
  },
];