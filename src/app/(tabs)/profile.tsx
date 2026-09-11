import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';
import StatCard from '../../components/ui/StatCard';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: spacing.xl }}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AR</Text>
          </View>
          <View>
            <Text style={styles.name}>Nama Pengguna</Text>
            <Text style={styles.subtitle}>0 negara dipelajari</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <StatCard value="0" label="negara" />
          <StatCard value="0%" label="skor rata2" />
          <StatCard value="0" label="sertifikat" />
        </View>

        <Text style={styles.sectionTitle}>Lencana</Text>
        <View style={styles.badgesRow}>
          {[1, 2, 3, 4].map((i) => (
            <View key={i} style={[styles.badge, i > 2 && styles.badgeDim]} />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Negara terakhir</Text>
        <Text style={styles.emptyHint}>Belum ada negara yang dipelajari.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.parchment },
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.xl },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: colors.parchment, fontSize: 18, fontWeight: '600' },
  name: { fontSize: 17, fontWeight: '600', color: colors.ink },
  subtitle: { fontSize: 10, color: colors.inkSoft, marginTop: 2 },
  statsRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.xl },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: colors.ink, marginBottom: spacing.md },
  badgesRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.xl },
  badge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.parchmentDeep,
    borderWidth: 1.5,
    borderColor: colors.gold,
  },
  badgeDim: { opacity: 0.3, borderColor: colors.line },
  emptyHint: { fontSize: 12, color: colors.inkSoft },
});
