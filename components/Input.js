import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput } from 'react-native';

/* 텍스트 입력*/
const Input = ({ value, onChangeText, onSubmitEditing}) => {
  return (
    <TextInput 
      style={styles.input} 
      placeholder="+ Add a task" 
      maxLength={50}
      value = {value}
      onChangeText = {onChangeText}
      onSubmitEditing = {onSubmitEditing} />
  );
};

export default Input;

const styles = StyleSheet.create({
  /* 텍스트 입력 공간 설정 */
  input: {
    width: Dimensions.get('window').width - 15,
    fontSize: 20,
    backgroundColor: '#f1f3f5',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 8,
    alignItems: 'center',
  },
});