import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Svg, { Path, Line } from 'react-native-svg';
import { radius } from '../constants/theme';
import { Country } from '../data/countries';
import { useThemeColors } from '../context/ThemeContext';

type Props = {
  countries: Country[];
  onPressCountry: (country: Country) => void;
};

export default function ContinentMap({ countries, onPressCountry }: Props) {
  const { colors } = useThemeColors();
  return (
    <View style={[styles.wrap, { backgroundColor: colors.parchmentDeep }]}>
      <Svg viewBox="0 0 240 300" style={StyleSheet.absoluteFill} preserveAspectRatio="xMidYMid slice">
        <Line x1="0" y1="60" x2="240" y2="60" stroke={colors.ink} strokeOpacity={0.06} />
        <Line x1="0" y1="120" x2="240" y2="120" stroke={colors.ink} strokeOpacity={0.06} />
        <Line x1="0" y1="180" x2="240" y2="180" stroke={colors.ink} strokeOpacity={0.06} />
        <Line x1="0" y1="240" x2="240" y2="240" stroke={colors.ink} strokeOpacity={0.06} />
        <Line x1="40" y1="0" x2="40" y2="300" stroke={colors.ink} strokeOpacity={0.06} />
        <Line x1="100" y1="0" x2="100" y2="300" stroke={colors.ink} strokeOpacity={0.06} />
        <Line x1="160" y1="0" x2="160" y2="300" stroke={colors.ink} strokeOpacity={0.06} />
        <Line x1="200" y1="0" x2="200" y2="300" stroke={colors.ink} strokeOpacity={0.06} />

        <Path fill={colors.parchment} fillOpacity={0.5} d="M18 55 Q10 70 20 90 Q14 110 26 122 Q22 140 34 150 Q30 165 20 172 L14 150 Q6 120 10 90 Q6 70 18 55Z" />
        <Path fill={colors.teal} fillOpacity={0.35} d="M48 150 Q40 170 46 195 Q40 220 52 245 Q58 260 68 250 Q64 225 70 205 Q66 180 60 160 Q56 148 48 150Z" />
        <Path fill={colors.parchment} fillOpacity={0.5} d="M116 40 Q108 55 118 62 Q112 74 122 80 Q118 90 128 92 L134 78 Q140 64 132 52 Q136 42 126 38 Q120 36 116 40Z" />
        <Path fill={colors.teal} fillOpacity={0.35} d="M112 92 Q100 115 110 145 Q104 175 116 205 Q122 220 132 210 Q126 180 132 155 Q126 120 130 98 Q126 88 112 92Z" />
        <Path fill={colors.parchment} fillOpacity={0.5} d="M138 45 Q150 40 175 48 Q205 42 222 62 Q212 82 190 78 Q170 92 148 82 Q132 68 138 45Z" />
        <Path fill={colors.teal} fillOpacity={0.35} d="M190 200 Q182 215 190 230 Q184 245 196 252 Q206 248 202 232 Q210 218 200 205 Q196 198 190 200Z" />
      </Svg>

      {countries.map((c) => (
        <Pressable
          key={c.id}
          onPress={() => onPressCountry(c)}
          style={[styles.pinWrap, { left: `${c.mapX}%`, top: `${c.mapY}%` }]}
        >
          <View style={[styles.pinDot, { backgroundColor: colors.teal, borderColor: colors.parchment }]} />
          <View style={[styles.pinTag, { backgroundColor: colors.ink }]}>
            <Text style={{ color: colors.parchment, fontSize: 9.5 }}>{c.name}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, overflow: 'hidden' },
  pinWrap: { position: 'absolute', transform: [{ translateX: -6 }, { translateY: -28 }], alignItems: 'center' },
  pinDot: { width: 14, height: 14, borderRadius: 7, borderWidth: 2 },
  pinTag: { marginTop: 4, borderRadius: radius.sm - 4, paddingVertical: 3, paddingHorizontal: 7 },
});
