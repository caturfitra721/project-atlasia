import React from 'react';
import { Pressable, Text } from 'react-native';
import { router } from 'expo-router';
import { useThemeColors } from '../../context/ThemeContext';

type Props = {
  color?: string; // override warna kalau di atas background gelap seperti hero teal
  fallbackHref?: string; // kalau tidak ada history untuk di-back, pindah ke sini
};

export default function BackButton({ color, fallbackHref }: Props) {
  const { colors } = useThemeColors();
  const textColor = color ?? colors.ink;

  const handlePress = () => {
    if (router.canGoBack()) {
      router.back();
    } else if (fallbackHref) {
      router.replace(fallbackHref as any);
    } else {
      router.replace('/(tabs)');
    }
  };

  return (
    <Pressable onPress={handlePress} hitSlop={12} style={{ alignSelf: 'flex-start', marginBottom: 16 }}>
      <Text style={{ color: textColor, fontSize: 13, fontWeight: '600' }}>‹ Kembali</Text>
    </Pressable>
  );
}
