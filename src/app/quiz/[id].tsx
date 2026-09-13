import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { radius, spacing } from "../../constants/theme";
import { getCountryById } from "../../data/countries";
import ProgressBar from "../../components/ui/ProgressBar";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { useThemeColors } from "../../context/ThemeContext";
import { saveQuizResult } from "../../utils/storage";

export default function QuizScreen() {
  const { colors } = useThemeColors();
  const { id } = useLocalSearchParams<{ id: string }>();
  const country = getCountryById(id ?? "");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  if (!country || country.quiz.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment }}>
        <Text style={{ padding: spacing.xl, color: colors.ink }}>
          Kuis belum tersedia untuk negara ini.
        </Text>
      </SafeAreaView>
    );
  }

  const question = country.quiz[index];
  const isLast = index === country.quiz.length - 1;

  const handleSelect = (optionIndex: number) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === question.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = async () => {
    if (isLast) {
      const finalScore = selected === question.correctIndex ? score : score;
      // Simpan hasil kuis ke penyimpanan lokal — inilah yang tadinya belum berfungsi
      await saveQuizResult(country.id, finalScore, country.quiz.length);

      router.replace({
        pathname: "/quiz/result",
        params: {
          countryId: country.id,
          score: String(finalScore),
          total: String(country.quiz.length),
        },
      });
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment }}>
      <View style={{ paddingHorizontal: spacing.xl, paddingTop: spacing.xl }}>
        <ProgressBar progress={(index + 1) / country.quiz.length} />
        <Text
          style={{
            fontSize: 10,
            color: colors.goldDeep,
            marginTop: spacing.lg,
            marginBottom: spacing.sm,
          }}
        >
          PERTANYAAN {index + 1} DARI {country.quiz.length}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: colors.ink,
            lineHeight: 26,
          }}
        >
          {question.question}
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: spacing.xl,
          paddingTop: spacing.lg,
          gap: spacing.md,
        }}
      >
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correctIndex;
          const isSelected = i === selected;
          let borderColor = colors.line;
          let bg = colors.parchment;
          if (selected !== null && isCorrect) {
            borderColor = colors.teal;
            bg = "rgba(63,110,103,0.10)";
          } else if (selected !== null && isSelected && !isCorrect) {
            borderColor = colors.clay;
            bg = "rgba(176,86,58,0.10)";
          }
          return (
            <Pressable
              key={i}
              onPress={() => handleSelect(i)}
              style={{
                borderWidth: 1.5,
                borderColor,
                backgroundColor: bg,
                borderRadius: radius.md,
                padding: spacing.md + 2,
              }}
            >
              <Text style={{ fontSize: 13, color: colors.ink }}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={{ marginTop: "auto", padding: spacing.xl }}>
        <PrimaryButton
          label={isLast ? "Selesai" : "Lanjut"}
          onPress={handleNext}
          color="ink"
          style={selected === null ? { opacity: 0.4 } : undefined}
        />
      </View>
    </SafeAreaView>
  );
}
