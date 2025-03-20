import {
  Text,
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  ImageBackground,
  Button,
} from "react-native";
import { StaticTextField } from "../components/StaticTextFieldProps";
import { Pad } from "../components/Pad";
import { useState } from "react";

export default function HomeScreen() {
  const [currentCurrency, setCurrentCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");

  const onClickCharacter = (char: string) => {
    setCurrentCurrency((prev) => prev + char);
  };

  const onBackSpace = () => {
    setCurrentCurrency((prev) => prev.slice(0, -1));
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
          <StaticTextField value={currentCurrency} />
          <StaticTextField value={targetCurrency} />
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
