import React, {useState} from 'react';
import {Text, Pressable, View, ScrollView, TextInput} from 'react-native';
import BottomSheet from '@kedar09/react-native-bottomsheet';
import styles from './style.css';

const FormExample = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [values, setValues] = useState({name: '', address: ''});

  const handleChange = name => text => {
    setValues({...values, [name]: text});
  };

  return (
    <View style={styles.centeredView}>
      <BottomSheet
        bottomSheetTitle={'Edit'}
        // bottomSheetIconColor="red"
        bottomSheetStyle={{backgroundColor: 'white', maxHeight: '30%'}}
        // bottomSheetTitleStyle={{color: 'red'}}
        setBottomSheetVisible={setModalVisible}
        bottomSheetVisible={modalVisible}>
        <ScrollView>
          <View style={{marginBottom: 20}}>
            <TextInput
              style={styles.input}
              value={values.name}
              placeholder="Name"
              onChangeText={handleChange('name')}
            />
            <TextInput
              style={styles.input}
              value={values.address}
              placeholder="Address"
              onChangeText={handleChange('address')}
            />
            <View style={styles.viewOfButtons}>
              <Pressable
                style={styles.buttonCancel}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={styles.textStyleModalButton}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.buttonSave} onPress={() => {}}>
                <Text style={styles.textStyleModalButton}>Save</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </BottomSheet>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show BottomSheet</Text>
      </Pressable>
    </View>
  );
};

export default FormExample;
