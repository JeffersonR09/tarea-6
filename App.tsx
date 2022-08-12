import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calcularIMC = () => {
    const heigthMT = parseFloat(height) / 100;
    const WeightT = parseFloat(weight);

    const imc = WeightT / (heigthMT * heigthMT);
    if (imc < 18.5) {
      //Bajo Peso
      return setResult(
        `El IMC es ${imc}, usted está en la categoría de Bajo peso`
      );
    } else if (imc > 18.5 && imc < 24.9) {
      //Peso Normal
      return setResult(
        `El IMC es ${imc}, usted está en la categoría de Peso normal`
      );
    } else if (imc > 25.0 && imc < 29.9) {
      //Sobrepeso
      return setResult(
        `El IMC es ${imc}, usted está en la categoría de Sobrepeso`
      );
    } else if (imc > 30.0) {
      //Obecidad
      return setResult(
        `El IMC es ${imc}, usted está en la categoría de Obecidad`
      );
    }
  };

  return (
    <View style={styles.container}>
     <Text style={styles.tittle}>Calculadora de IMC</Text>
     <View style={styles.subContainer}>
       <Text style={styles.text}>Ingrese tu peso en Kilogramos</Text>
       <TextInput
         style={styles.input}
         value={weight}
         keyboardType="number-pad"
         onChangeText={(e) => setWeight(e)}
      />

      <Text style={styles.text}>
        Ingresa tu altura en Centimetros
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={height}
        onChangeText={(e) => setHeight(e)}
      />
    </View>
    <Button
      title="Calcular IMC"
      color={"#024a86"}
      onPress={() => calcularIMC()}
    />
    <TextInput
      style={styles.mostrarResult}
      value={result}
      editable={false}
      multiline={true}
    />
    <Button
      title="Limpiar valores"
      color={"#024a86"}
      onPress={() => {
        setWeight(" ");
        setHeight(" ");
        setResult(" ");
      }}
    />
    <Image
      style={styles.image}
      source={require("./image/peso4.jpg")}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    width: 420,
    height: "30%",
    backgroundColor: "#ff9900",
    borderRadius: 15,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  tittle: {
    color: "mediumblue",
    fontSize: 45,
    // fontFamily: "arial",
  },
  text: {
    color: "#024a86",
    fontSize: 20,
    // fontFamily: "arial",
  },
  input: {
    height: 40,
    width: "30%",
    backgroundColor: "#ffffe4e1",
    fontSize: 17,
    borderRadius: 15,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  mostrarResult: {
    height: 120,
    width: 420,
    backgroundColor: "#fff",
    color: "#024a86",
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  image: {
    width: 420,
    height: 310,
    margin: 40,
  },
});
