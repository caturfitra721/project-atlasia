import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { colors, radius, spacing } from '../../constants/theme';
import { getCountryById } from '../../data/countries';
import ProgressBar from '../../components/ui/ProgressBar';
import PrimaryButton from '../../components/ui/PrimaryButton';

export default function QuizScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const country = getCountryById(id ?? '');
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  if (!country || country.quiz.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ padding: spacing.xl }}>Kuis belum tersedia untuk negara ini.</Text>
      </SafeAreaView>
    );
  }

  const question = country.quiz[index];
  const isLast = index === country.quiz.length - 1;

  const handleSelect = (optionIndex: number) => {
    if (selected !== null) return; // sudah dijawab, kunci pilihan
    setSelected(optionIndex);
    if (optionIndex === question.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      router.replace({
        pathname: '/quiz/result',
        params: {
          countryId: country.id,
          score: String(selected === question.correctIndex ? score : score),
          total: String(country.quiz.length),
        },
      });
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <ProgressBar progress={(index + 1) / country.quiz.length} />
        <Text style={styles.qLabel}>
          PERTANYAAN {index + 1} DARI {country.quiz.length}
        </Text>
        <Text style={styles.question}>{question.question}</Text>
      </View>

      <View style={styles.options}>
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correctIndex;
          const isSelected = i === selected;
          let style = styles.option;
          if (selected !== null && isCorrect) style = { ...styles.option, ...styles.optionCorrect };
          else if (selected !== null && isSelected && !isCorrect)
            style = { ...styles.option, ...styles.optionWrong };

          return (
            <Pressable key={i} style={style} onPress={() => handleSelect(i)}>
              <Text style={styles.optionText}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.bottom}>
        <PrimaryButton
          label={isLast ? 'Selesai' : 'Lanjut'}
          onPress={handleNext}
          color="ink"
          style={selected === null ? { opacity: 0.4 } : undefined}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.parchment },
  top: { paddingHorizontal: spacing.xl, paddingTop: spacing.xl },
  qLabel: { fontSize: 10, color: colors.goldDeep, marginTop: spacing.lg, marginBottom: spacing.sm },
  question: { fontSize: 18, fontWeight: '600', color: colors.ink, lineHeight: 26 },
  options: { paddingHorizontal: spacing.xl, paddingTop: spacing.lg, gap: spacing.md },
  option: {
    borderWidth: 1.5,
    borderColor: colors.line,
    borderRadius: radius.md,
    padding: spacing.md + 2,
    backgroundColor: colors.parchment,
  },
  optionCorrect: { borderColor: colors.teal, backgroundColor: 'rgba(63,110,103,0.10)' },
  optionWrong: { borderColor: colors.clay, backgroundColor: 'rgba(176,86,58,0.10)' },
  optionText: { fontSize: 13, color: colors.ink },
  bottom: { marginTop: 'auto', padding: spacing.xl },
});
