import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { router } from "expo-router";
import { radius, spacing, shadow } from "../../constants/theme";
import { countries, Country } from "../../data/countries";
import ContinentMap from "../../components/ContinentMap";
import { useThemeColors } from "../../context/ThemeContext";

export default function HomeMapScreen() {
  const { colors } = useThemeColors();
  const [selected, setSelected] = useState<Country>(countries[0]);

  const handlePressCountry = (c: Country) => setSelected(c);
  const handleOpenDetail = () => router.push(`/country/${selected.id}`);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.ink }}>
      <View
        style={{
          backgroundColor: colors.ink,
          paddingHorizontal: spacing.xl,
          paddingTop: spacing.md,
          paddingBottom: spacing.lg,
        }}
      >
        <Text style={{ color: "#C9BFA3", fontSize: 10.5, marginBottom: 4 }}>
          SELAMAT DATANG KEMBALI
        </Text>
        <Text
          style={{
            color: colors.parchment,
            fontSize: 21,
            fontWeight: "600",
            marginBottom: spacing.md,
          }}
        >
          Jelajahi dunia
        </Text>
        <Pressable
          style={{
            backgroundColor: "rgba(243,236,220,0.10)",
            borderWidth: 1,
            borderColor: "rgba(243,236,220,0.22)",
            borderRadius: radius.md,
            paddingVertical: spacing.sm + 1,
            paddingHorizontal: spacing.md,
          }}
          onPress={() => router.push("/(tabs)/search")}
        >
          <Text style={{ color: "#C9BFA3", fontSize: 12 }}>
            🔍 cari negara, benua, atau bahasa...
          </Text>
        </Pressable>
      </View>

      <View style={{ flex: 1 }}>
        <ContinentMap
          countries={countries}
          onPressCountry={handlePressCountry}
        />
      </View>

      <Pressable
        style={[
          styles.previewCard,
          shadow.card,
          { backgroundColor: colors.parchment },
        ]}
        onPress={handleOpenDetail}
      >
        <View
          style={{
            width: 34,
            height: 34,
            borderRadius: radius.sm,
            backgroundColor: colors.clay,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ color: colors.parchment, fontWeight: "700", fontSize: 12 }}
          >
            {selected.flagCode}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{ fontSize: 10, color: colors.tealDeep, marginBottom: 2 }}
          >
            {selected.region.toUpperCase()} — DIPELAJARI 0%
          </Text>
          <Text
            style={{ fontSize: 15.5, fontWeight: "600", color: colors.ink }}
          >
            {selected.name}
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  previewCard: {
    position: "absolute",
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.xl,
    borderRadius: radius.lg,
    padding: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
});
