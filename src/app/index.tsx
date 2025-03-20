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

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background-image.jpg")}
        style={styles.backgroundImage}
      >
        <Text>Value APP</Text>
        <StatusBar backgroundColor={"#F4F6FF"}></StatusBar>
        <View style={styles.currencyContainer}>
          <Text style={styles.title}>Escolha a moeda</Text>
          <StaticTextField value="teste" />
          <StaticTextField value="teste" />
          <Button title="Converter"></Button>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FF",
  },
  pageTitle: {
    textAlign: "center",
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
    display: "flex",
    borderRadius: 20,
    height: "65%",
    verticalAlign: "bottom",
  },
});
