import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { images } from './images';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Title from './components/Title';
import React from 'react';
import IconButton from './components/IconButton';
import Input from './components/Input'
import Task from './components/Task';


export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({
    1: { id: '1', text: 'todo list 1', completed: false },
    2: { id: '2', text: 'todo list 2', completed: false },
    3: { id: '3', text: 'todo list 3', completed: false },
    4: { id: '4', text: 'todo list 4', completed: false },
    5: { id: '5', text: 'todo list 5', completed: false },
  });

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    setTasks({ ...tasks, ...newTaskObject });
  };

  const _handleTextChange = (text) => {
    setNewTask(text);
  };
  /* 체크 박스 기능 */
  const _toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    setTasks(currentTasks);
  };
  /* 삭제 기능 */
  const _deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };
  /* 수정 기능 */
  const _updateTask = (item) => {
    const currentTasks = Object.assign({},tasks);
    currentTasks[item.id]=item;
    setTasks(currentTasks);
  }

  return (
    /* 전체 공간 */
    <View style = {styles.container}>
      {/* 여백 */}
      <View style = {styles.subView}></View>
      {/* 타이틀 공간 */}
      <View style={styles.subView}>
        {/* 타이틀 테두리 설정 */}
        <View style = {styles.Viewbox}>
          <Title title="Todo List✔️"></Title>
        </View>
      </View>
      {/* 텍스트 입력창 및 리스트 공간 */}
      <View style={styles.container}>
        {/* 스테이터스 바 설정 */}
        <StatusBar style="auto" />
          {/* 텍스트 입력 */}
          <Input
            value={newTask}
            onChangeText={_handleTextChange}
            onSubmitEditing={_addTask} />
            <ScrollView>
              {Object.values(tasks)
                .reverse()
                .map((item) => (
                <Task
                  key={item.id}
                  item={item}
                  deleteTask={_deleteTask}
                  toggleTask={_toggleTask}
                  updateTask={_updateTask} />
                ))}
            </ScrollView>
        </View>
      </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD9EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* 여백 및 타이틀 공간 설정 */
  subView : {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD9EC',
  },
  /* 타이틀 테두리 디자인 */
  Viewbox : {
    borderColor: "#FFB2F5",
    borderStyle: "solid",
    borderRadius: 30,
    borderWidth: 5,
  }
});
