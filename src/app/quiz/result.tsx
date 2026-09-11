import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { colors, spacing } from '../../constants/theme';
import { getCountryById } from '../../data/countries';
import PrimaryButton from '../../components/ui/PrimaryButton';
import OutlineButton from '../../components/ui/OutlineButton';

export default function QuizResultScreen() {
  const { countryId, score, total } = useLocalSearchParams<{
    countryId: string;
    score: string;
    total: string;
  }>();
  const country = getCountryById(countryId ?? '');
  const scoreNum = Number(score ?? 0);
  const totalNum = Number(total ?? 1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ring}>
        <Text style={styles.ringText}>
          {scoreNum}/{totalNum}
        </Text>
      </View>

      <Text style={styles.title}>Kerja bagus!</Text>
      <Text style={styles.subtitle}>
        Anda menjawab {scoreNum} dari {totalNum} pertanyaan tentang {country?.name ?? 'negara ini'}{' '}
        dengan benar.
      </Text>

      <View style={styles.actions}>
        <PrimaryButton
          label="Lihat sertifikat"
          onPress={() => router.replace(`/certificate/${countryId}`)}
        />
        <OutlineButton
          label="Ulangi kuis"
          borderColor={colors.line}
          textColor={colors.ink}
          onPress={() => router.replace(`/quiz/${countryId}`)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.parchment, alignItems: 'center', paddingTop: 60 },
  ring: {
    width: 108,
    height: 108,
    borderRadius: 54,
    borderWidth: 7,
    borderColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  ringText: { fontSize: 22, fontWeight: '600', color: colors.ink },
  title: { fontSize: 19, fontWeight: '600', color: colors.ink, marginBottom: spacing.sm },
  subtitle: {
    fontSize: 12.5,
    color: colors.inkSoft,
    textAlign: 'center',
    paddingHorizontal: spacing.xxl,
    marginBottom: spacing.xxl,
    lineHeight: 19,
  },
  actions: { width: '100%', paddingHorizontal: spacing.xl, gap: spacing.md },
});
