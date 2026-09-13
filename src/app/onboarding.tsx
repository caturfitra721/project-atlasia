import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { router } from "expo-router";
import { spacing } from "../constants/theme";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useThemeColors } from "../context/ThemeContext";

export default function OnboardingScreen() {
  const { colors } = useThemeColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.parchment }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.parchmentDeep,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 88,
            height: 88,
            borderRadius: 44,
            borderWidth: 2,
            borderColor: colors.gold,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              position: "absolute",
              width: 2,
              height: 34,
              backgroundColor: colors.clay,
              top: 8,
            }}
          />
          <View
            style={{
              position: "absolute",
              width: 34,
              height: 2,
              backgroundColor: colors.clay,
              left: 8,
            }}
          />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: spacing.xxl,
          paddingVertical: spacing.xxl,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 21,
            fontWeight: "600",
            color: colors.ink,
            textAlign: "center",
            marginBottom: spacing.sm,
          }}
        >
          Belajar sambil menjelajah
        </Text>
        <Text
          style={{
            fontSize: 12.5,
            color: colors.inkSoft,
            textAlign: "center",
            lineHeight: 19,
          }}
        >
          Kenali budaya, bahasa, dan sumber daya alam dari 190+ negara lewat
          peta interaktif.
        </Text>
      </View>

      <View
        style={{ paddingHorizontal: spacing.xxl, paddingBottom: spacing.xxl }}
      >
        <PrimaryButton
          label="Mulai jelajahi"
          color="ink"
          onPress={() => router.replace("/(tabs)")}
        />
      </View>
    </SafeAreaView>
  );
}
