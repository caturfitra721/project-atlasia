import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { radius, spacing } from '../constants/theme';
import PrimaryButton from '../components/ui/PrimaryButton';
import BackButton from '../components/ui/BackButton';
import { useThemeColors } from '../context/ThemeContext';
import { setPremiumStatus } from '../utils/storage';

const PERKS = [
  { title: 'Modul sejarah & demografi', desc: 'Data mendalam untuk 190+ negara' },
  { title: 'Sertifikat digital', desc: 'Setelah menyelesaikan tiap kuis negara' },
  { title: 'Mode offline', desc: 'Belajar tanpa koneksi internet' },
];

type Status = 'idle' | 'processing' | 'success';

export default function PremiumScreen() {
  const { colors } = useThemeColors();
  const [status, setStatus] = useState<Status>('idle');

  // CATATAN: ini SIMULASI, belum terhubung ke payment gateway/Play Store asli.
  // Untuk pembayaran sungguhan nanti perlu react-native-iap + setup produk
  // di Google Play Console / App Store Connect (proses terpisah dari koding).
  const handleSubscribe = async () => {
    setStatus('processing');
    await new Promise((resolve) => setTimeout(resolve, 1200)); // simulasi delay proses bayar
    await setPremiumStatus(true);
    setStatus('success');
    setTimeout(() => {
      router.back();
    }, 1200);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment }}>
      <View style={{ backgroundColor: colors.ink, alignItems: 'center', paddingVertical: spacing.xxxl, paddingHorizontal: spacing.xl }}>
        <View style={{ alignSelf: 'flex-start', width: '100%' }}>
          <BackButton color={colors.parchment} />
        </View>
        <View style={{ backgroundColor: colors.gold, borderRadius: radius.pill, paddingVertical: 4, paddingHorizontal: 10, marginBottom: spacing.md }}>
          <Text style={{ fontSize: 10, color: colors.ink }}>PREMIUM</Text>
        </View>
        <Text style={{ fontSize: 22, fontWeight: '600', color: colors.parchment, marginBottom: 6 }}>
          Buka semua modul
        </Text>
        <Text style={{ fontSize: 12, color: '#C9BFA3' }}>Akses penuh ke seluruh negara & sertifikat</Text>
      </View>

      <View style={{ flex: 1, padding: spacing.xl }}>
        {PERKS.map((p) => (
          <View key={p.title} style={{ flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg }}>
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: colors.clay, marginTop: 5 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13, fontWeight: '600', color: colors.ink, marginBottom: 2 }}>{p.title}</Text>
              <Text style={{ fontSize: 11.5, color: colors.inkSoft }}>{p.desc}</Text>
            </View>
          </View>
        ))}

        <View style={{ alignItems: 'center', marginTop: spacing.xl }}>
          <Text style={{ fontSize: 24, fontWeight: '600', color: colors.ink }}>Rp29.000</Text>
          <Text style={{ fontSize: 11, color: colors.inkSoft }}>per bulan</Text>
        </View>
      </View>

      <View style={{ padding: spacing.xl }}>
        {status === 'idle' && (
          <PrimaryButton label="Mulai berlangganan" onPress={handleSubscribe} />
        )}
        {status === 'processing' && (
          <View style={{ paddingVertical: 14, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
            <ActivityIndicator color={colors.clay} />
            <Text style={{ color: colors.ink, fontSize: 13 }}>Memproses pembayaran...</Text>
          </View>
        )}
        {status === 'success' && (
          <View style={{ paddingVertical: 14, alignItems: 'center' }}>
            <Text style={{ color: colors.teal, fontSize: 14, fontWeight: '700' }}>✓ Berlangganan berhasil!</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
