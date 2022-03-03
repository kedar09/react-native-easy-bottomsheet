#  react-native-easy-bottomsheet

## Get Started

### Installation
```js
npm install react-native-easy-bottomsheet
```

### Usage
```js
import React, { useState } from "react";
import { Text, Pressable, View, ScrollView } from "react-native";
import BottomSheet from "react-native-easy-bottomsheet";
import styles from "./style.css";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <BottomSheet
        bottomSheetTitle={"Notifications"}
        // bottomSheetIconColor="red"
        bottomSheetStyle={{
          backgroundColor: "white",
          maxHeight: "20%",
          minHeight: "15%",
        }}
        // bottomSheetTitleStyle={{color: 'red'}}
        setBottomSheetVisible={setModalVisible}
        bottomSheetVisible={modalVisible}
      >
        <ScrollView>
          <Text>Hi</Text>
          <Text>i'm, kedar09</Text>
        </ScrollView>
      </BottomSheet>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show BottomSheet</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#3E92CC",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
```


### Installation
<table>
  <tr>
    <td>
      <p align="center">
        <strong>Simple Example</strong>
      </p>
    </td>
    <td>
      <p align="center">
        <strong>List Example</strong>
      </p>
    </td>
    <td>
      <p align="center">
        <strong>Form Example</strong>
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <p align="center">
        <img src="https://github.com/kedar09/react-native-easy-bottomsheet/blob/main/screenshots/SimpleExample.png" width="220" height="420"/>
      </p>
    </td>
    <td>
      <p align="center">
        <img src="https://github.com/kedar09/react-native-easy-bottomsheet/blob/main/screenshots/ListExample.png" width="220" height="420"/>
      </p>
    </td>
    <td>
      <p align="center">
        <img src="https://github.com/kedar09/react-native-easy-bottomsheet/blob/main/screenshots/FormExample.png" width="220" height="420"/>
      </p>
     </td>
    </tr>
</table>

### Author
Feel free to ask me questions [here](https://github.com/kedar09/react-native-easy-bottomsheet/issues) - @kedar09!

