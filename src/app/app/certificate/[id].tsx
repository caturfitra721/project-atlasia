import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { router, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { radius, spacing } from '../../constants/theme';
import { getCountryById } from '../../data/countries';
import PrimaryButton from '../../components/ui/PrimaryButton';
import BackButton from '../../components/ui/BackButton';
import { useThemeColors } from '../../context/ThemeContext';
import { getCountryProgress, CountryProgress } from '../../utils/storage';

export default function CertificateScreen() {
  const { colors } = useThemeColors();
  const { id } = useLocalSearchParams<{ id: string }>();
  const country = getCountryById(id ?? '');
  const [progress, setProgress] = useState<CountryProgress | null>(null);
  const [loaded, setLoaded] = useState(false);
  const today = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });

  useFocusEffect(
    useCallback(() => {
      if (!country) return;
      getCountryProgress(country.id).then((p) => {
        setProgress(p);
        setLoaded(true);
      });
    }, [country?.id])
  );

  if (!country) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment, padding: spacing.xl }}>
        <Text style={{ color: colors.ink }}>Negara tidak ditemukan.</Text>
      </SafeAreaView>
    );
  }

  // Belum selesai loading data — jangan tampilkan apa-apa dulu supaya tidak "kedip"
  if (!loaded) {
    return <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment }} />;
  }

  // PENJAGAAN: sertifikat cuma boleh dilihat kalau progress.completed true (skor sempurna)
  if (!progress || !progress.completed) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment, padding: spacing.xl }}>
        <BackButton />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing.xl }}>
          <Text style={{ fontSize: 40, marginBottom: spacing.lg }}>🔒</Text>
          <Text style={{ fontSize: 17, fontWeight: '600', color: colors.ink, marginBottom: spacing.sm, textAlign: 'center' }}>
            Sertifikat belum terbuka
          </Text>
          <Text style={{ fontSize: 12.5, color: colors.inkSoft, textAlign: 'center', marginBottom: spacing.xl, lineHeight: 19 }}>
            Selesaikan kuis {country.name} dengan semua jawaban benar untuk membuka sertifikat ini.
          </Text>
          <PrimaryButton label="Kerjakan kuis" onPress={() => router.replace(`/quiz/${country.id}`)} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment, padding: spacing.xl }}>
      <BackButton />
      <View
        style={{
          flex: 1,
          borderWidth: 1.5,
          borderColor: colors.gold,
          borderRadius: radius.sm,
          alignItems: 'center',
          paddingVertical: spacing.xxxl,
          paddingHorizontal: spacing.xl,
        }}
      >
        <Text style={{ fontSize: 9.5, color: colors.goldDeep, marginBottom: spacing.md }}>
          SERTIFIKAT PENYELESAIAN
        </Text>
        <View style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: colors.gold, marginBottom: spacing.xl }} />
        <Text style={{ fontSize: 17, fontWeight: '600', color: colors.ink, marginBottom: 4 }}>
          {country.name}
        </Text>
        <Text style={{ fontSize: 11.5, color: colors.inkSoft, marginBottom: spacing.xl }}>
          modul sejarah & budaya — skor sempurna {progress.score}/{progress.totalQuestions}
        </Text>
        <Text style={{ fontSize: 20, fontStyle: 'italic', color: colors.ink, marginTop: 'auto', marginBottom: spacing.lg }}>
          Nama Pengguna
        </Text>
        <Text style={{ fontSize: 9.5, color: colors.inkSoft }}>{today.toUpperCase()}</Text>
      </View>

      <View style={{ paddingTop: spacing.lg }}>
        <PrimaryButton label="Bagikan sertifikat" color="ink" />
      </View>
    </SafeAreaView>
  );
}
