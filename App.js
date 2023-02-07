import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const BinarySort = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [numElements, setNumElements] = useState(0);

  const handleNumElements = (text) => {
    setNumElements(text);
  };

  const handleAdd = () => {
    let newData = [];
    for (let i = 0; i < numElements; i++) {
      newData.push(Math.floor(Math.random() * 100));
    }
    setData(newData);
  };

  const handleSort = () => {
    let sortedData = [...data];
    for (let i = 1; i < sortedData.length; i++) {
      let key = sortedData[i];
      let j = i - 1;
      while (j >= 0 && sortedData[j] > key) {
        sortedData[j + 1] = sortedData[j];
        j = j - 1;
      }
      sortedData[j + 1] = key;
    }
    setData(sortedData);
  };

  const handleClear = () => {
    setData([]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={numElements}
          onChangeText={handleNumElements}
          placeholder="Enter number of elements"
          keyboardType="number-pad"
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="Generate" onPress={handleAdd} />
          <Button title="Sort" onPress={handleSort} />
          <Button title="Clear" onPress={handleClear} />
        </View>
      </View>
      <View style={styles.outputContainer}>
        {data.map((item, index) => (
          <Text key={index} style={styles.output}>
            {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  inputContainer: {
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "60%",
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 10,
  },
  outputContainer: {
    width: "100%",
    alignItems: "center",
  },
  output: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: "70%",
  },
});

export default BinarySort;
