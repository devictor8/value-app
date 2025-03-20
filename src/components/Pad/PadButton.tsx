import { useState } from "react";
import { Pressable, PressableProps, Text, StyleSheet } from "react-native";

interface PadButtonProps extends PressableProps {
  value: string;
}

export function PadButton(props: PadButtonProps) {
  const { value } = props;
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      {...props}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Text style={[styles.button, isPressed && styles.pressedButton]}>
        {value}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 130,
    fontSize: 30,
    textAlignVertical: "center",
    textAlign: "center",
  },
  pressedButton: {
    transform: [{ scale: 1.1 }],
    boxShadow: "0px 4px 8px #DCEAFD",
    backgroundColor: "#fff",
  },
});
