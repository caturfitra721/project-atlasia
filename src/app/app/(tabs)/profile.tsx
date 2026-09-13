import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, Alert } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { spacing } from '../../constants/theme';
import StatCard from '../../components/ui/StatCard';
import { useThemeColors } from '../../context/ThemeContext';
import { getAllProgress, CountryProgress, getPremiumStatus } from '../../utils/storage';
import { getCountryById } from '../../data/countries';

type Badge = {
  id: string;
  name: string;
  description: string;
  unlocked: (ctx: { totalCountries: number; totalCertificates: number; isPremium: boolean }) => boolean;
};

const BADGES: Badge[] = [
  {
    id: 'first-country',
    name: 'Penjelajah Pemula',
    description: 'Pelajari negara pertamamu (jawab minimal 1 soal kuis).',
    unlocked: ({ totalCountries }) => totalCountries >= 1,
  },
  {
    id: 'three-countries',
    name: 'Kolektor Peta',
    description: 'Pelajari 3 negara berbeda.',
    unlocked: ({ totalCountries }) => totalCountries >= 3,
  },
  {
    id: 'first-cert',
    name: 'Skor Sempurna',
    description: 'Dapatkan 1 sertifikat dengan menjawab semua soal kuis dengan benar.',
    unlocked: ({ totalCertificates }) => totalCertificates >= 1,
  },
  {
    id: 'premium-member',
    name: 'Anggota Premium',
    description: 'Berlangganan modul premium.',
    unlocked: ({ isPremium }) => isPremium,
  },
];

export default function ProfileScreen() {
  const { colors } = useThemeColors();
  const [progressList, setProgressList] = useState<CountryProgress[]>([]);
  const [isPremium, setIsPremium] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getAllProgress().then((list) => {
        list.sort((a, b) => (a.lastUpdated < b.lastUpdated ? 1 : -1));
        setProgressList(list);
      });
      getPremiumStatus().then(setIsPremium);
    }, [])
  );

  const totalCountries = progressList.length;
  const totalCertificates = progressList.filter((p) => p.completed).length;
  const avgScore =
    totalCountries > 0
      ? Math.round(
          (progressList.reduce((sum, p) => sum + (p.totalQuestions ? p.score / p.totalQuestions : 0), 0) /
            totalCountries) *
            100
        )
      : 0;

  const badgeCtx = { totalCountries, totalCertificates, isPremium };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment }}>
      <ScrollView contentContainerStyle={{ padding: spacing.xl }}>
        <View style={styles.header}>
          <View style={[styles.avatar, { backgroundColor: colors.teal }]}>
            <Text style={{ color: colors.parchment, fontSize: 18, fontWeight: '600' }}>AR</Text>
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: '600', color: colors.ink }}>Nama Pengguna</Text>
            <Text style={{ fontSize: 10, color: colors.inkSoft, marginTop: 2 }}>
              {totalCountries} negara dipelajari{isPremium ? ' · Premium' : ''}
            </Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <StatCard value={String(totalCountries)} label="negara" />
          <StatCard value={`${avgScore}%`} label="skor rata2" />
          <StatCard value={String(totalCertificates)} label="sertifikat" />
        </View>

        <Text style={sectionTitleStyle(colors.ink)}>Lencana</Text>
        <View style={styles.badgesGrid}>
          {BADGES.map((badge) => {
            const unlocked = badge.unlocked(badgeCtx);
            return (
              <Pressable
                key={badge.id}
                style={styles.badgeItem}
                onPress={() =>
                  Alert.alert(
                    unlocked ? `✓ ${badge.name}` : `🔒 ${badge.name}`,
                    badge.description
                  )
                }
              >
                <View
                  style={[
                    styles.badge,
                    {
                      backgroundColor: colors.parchmentDeep,
                      borderColor: unlocked ? colors.gold : colors.line,
                    },
                    !unlocked && { opacity: 0.35 },
                  ]}
                />
                <Text
                  style={{
                    fontSize: 9.5,
                    color: colors.inkSoft,
                    textAlign: 'center',
                    marginTop: 6,
                    width: 60,
                  }}
                  numberOfLines={2}
                >
                  {badge.name}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={sectionTitleStyle(colors.ink)}>Negara terakhir</Text>
        {progressList.length === 0 ? (
          <Text style={{ fontSize: 12, color: colors.inkSoft }}>Belum ada negara yang dipelajari.</Text>
        ) : (
          progressList.map((p) => {
            const country = getCountryById(p.countryId);
            return (
              <View
                key={p.countryId}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 9,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.line,
                }}
              >
                <Text style={{ fontSize: 12, color: colors.ink }}>{country?.name ?? p.countryId}</Text>
                <Text style={{ fontSize: 12, color: colors.inkSoft }}>
                  {p.completed ? 'sertifikat ✓' : `${Math.round((p.score / p.totalQuestions) * 100)}%`}
                </Text>
              </View>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function sectionTitleStyle(color: string) {
  return { fontSize: 14, fontWeight: '600' as const, color, marginBottom: spacing.md };
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: spacing.xl },
  avatar: { width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' },
  statsRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.xl },
  badgesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md, marginBottom: spacing.xl },
  badgeItem: { alignItems: 'center' },
  badge: { width: 44, height: 44, borderRadius: 22, borderWidth: 1.5 },
});
