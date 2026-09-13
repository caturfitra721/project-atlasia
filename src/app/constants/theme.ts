// Design tokens untuk Atlas Digital Interaktif
// Sesuai dengan mockup: nuansa atlas antik — parchment, ink navy, emas, teal

export type Palette = {
  ink: string;
  inkSoft: string;
  parchment: string;
  parchmentDeep: string;
  gold: string;
  goldDeep: string;
  teal: string;
  tealDeep: string;
  clay: string;
  clayDeep: string;
  line: string;
  white: string;
};

// Palet MODE TERANG (default, sama seperti mockup)
export const lightColors: Palette = {
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

// Palet MODE GELAP — background & text dibalik, aksen warna tetap senada
export const darkColors: Palette = {
  ink: '#F3ECDC',           // teks utama jadi terang
  inkSoft: '#C9BFA3',
  parchment: '#171F27',      // background utama jadi gelap
  parchmentDeep: '#222E39',
  gold: '#D9A857',
  goldDeep: '#F0C878',
  teal: '#5B958C',
  tealDeep: '#8FC2B8',
  clay: '#D97B57',
  clayDeep: '#F0A282',
  line: 'rgba(243,236,220,0.14)',
  white: '#0B0E12',
};

// Backward-compat: kode lama yang masih import { colors } langsung tetap jalan
// (pakai palet terang sebagai default). Layar yang sudah pakai useThemeColors()
// akan otomatis ikut mode gelap.
export const colors = lightColors;

export const fonts = {
  serif: 'Fraunces_500Medium',
  serifItalic: 'Fraunces_500Medium_Italic',
  sans: 'Inter_400Regular',
  sansMedium: 'Inter_600SemiBold',
  mono: 'JetBrainsMono_400Regular',
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
