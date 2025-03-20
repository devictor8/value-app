import { StyleSheet, View } from "react-native";
import { PadButton } from "./PadButton";

interface PadProps {
  onClickCharacter: (char: string) => void;
  onBackSpace: () => void;
}

export function Pad(props: PadProps) {
  const { onBackSpace, onClickCharacter } = props;

  return (
    <View style={styles.container}>
      <View style={styles.padRow}>
        <PadButton value="7" onPress={() => onClickCharacter("7")} />
        <PadButton value="8" onPress={() => onClickCharacter("8")} />
        <PadButton value="9" onPress={() => onClickCharacter("9")} />
      </View>
      <View style={styles.padRow}>
        <PadButton value="4" onPress={() => onClickCharacter("4")} />
        <PadButton value="5" onPress={() => onClickCharacter("5")} />
        <PadButton value="6" onPress={() => onClickCharacter("6")} />
      </View>
      <View style={styles.padRow}>
        <PadButton value="1" onPress={() => onClickCharacter("1")} />
        <PadButton value="2" onPress={() => onClickCharacter("2")} />
        <PadButton value="3" onPress={() => onClickCharacter("3")} />
      </View>
      <View style={styles.padRow}>
        <PadButton value="0" onPress={() => onClickCharacter("0")} />
        <PadButton value="." onPress={() => onClickCharacter(".")} />
        <PadButton value="chau" onPress={() => onBackSpace()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  padRow: {
    display: "flex",
    flexDirection: "row",
  },
});
