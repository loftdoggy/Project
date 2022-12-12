import React from 'react';
import { StyleSheet, Text } from 'react-native';

/* 타이틀 텍스트 출력 */
const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  /* 타이틀 설정 */
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
    margin: 30,
  },
});