import AsyncStorage from '@react-native-async-storage/async-storage';

// ===== TIPE DATA =====
export type CountryProgress = {
  countryId: string;
  answeredCount: number;
  totalQuestions: number;
  score: number;
  completed: boolean;
  lastUpdated: string; // ISO date
};

export type AppSettings = {
  darkMode: boolean;
  dailyNotification: boolean;
};

const PROGRESS_KEY_PREFIX = 'progress:';
const SETTINGS_KEY = 'settings';

// ===== PROGRES KUIS PER NEGARA =====

export async function getCountryProgress(countryId: string): Promise<CountryProgress | null> {
  try {
    const raw = await AsyncStorage.getItem(PROGRESS_KEY_PREFIX + countryId);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn('Gagal baca progres:', e);
    return null;
  }
}

export async function saveQuizResult(
  countryId: string,
  score: number,
  total: number
): Promise<void> {
  const data: CountryProgress = {
    countryId,
    answeredCount: total,
    totalQuestions: total,
    score,
    // Sertifikat cuma didapat kalau SEMUA jawaban benar (skor sempurna)
    completed: total > 0 && score === total,
    lastUpdated: new Date().toISOString(),
  };
  try {
    await AsyncStorage.setItem(PROGRESS_KEY_PREFIX + countryId, JSON.stringify(data));
  } catch (e) {
    console.warn('Gagal simpan progres:', e);
  }
}

// Ambil semua progres (dipakai di halaman Profil untuk hitung statistik)
export async function getAllProgress(): Promise<CountryProgress[]> {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const progressKeys = keys.filter((k) => k.startsWith(PROGRESS_KEY_PREFIX));
    const entries = await AsyncStorage.multiGet(progressKeys);
    return entries
      .map(([, value]) => (value ? (JSON.parse(value) as CountryProgress) : null))
      .filter((v): v is CountryProgress => v !== null);
  } catch (e) {
    console.warn('Gagal baca semua progres:', e);
    return [];
  }
}

// ===== PENGATURAN =====

const DEFAULT_SETTINGS: AppSettings = {
  darkMode: false,
  dailyNotification: true,
};

export async function getSettings(): Promise<AppSettings> {
  try {
    const raw = await AsyncStorage.getItem(SETTINGS_KEY);
    return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
  } catch (e) {
    console.warn('Gagal baca pengaturan:', e);
    return DEFAULT_SETTINGS;
  }
}

export async function saveSettings(settings: AppSettings): Promise<void> {
  try {
    await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.warn('Gagal simpan pengaturan:', e);
  }
}

// ===== STATUS PREMIUM (simulasi, belum terhubung ke payment gateway asli) =====

const PREMIUM_KEY = 'isPremium';

export async function getPremiumStatus(): Promise<boolean> {
  try {
    const raw = await AsyncStorage.getItem(PREMIUM_KEY);
    return raw === 'true';
  } catch (e) {
    return false;
  }
}

export async function setPremiumStatus(value: boolean): Promise<void> {
  try {
    await AsyncStorage.setItem(PREMIUM_KEY, value ? 'true' : 'false');
  } catch (e) {
    console.warn('Gagal simpan status premium:', e);
  }
}
