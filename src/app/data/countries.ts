export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export type Country = {
  id: string;
  name: string;
  capital: string;
  region: string;
  population: string;
  language: string;
  currency: string;
  aboutCulture: string;
  tags: string[];
  flagCode: string;
  mapX: number;
  mapY: number;
  quiz: QuizQuestion[];
};

export const countries: Country[] = [
  {
    id: 'jp',
    name: 'Jepang',
    capital: 'Tokyo',
    region: 'Asia Timur',
    population: '125jt',
    language: '日本語',
    currency: '¥ JPY',
    aboutCulture:
      'Perpaduan tradisi kuno dan teknologi mutakhir, dari kuil bersejarah hingga kota metropolitan.',
    tags: ['sejarah', 'kuliner', 'bahasa'],
    flagCode: 'JP',
    mapX: 76,
    mapY: 34,
    quiz: [
      { id: 'q1', question: 'Apa ibu kota Jepang?', options: ['Osaka', 'Tokyo', 'Kyoto', 'Yokohama'], correctIndex: 1 },
      { id: 'q2', question: 'Apa mata uang Jepang?', options: ['Won', 'Yuan', 'Yen', 'Ringgit'], correctIndex: 2 },
      { id: 'q3', question: 'Gunung tertinggi di Jepang?', options: ['Gunung Aso', 'Gunung Fuji', 'Gunung Tate', 'Gunung Haku'], correctIndex: 1 },
      { id: 'q4', question: 'Bunga sakura mekar biasanya di musim apa?', options: ['Musim panas', 'Musim gugur', 'Musim semi', 'Musim dingin'], correctIndex: 2 },
      { id: 'q5', question: 'Kereta cepat khas Jepang disebut?', options: ['TGV', 'Shinkansen', 'Maglev', 'KTX'], correctIndex: 1 },
    ],
  },
  {
    id: 'fr',
    name: 'Prancis',
    capital: 'Paris',
    region: 'Eropa Barat',
    population: '68jt',
    language: 'Français',
    currency: '€ EUR',
    aboutCulture:
      'Pusat seni, mode, dan kuliner dunia, dengan sejarah panjang dari era Renaisans hingga modern.',
    tags: ['seni', 'kuliner', 'sejarah'],
    flagCode: 'FR',
    mapX: 46,
    mapY: 22,
    quiz: [
      { id: 'q1', question: 'Apa ibu kota Prancis?', options: ['Lyon', 'Marseille', 'Paris', 'Nice'], correctIndex: 2 },
      { id: 'q2', question: 'Menara ikonik di Paris bernama?', options: ['Menara Pisa', 'Menara Eiffel', 'Big Ben', 'Menara Petronas'], correctIndex: 1 },
      { id: 'q3', question: 'Museum paling terkenal di Prancis?', options: ['Louvre', 'Uffizi', 'Prado', 'Hermitage'], correctIndex: 0 },
      { id: 'q4', question: 'Apa mata uang yang dipakai Prancis?', options: ['Franc', 'Pound', 'Euro', 'Dolar'], correctIndex: 2 },
    ],
  },
  {
    id: 'eg',
    name: 'Mesir',
    capital: 'Kairo',
    region: 'Afrika Utara',
    population: '109jt',
    language: 'العربية',
    currency: 'E£ EGP',
    aboutCulture:
      'Rumah bagi peradaban kuno tertua di dunia, piramida, dan Sungai Nil yang legendaris.',
    tags: ['sejarah', 'arkeologi'],
    flagCode: 'EG',
    mapX: 50,
    mapY: 44,
    quiz: [
      { id: 'q1', question: 'Apa ibu kota Mesir?', options: ['Alexandria', 'Giza', 'Luxor', 'Kairo'], correctIndex: 3 },
      { id: 'q2', question: 'Sungai terkenal yang melintasi Mesir?', options: ['Sungai Amazon', 'Sungai Nil', 'Sungai Kongo', 'Sungai Niger'], correctIndex: 1 },
      { id: 'q3', question: 'Bangunan kuno paling ikonik di Mesir?', options: ['Colosseum', 'Piramida Giza', 'Machu Picchu', 'Angkor Wat'], correctIndex: 1 },
      { id: 'q4', question: 'Bahasa resmi Mesir adalah?', options: ['Arab', 'Ibrani', 'Turki', 'Persia'], correctIndex: 0 },
      { id: 'q5', question: 'Makhluk mitologi berbadan singa berkepala manusia di Mesir disebut?', options: ['Griffin', 'Sphinx', 'Phoenix', 'Chimera'], correctIndex: 1 },
    ],
  },
  {
    id: 'br',
    name: 'Brasil',
    capital: 'Brasília',
    region: 'Amerika Selatan',
    population: '216jt',
    language: 'Português',
    currency: 'R$ BRL',
    aboutCulture:
      'Negeri karnaval, hutan Amazon, dan sepak bola — budaya yang penuh warna dan energi.',
    tags: ['budaya', 'alam'],
    flagCode: 'BR',
    mapX: 28,
    mapY: 64,
    quiz: [
      { id: 'q1', question: 'Apa bahasa resmi Brasil?', options: ['Spanyol', 'Portugis', 'Inggris', 'Prancis'], correctIndex: 1 },
      { id: 'q2', question: 'Hutan hujan terbesar di dunia yang ada di Brasil?', options: ['Hutan Kongo', 'Hutan Amazon', 'Hutan Boreal', 'Hutan Taiga'], correctIndex: 1 },
      { id: 'q3', question: 'Festival tahunan paling terkenal di Brasil?', options: ['Oktoberfest', 'Carnaval', 'Diwali', 'Songkran'], correctIndex: 1 },
      { id: 'q4', question: 'Apa ibu kota Brasil?', options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'], correctIndex: 2 },
    ],
  },
];

export function getCountryById(id: string): Country | undefined {
  return countries.find((c) => c.id === id);
}
