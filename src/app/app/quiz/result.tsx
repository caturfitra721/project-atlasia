import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { spacing } from '../../constants/theme';
import { getCountryById } from '../../data/countries';
import PrimaryButton from '../../components/ui/PrimaryButton';
import OutlineButton from '../../components/ui/OutlineButton';
import { useThemeColors } from '../../context/ThemeContext';

export default function QuizResultScreen() {
  const { colors } = useThemeColors();
  const { countryId, score, total } = useLocalSearchParams<{
    countryId: string;
    score: string;
    total: string;
  }>();
  const country = getCountryById(countryId ?? '');
  const scoreNum = Number(score ?? 0);
  const totalNum = Number(total ?? 1);
  const isPerfect = totalNum > 0 && scoreNum === totalNum;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment, alignItems: 'center', paddingTop: 60 }}>
      <View
        style={{
          width: 108,
          height: 108,
          borderRadius: 54,
          borderWidth: 7,
          borderColor: isPerfect ? colors.gold : colors.teal,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: spacing.xl,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: '600', color: colors.ink }}>
          {scoreNum}/{totalNum}
        </Text>
      </View>

      <Text style={{ fontSize: 19, fontWeight: '600', color: colors.ink, marginBottom: spacing.sm }}>
        {isPerfect ? 'Sempurna! 🎉' : 'Kerja bagus, coba lagi!'}
      </Text>
      <Text
        style={{
          fontSize: 12.5,
          color: colors.inkSoft,
          textAlign: 'center',
          paddingHorizontal: spacing.xxl,
          marginBottom: spacing.md,
          lineHeight: 19,
        }}
      >
        Anda menjawab {scoreNum} dari {totalNum} pertanyaan tentang {country?.name ?? 'negara ini'} dengan benar.
      </Text>

      {!isPerfect && (
        <Text
          style={{
            fontSize: 11.5,
            color: colors.clayDeep,
            textAlign: 'center',
            paddingHorizontal: spacing.xxl,
            marginBottom: spacing.xxl,
            lineHeight: 17,
          }}
        >
          Sertifikat hanya diberikan kalau semua jawaban benar. Coba lagi sampai skor sempurna!
        </Text>
      )}
      {isPerfect && <View style={{ marginBottom: spacing.md }} />}

      <View style={{ width: '100%', paddingHorizontal: spacing.xl, gap: spacing.md }}>
        {isPerfect && (
          <PrimaryButton label="Lihat sertifikat" onPress={() => router.replace(`/certificate/${countryId}`)} />
        )}
        <OutlineButton
          label="Ulangi kuis"
          borderColor={isPerfect ? colors.line : colors.clay}
          textColor={isPerfect ? colors.ink : colors.clayDeep}
          onPress={() => router.replace(`/quiz/${countryId}`)}
        />
        <OutlineButton
          label="Kembali ke detail negara"
          borderColor={colors.line}
          textColor={colors.inkSoft}
          onPress={() => router.replace(`/country/${countryId}`)}
        />
      </View>
    </SafeAreaView>
  );
}
