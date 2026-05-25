export const colors = {
  bgPrimary: '#FAF7F2',
  bgSoft: '#F0EBE2',
  ink: '#2B2A28',
  inkMuted: '#6B6862',
  accent: '#8A9A7B',
  accentSoft: '#DDE3D4',
  line: '#E5DFD3',
} as const;

export const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128] as const;

export const event = {
  project: 'Double Alexander Project',
  names: 'Саша & Аля',
  date: '2026-07-04T14:00:00+03:00',
  dateLabel: '4 июля 2026',
  city: 'Истринский район',
  address: 'Истринский район, СНТ «Рассвет», участок 104',
  coords: { lat: 56.024305, lon: 36.894896 },
  mapZoom: 16,
} as const;

export const motion = {
  reveal: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
} as const;
