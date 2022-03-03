import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#3E92CC',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderColor: '#D6D6D6',
    borderRadius: 3,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonSave: {
    justifyContent: 'center',
    borderRadius: 5,
    height: 44,
    elevation: 2,
    width: 120,
    backgroundColor: '#3E92CC',
  },
  buttonCancel: {
    marginRight: 20,
    justifyContent: 'center',
    borderRadius: 5,
    height: 44,
    elevation: 2,
    width: 120,
    backgroundColor: '#D6D6D6',
  },
  textStyleModalButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewOfButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
});

export default styles;
