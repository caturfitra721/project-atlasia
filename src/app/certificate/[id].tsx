import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { radius, spacing } from "../../constants/theme";
import { getCountryById } from "../../data/countries";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { useThemeColors } from "../../context/ThemeContext";

export default function CertificateScreen() {
  const { colors } = useThemeColors();
  const { id } = useLocalSearchParams<{ id: string }>();
  const country = getCountryById(id ?? "");
  const today = new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.parchment,
        padding: spacing.xl,
      }}
    >
      <View
        style={{
          flex: 1,
          borderWidth: 1.5,
          borderColor: colors.gold,
          borderRadius: radius.sm,
          alignItems: "center",
          paddingVertical: spacing.xxxl,
          paddingHorizontal: spacing.xl,
        }}
      >
        <Text
          style={{
            fontSize: 9.5,
            color: colors.goldDeep,
            marginBottom: spacing.md,
          }}
        >
          SERTIFIKAT PENYELESAIAN
        </Text>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: colors.gold,
            marginBottom: spacing.xl,
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            color: colors.ink,
            marginBottom: 4,
          }}
        >
          {country?.name ?? "-"}
        </Text>
        <Text
          style={{
            fontSize: 11.5,
            color: colors.inkSoft,
            marginBottom: spacing.xl,
          }}
        >
          modul sejarah & budaya
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontStyle: "italic",
            color: colors.ink,
            marginTop: "auto",
            marginBottom: spacing.lg,
          }}
        >
          Nama Pengguna
        </Text>
        <Text style={{ fontSize: 9.5, color: colors.inkSoft }}>
          {today.toUpperCase()}
        </Text>
      </View>

      <View style={{ paddingTop: spacing.lg }}>
        <PrimaryButton label="Bagikan sertifikat" color="ink" />
      </View>
    </SafeAreaView>
  );
}
