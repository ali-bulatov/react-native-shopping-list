import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export const AddItem = ({addItem}) => {
    const [text,setText] = useState('');

    const onChange = textValue => setText(textValue);
    <TextInput ref={input => { this.textInput = input }} />


  return (
    <View>
      <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}/>
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20}/>
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#fa2',
    padding: 8,
    margin: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: "500",
    letterSpacing: 2,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AddItem;
