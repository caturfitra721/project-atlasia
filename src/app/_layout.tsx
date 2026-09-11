import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="country/[id]" />
      <Stack.Screen name="quiz/[id]" />
      <Stack.Screen name="quiz/result" />
      <Stack.Screen name="certificate/[id]" />
      <Stack.Screen name="premium" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
