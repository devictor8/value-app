import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Button,
  Touchable,
  Image,
  Pressable,
} from "react-native";
import { StaticTextField } from "../components/StaticTextFieldProps";
import { Pad } from "../components/Pad";
import { useState } from "react";

export default function HomeScreen() {
  const [currentCurrency, setCurrentCurrency] = useState<currency>({
    countryCode: "br",
    input: "",
    value: 0,
  });
  const [targetCurrency, setTargetCurrency] = useState<currency>({
    countryCode: "us",
    input: "",
    value: 0,
  });

  const onClickCharacter = (char: string) => {
    setCurrentCurrency((prev) => ({ ...prev, input: prev.input + char }));
  };

  const onBackSpace = () => {
    setCurrentCurrency((prev) => ({ ...prev, input: prev.input.slice(0, -1) }));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#F4F6FF"}></StatusBar>
      <ImageBackground
        source={require("../../assets/background-image.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.pageTitle}>Value APP</Text>
        <View style={styles.currencyContainer}>
          <Text style={styles.title}>Escolha a moeda</Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Pressable>
              <Image
                source={{
                  uri: `https://flagcdn.com/120x90/${currentCurrency.countryCode.toLocaleLowerCase()}.png`,
                }}
                width={80}
                height={60}
              />
            </Pressable>
            <StaticTextField value={currentCurrency.input} />
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <Pressable>
              <Image
                source={{
                  uri: `https://flagcdn.com/120x90/${targetCurrency.countryCode.toLocaleLowerCase()}.png`,
                }}
                width={80}
                height={60}
              />
            </Pressable>
            <StaticTextField value={targetCurrency.input} />
          </View>
          <Button title="Converter"></Button>
        </View>
      </ImageBackground>
      <Pad onBackSpace={onBackSpace} onClickCharacter={onClickCharacter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FF",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  pageTitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
  },
  currencyContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 230,
    margin: 20,
    padding: 10,
    borderRadius: 8,
    gap: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
  },
  backgroundImage: {
    flex: 1,
    display: "flex",
    verticalAlign: "bottom",
  },
});
