import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { colors, radius, spacing } from '../../constants/theme';
import { getCountryById } from '../../data/countries';
import PrimaryButton from '../../components/ui/PrimaryButton';

export default function CertificateScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const country = getCountryById(id ?? '');
  const today = new Date().toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cert}>
        <Text style={styles.eyebrow}>SERTIFIKAT PENYELESAIAN</Text>
        <View style={styles.seal} />
        <Text style={styles.countryName}>{country?.name ?? '-'}</Text>
        <Text style={styles.sub}>modul sejarah & budaya</Text>
        <Text style={styles.name}>Nama Pengguna</Text>
        <Text style={styles.date}>{today.toUpperCase()}</Text>
      </View>

      <View style={styles.bottom}>
        <PrimaryButton label="Bagikan sertifikat" color="ink" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.parchment, padding: spacing.xl },
  cert: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: colors.gold,
    borderRadius: radius.sm,
    alignItems: 'center',
    paddingVertical: spacing.xxxl,
    paddingHorizontal: spacing.xl,
  },
  eyebrow: { fontSize: 9.5, color: colors.goldDeep, marginBottom: spacing.md },
  seal: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.gold,
    marginBottom: spacing.xl,
  },
  countryName: { fontSize: 17, fontWeight: '600', color: colors.ink, marginBottom: 4 },
  sub: { fontSize: 11.5, color: colors.inkSoft, marginBottom: spacing.xl },
  name: { fontSize: 20, fontStyle: 'italic', color: colors.ink, marginTop: 'auto', marginBottom: spacing.lg },
  date: { fontSize: 9.5, color: colors.inkSoft },
  bottom: { paddingTop: spacing.lg },
});
