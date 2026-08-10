// Ecovation offerings — workspace types and acoustic solutions.
// Content is drawn from the public positioning of the studio; nothing invented.
import { IMAGES } from './projects';

const u = IMAGES;

export const WORKSPACE_TYPES = [
  {
    id: 'open-offices',
    index: '01',
    title: 'Open Offices',
    blurb:
      'Sweeping floors made still — open planning tempered by acoustic ceilings, pod walls and quiet pockets so the openness never costs concentration.',
    image: IMAGES.openOffice,
    notes: ['Acoustic ceilings', 'Quiet pockets', 'Daylight planning'],
  },
  {
    id: 'private-offices',
    index: '02',
    title: 'Private Offices',
    blurb:
      'Rooms that hold a thought — focus rooms and cabins wrapped in absorptive surfaces, tuned for calls, deep work and long concentration.',
    image: IMAGES.meetingRoom,
    notes: ['Focus rooms', 'Phone booths', 'Panelled walls'],
  },
  {
    id: 'meeting-rooms',
    index: '03',
    title: 'Meeting Rooms',
    blurb:
      'Where every word needs to land — boardrooms and huddle rooms engineered for speech clarity, from wall panels to carpet to ceiling clouds.',
    image: IMAGES.acousticPanels,
    notes: ['Speech clarity', 'Boardrooms', 'Huddle rooms'],
  },
  {
    id: 'collaboration-zones',
    index: '04',
    title: 'Collaboration Zones',
    blurb:
      'The workshop of an office — generous tables, whiteboard surfaces and acoustic screens that divide space without building walls.',
    image: IMAGES.collaboration,
    notes: ['Acoustic screens', 'Workshop tables', 'Mobility'],
  },
  {
    id: 'reception-areas',
    index: '05',
    title: 'Reception Areas',
    blurb:
      'The first ten seconds — a calm, panel-lined threshold that fulfils the brand the moment someone walks in.',
    image: IMAGES.reception,
    notes: ['Brand presence', 'Acoustic wall', 'Welcome lounge'],
  },
];

export const ACOUSTIC_SOLUTIONS = [
  {
    id: 'baffles',
    index: '01',
    title: 'Acoustic Baffles',
    blurb:
      'Suspended panels that hang above the work like quiet clouds — absorbing echo across large open floors without eating ceiling light.',
    image: IMAGES.baffles,
    notes: ['Open-plan echo', 'Trapeze mounting', 'PET & felt faces'],
  },
  {
    id: 'cloud-ceilings',
    index: '02',
    title: 'Cloud Ceilings',
    blurb:
      'Floating acoustic islands that absorb the booming reflections off hard ceilings — crisp speech in meeting and dining rooms.',
    image: IMAGES.clouds,
    notes: ['Speech clarity', 'Designer shapes', 'Easy retro-fit'],
  },
  {
    id: 'acoustic-screens',
    index: '03',
    title: 'Acoustic Screens',
    blurb:
      'Mobile and fixed screens that carve quiet out of open space — freestanding walls of softness wherever the sound needs to stop.',
    image: IMAGES.screens,
    notes: ['Space division', 'Mobile / fixed', 'Fabric + PET'],
  },
  {
    id: 'custom',
    index: '04',
    title: 'Custom Solutions',
    blurb:
      'When the space defines the problem, we define the product — bespoke panels, brand-cut shapes and engineered fixes for hard rooms.',
    image: IMAGES.customAcoustics,
    notes: ['Brand patterns', 'Bespoke shapes', 'Engineered fixes'],
  },
];

export const ACOUSTIC_BENEFITS = [
  {
    title: 'Reduce echo',
    body: 'Absorptive surfaces tame the muddle of hard rooms, so sound decays cleanly instead of bouncing.',
  },
  {
    title: 'Improve speech clarity',
    body: 'Less reverberation means voices arrive clear at their target — meetings become effortless to follow.',
  },
  {
    title: 'Add comfort',
    body: 'Quieter rooms are calmer rooms — lower stress, better focus, longer comfortable sessions.',
  },
  {
    title: 'Bring visual character',
    body: 'PET panels carry colour, pattern and brand language; the acoustic fix is the design statement.',
  },
];

export const PET_NOTE =
  'PET acoustic panels are made from recycled PET bottles, compressed into sound-absorbing boards that are light, rigid, fire-safe and endlessly printable — a sustainable material that literally quiets the room.';