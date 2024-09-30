import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Pressable,
} from "react-native";

const icon = require("./assets/icon.png");
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://picfiles.alphacoders.com/432/thumb-432394.jpg",
        }}
        style={{ width: 200, height: 300 }}
      />
      <Text>Hola Puticosas!</Text>
      <Button
        title="Pulsa Aqui"
        onPress={() => alert("Hola Perras")}
        color="green"
      ></Button>

      <TouchableHighlight
        underlayColor={"red"}
        onPress={() => alert("Hola Perras")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "blue",
          borderRadius: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Pulsa Aqui</Text>
      </TouchableHighlight>

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "red" : "green" },
        ]}
      >
        {({ pressed }) => <Text>{pressed ? "Presionado" : "Presiona"}</Text>}
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
