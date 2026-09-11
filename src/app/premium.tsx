import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors, radius, spacing } from '../constants/theme';
import PrimaryButton from '../components/ui/PrimaryButton';

const PERKS = [
  { title: 'Modul sejarah & demografi', desc: 'Data mendalam untuk 190+ negara' },
  { title: 'Sertifikat digital', desc: 'Setelah menyelesaikan tiap kuis negara' },
  { title: 'Mode offline', desc: 'Belajar tanpa koneksi internet' },
];

export default function PremiumScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>PREMIUM</Text>
        </View>
        <Text style={styles.title}>Buka semua modul</Text>
        <Text style={styles.subtitle}>Akses penuh ke seluruh negara & sertifikat</Text>
      </View>

      <View style={styles.body}>
        {PERKS.map((p) => (
          <View key={p.title} style={styles.perk}>
            <View style={styles.dot} />
            <View style={{ flex: 1 }}>
              <Text style={styles.perkTitle}>{p.title}</Text>
              <Text style={styles.perkDesc}>{p.desc}</Text>
            </View>
          </View>
        ))}

        <View style={styles.priceBox}>
          <Text style={styles.price}>Rp29.000</Text>
          <Text style={styles.perMonth}>per bulan</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <PrimaryButton label="Mulai berlangganan" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.parchment },
  top: { backgroundColor: colors.ink, alignItems: 'center', paddingVertical: spacing.xxxl },
  badge: {
    backgroundColor: colors.gold,
    borderRadius: radius.pill,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginBottom: spacing.md,
  },
  badgeText: { fontSize: 10, color: colors.ink },
  title: { fontSize: 22, fontWeight: '600', color: colors.parchment, marginBottom: 6 },
  subtitle: { fontSize: 12, color: '#C9BFA3' },
  body: { flex: 1, padding: spacing.xl },
  perk: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.clay, marginTop: 5 },
  perkTitle: { fontSize: 13, fontWeight: '600', color: colors.ink, marginBottom: 2 },
  perkDesc: { fontSize: 11.5, color: colors.inkSoft },
  priceBox: { alignItems: 'center', marginTop: spacing.xl },
  price: { fontSize: 24, fontWeight: '600', color: colors.ink },
  perMonth: { fontSize: 11, color: colors.inkSoft },
  bottom: { padding: spacing.xl },
});
