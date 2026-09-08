import { Text, View, StyleSheet } from "react-native";
import Varscreen from "./looping/sloop";

export default function Index() {
  return (
    <View style={styles.container}>
      <Varscreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
