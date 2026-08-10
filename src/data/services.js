// Ecovation offerings — workspace capabilities and acoustic solutions.
// Content is drawn from the real business positioning; nothing invented.
import { IMAGES } from './projects';

const u = IMAGES;

/* The two service lines shown on the Home "Our Services" section. */
export const HOME_SERVICES = [
  {
    id: 'workspaces',
    index: '01',
    title: 'Workspaces',
    blurb:
      'Workspace design and fit-outs that improve flow, comfort, and brand experience. Built for productivity, collaboration, and acoustic balance.',
    image: IMAGES.openOffice,
    to: '/workspaces',
  },
  {
    id: 'acoustic-panels',
    index: '02',
    title: 'Acoustic Panels',
    blurb:
      'PET acoustic panels and systems that reduce echo and improve speech clarity. Customizable forms and finishes for any interior style.',
    image: IMAGES.acousticPanels,
    to: '/acoustic-panels',
  },
];

/* The workspace solutions Ecovation delivers (/workspaces). */
export const WORKSPACE_FOCUS = [
  'Office interiors',
  'Meeting rooms',
  'Collaboration zones',
  'Reception areas',
  'Open office environments',
  'Breakout spaces',
  'Workspace fit-outs',
  'Acoustic planning',
  'Sustainable materials',
  'Custom finishes',
];

/* What a workspace is meant to achieve — not simply to look good. */
export const WORKSPACE_OUTCOMES = [
  'Improve productivity',
  'Improve comfort',
  'Support collaboration',
  'Improve acoustic balance',
  'Strengthen brand experience',
  'Support sustainability goals',
];

export const ACOUSTIC_SOLUTIONS = [
  {
    id: 'pet-panels',
    index: '01',
    title: 'PET Acoustic Panels',
    blurb:
      'The core of the system — recycled PET boards that absorb echo and sharpen speech, across a wide range of colours, shapes and finishes.',
    image: IMAGES.acousticPanels,
    notes: ['Recycled PET', 'Echo reduction', 'Colour & finish options'],
  },
  {
    id: 'baffles',
    index: '02',
    title: 'Acoustic Baffles',
    blurb:
      'Suspended panels that hang above the work like quiet clouds — absorbing echo across large open floors without eating ceiling light.',
    image: IMAGES.baffles,
    notes: ['Open-plan echo', 'Trapeze mounting', 'PET & felt faces'],
  },
  {
    id: 'cloud-ceilings',
    index: '03',
    title: 'Cloud Ceilings',
    blurb:
      'Floating acoustic islands that absorb the booming reflections off hard ceilings — crisp speech in meeting and dining rooms.',
    image: IMAGES.clouds,
    notes: ['Speech clarity', 'Designer shapes', 'Easy retro-fit'],
  },
  {
    id: 'acoustic-screens',
    index: '04',
    title: 'Acoustic Screens',
    blurb:
      'Mobile and fixed screens that carve quiet out of open space — freestanding walls of softness wherever the sound needs to stop.',
    image: IMAGES.screens,
    notes: ['Space division', 'Mobile / fixed', 'Fabric + PET'],
  },
  {
    id: 'custom',
    index: '05',
    title: 'Custom Shapes & Finishes',
    blurb:
      'When the space defines the problem, the panel answers — bespoke shapes, brand-cut patterns and custom finishes built to order.',
    image: IMAGES.customAcoustics,
    notes: ['Custom shapes', 'Custom finishes', 'Brand patterns'],
  },
];

export const ACOUSTIC_BENEFITS = [
  {
    title: 'Acoustic performance',
    body: 'Absorptive surfaces tame the echo of hard rooms, so sound decays cleanly instead of bouncing.',
  },
  {
    title: 'Clearer speech',
    body: 'Less reverberation means voices arrive sharp at their target — meetings become effortless to follow.',
  },
  {
    title: 'Sustainable material',
    body: 'Panels are pressed from recycled PET bottles — light, rigid and fire-safe, giving old plastic a quieter second life.',
  },
  {
    title: 'Modern aesthetics',
    body: 'PET carries colour, pattern and brand language; the acoustic fix becomes the design statement.',
  },
];

export const PET_NOTE =
  'PET acoustic panels are made from recycled PET bottles, compressed into sound-absorbing boards — light, rigid, fire-safe and endlessly customisable. They reduce echo and improve speech clarity while allowing designers to create visually distinctive interiors.';