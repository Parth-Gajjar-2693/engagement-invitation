export const COUPLE = {
  groom: 'Parth',
  bride: 'Priya',
  initials: 'P & P',
  tagline: "Together with our families",
  headline: "We're Getting Engaged",
} as const

export const EVENT = {
  date: '19 July 2026',
  day: 'Sunday',
  time: '10:00 AM onwards',
  countdownTarget: '2026-07-19T10:00:00+05:30',
  venue: {
    name: 'Suncor Plaza',
    floor: '2nd Floor',
    address:
      'Suncor Plaza, BRTS Bus Stand, Narol - Naroda Rd, opp. Jasoda Nagar, Jashoda Nagar, Ahmedabad, Gujarat 380026',
    mapsUrl: 'https://maps.google.com/?q=Suncor+Plaza+Ahmedabad+Gujarat+380026',
    coordinates: { lat: 23.0125, lng: 72.6412 },
  },
  dressCode: 'Traditional Indian / Festive Elegance',
} as const

export const CONTACT = {
  phone: '+919876543210',
  whatsapp: '919876543210',
  email: 'parth.priya@example.com',
} as const

export const SOCIAL = {
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
} as const

export const LOVE_STORY = [
  {
    id: 'first-meeting',
    title: 'First Meeting',
    year: '2019',
    description:
      'Our paths crossed at a mutual friend\'s gathering — a smile, a conversation, and everything quietly changed.',
    icon: '✨',
  },
  {
    id: 'friendship',
    title: 'Friendship',
    year: '2020',
    description:
      'Late-night calls, shared playlists, and endless laughter — we became each other\'s favorite person to talk to.',
    icon: '🌸',
  },
  {
    id: 'falling-in-love',
    title: 'Falling in Love',
    year: '2022',
    description:
      'Somewhere between chai dates and long walks, friendship blossomed into something deeper and more beautiful.',
    icon: '💫',
  },
  {
    id: 'proposal',
    title: 'The Proposal',
    year: '2025',
    description:
      'Under a sky full of stars, with trembling hands and a heart full of love — the question was asked, and the answer was yes.',
    icon: '💍',
  },
  {
    id: 'engagement',
    title: 'Engagement',
    year: '2026',
    description:
      'Now we invite you to witness the beginning of forever as we celebrate our engagement with those we love most.',
    icon: '❤️',
  },
] as const

export const GALLERY = {
  categories: ['Couple', 'Casual', 'Traditional', 'Pre-Wedding'] as const,
  images: [
    { id: '1', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Couple portrait', category: 'Couple', span: 'tall' },
    { id: '2', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80', alt: 'Casual moment', category: 'Casual', span: 'wide' },
    { id: '3', src: 'https://images.unsplash.com/photo-1606800052052-a08af8348864?w=600&q=80', alt: 'Traditional attire', category: 'Traditional', span: 'normal' },
    { id: '4', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', alt: 'Pre-wedding shoot', category: 'Pre-Wedding', span: 'tall' },
    { id: '5', src: 'https://images.unsplash.com/photo-1529636798458-921d1dae0a71?w=600&q=80', alt: 'Together', category: 'Couple', span: 'normal' },
    { id: '6', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', alt: 'Celebration', category: 'Casual', span: 'wide' },
    { id: '7', src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80', alt: 'Traditional ceremony', category: 'Traditional', span: 'normal' },
    { id: '8', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', alt: 'Pre-wedding romance', category: 'Pre-Wedding', span: 'tall' },
  ],
} as const

export const FAMILY = {
  bride: {
    label: 'Bride\'s Side',
    members: [
      { role: 'Parents', names: ['Mr. Ganshyam Bhai & Mrs. Pravina Ben'] },
      { role: 'Brother', names: ['Mohit Sanchaniya'] },
      { role: 'Sister', names: ['Khushbu Sanchaniya'] },
    ],
  },
  groom: {
    label: 'Groom\'s Side',
    members: [
      { role: 'Parents', names: ['Mr. Vijay Talsaniya & Mrs. Mita Talsaniya'] },
    ],
  },
} as const

export const MEMORIES = [
  { id: '1', type: 'image' as const, src: 'https://images.unsplash.com/photo-1520854221256-174581259a5d?w=800&q=80', caption: 'Our first trip together' },
  { id: '2', type: 'image' as const, src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80', caption: 'Sunset memories' },
  { id: '3', type: 'image' as const, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', caption: 'The proposal day' },
  { id: '4', type: 'image' as const, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', caption: 'Pre-wedding magic' },
  { id: '5', type: 'image' as const, src: 'https://images.unsplash.com/photo-1606800052052-a08af8348864?w=800&q=80', caption: 'Traditional celebrations' },
] as const

export const SEO = {
  title: 'Parth & Priya | Engagement Invitation',
  description: 'You are cordially invited to celebrate the engagement of Parth & Priya on 19 July 2026 in Ahmedabad.',
  url: 'https://parth-priya-engagement.vercel.app',
  image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
} as const

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80'

export const MUSIC_URL = '/music/romantic-instrumental.mp3'

export const FOOTER = {
  message: "Can't wait to celebrate with you ❤️",
} as const
