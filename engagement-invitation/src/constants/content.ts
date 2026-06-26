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
    name: '530 Banquet',
    floor: '2nd Floor',
    address:
      'Suncor Plaza, BRTS Bus Stand, Narol - Naroda Rd, opp. Jasoda Nagar, Jashoda Nagar, Ahmedabad, Gujarat 380026',
    mapsUrl: 'https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg5MhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyCggFEAAYsQMYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYjwIyBwgJEAAYjwLSAQgxNDgwajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTlcZwrhh145Mf-GSD1pchlV&daddr=2nd+Floor,+Suncor+Plaza,+BRTS+Bus+Stand,+Narol+-+Naroda+Rd,+opp.+Jasoda+Nagar,+Jashoda+Nagar,+Ahmedabad,+Gujarat+380026',
    coordinates: { lat: 23.0125, lng: 72.6412 },
  },
  dressCode: 'Traditional Indian / Festive Elegance',
} as const

export const CONTACT = {
  phone: '8320054936',
  whatsapp: '8320054936',
  email: 'parthgajjar@gmail.com',
} as const


export const LOVE_STORY = [
  {
    id: 'first-meeting',
    title: 'First Meeting',
    year: '2022',
    description:
      'Our paths crossed at a mutual friend\'s gathering — a smile, a conversation, and everything quietly changed.',
    icon: '✨',
  },
  {
    id: 'friendship',
    title: 'Friendship',
    year: '2023',
    description:
      'Late-night calls, shared playlists, and endless laughter — we became each other\'s favorite person to talk to.',
    icon: '🌸',
  },
  {
    id: 'falling-in-love',
    title: 'Falling in Love',
    year: '2024',
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
  images: [
    { id: '1', src: '/images/img1.jpeg', alt: 'Together', category: 'Couple', span: 'tall' },
    { id: '2', src: '/images/img2.jpeg', alt: 'Together', category: 'Couple', span: 'wide' },
    { id: '3', src: '/images/img3.jpeg', alt: 'Together', category: 'Couple', span: 'normal' },
    { id: '4', src: '/images/img4.jpeg', alt: 'Together', category: 'Couple', span: 'tall' },
    { id: '5', src: '/images/img5.jpeg', alt: 'Together', category: 'Couple', span: 'normal' },
    { id: '6', src: '/images/img7.jpeg', alt: 'Together', category: 'Couple', span: 'normal' },
    { id: '7', src: '/images/img8.jpeg', alt: 'Together', category: 'Couple', span: 'tall' },
    { id: '8', src: '/images/img9.jpeg', alt: 'Together', category: 'Couple', span: 'tall' },
    { id: '9', src: '/images/img10.jpeg', alt: 'Together', category: 'Couple', span: 'tall' },
    { id: '10', src: '/images/img11.jpeg', alt: 'Together', category: 'Couple', span: 'tall' },
    { id: '11', src: '/images/img12.jpeg', alt: 'Together', category: 'Couple', span: 'tall' },
    { id: '12', src: '/images/img13.jpeg', alt: 'Together', category: 'Couple', span: 'tall' },
    { id: '13', src: '/images/img14.jpeg', alt: 'Together', category: 'Couple', span: 'tall' },
    { id: '14', src: '/images/img15.jpeg', alt: 'Together', category: 'Couple', span: 'tall' },

  ],
} as const

export const FAMILY = {
  bride: {
    label: 'Bride\'s Side',
    members: [
      { role: 'Parents', names: ['Mr. Ghanshyam Bhai & Mrs. Pravina Ben'] },
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

export const SEO = {
  title: 'Parth & Priya | Engagement Invitation',
  description: 'You are cordially invited to celebrate the engagement of Parth & Priya on 19 July 2026 in Ahmedabad.',
  url: 'https://parth-priya-engagement.vercel.app',
  image: '/images/hero.jpeg',
} as const

export const HERO_IMAGE =
  '/images/hero.jpeg'


export const FOOTER = {
  message: "Can't wait to celebrate with you ❤️",
} as const
