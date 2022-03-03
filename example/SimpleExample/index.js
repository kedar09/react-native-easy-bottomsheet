import React, {useState} from 'react';
import {Text, Pressable, View, ScrollView} from 'react-native';
import BottomSheet from '@kedar09/react-native-bottomsheet';
import styles from './style.css';

const SimpleExample = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <BottomSheet
        bottomSheetTitle={'Notifications'}
        // bottomSheetIconColor="red"
        bottomSheetStyle={{
          backgroundColor: 'white',
          maxHeight: '20%',
          minHeight: '15%',
        }}
        // bottomSheetTitleStyle={{color: 'red'}}
        setBottomSheetVisible={setModalVisible}
        bottomSheetVisible={modalVisible}>
        <ScrollView>
          <Text>Hi</Text>
          <Text>i'm, kedar09</Text>
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

export default SimpleExample;
