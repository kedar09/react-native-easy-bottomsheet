import React, {useState} from 'react';
import {Text, Pressable, View, FlatList, TouchableOpacity} from 'react-native';
import BottomSheet from '@kedar09/react-native-bottomsheet';
import styles from './style.css';

const ListExample = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({title}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setModalVisible(false);
      }}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={styles.centeredView}>
      <BottomSheet
        bottomSheetTitle={'List'}
        // bottomSheetIconColor="red"
        bottomSheetStyle={{backgroundColor: 'white'}}
        // bottomSheetTitleStyle={{color: 'red'}}
        setBottomSheetVisible={setModalVisible}
        bottomSheetVisible={modalVisible}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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

export default ListExample;
