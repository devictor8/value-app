import { Text, TextProps } from "react-native";

interface StaticTextFieldProps extends TextProps {
  value: string;
}

export function StaticTextField(props: StaticTextFieldProps) {
  return (
    <Text
      style={{
        backgroundColor: "#EEF2FF",
        height: 60,
        width: "50%",
        fontSize: 24,
        fontWeight: 600,
        textAlign: "right",
        textAlignVertical: "center",
        paddingRight: 10,
        borderRadius: 8,
      }}
    >
      {props.value}
    </Text>
  );
}
