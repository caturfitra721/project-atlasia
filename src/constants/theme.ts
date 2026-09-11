// Design tokens untuk Atlas Digital Interaktif
// Sesuai dengan mockup: nuansa atlas antik — parchment, ink navy, emas, teal

export const colors = {
  ink: '#1C2B39',
  inkSoft: '#2E4152',
  parchment: '#F3ECDC',
  parchmentDeep: '#E7DCC2',
  gold: '#B0812F',
  goldDeep: '#7C5A1F',
  teal: '#3F6E67',
  tealDeep: '#294842',
  clay: '#B0563A',
  clayDeep: '#7C3B27',
  line: 'rgba(28,43,57,0.14)',
  white: '#FFFFFF',
};

// Catatan: Fraunces, Inter, JetBrains Mono perlu di-load lewat expo-font.
// Kalau belum sempat load font kustom, fallback ke font sistem tetap jalan.
export const fonts = {
  serif: 'Fraunces_500Medium',       // judul & nama negara
  serifItalic: 'Fraunces_500Medium_Italic', // tanda tangan sertifikat
  sans: 'Inter_400Regular',           // body text
  sansMedium: 'Inter_600SemiBold',
  mono: 'JetBrainsMono_400Regular',   // label kecil, kode
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const radius = {
  sm: 8,
  md: 10,
  lg: 12,
  xl: 20,
  pill: 999,
};

export const shadow = {
  card: {
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 14,
    elevation: 4,
  },
};
