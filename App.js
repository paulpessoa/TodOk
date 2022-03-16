import Task from './components/Task';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go!*/}
          <Task text={'task 1'}/>
          <Task text={'task 2'}/>
          <Task text={'task 3'}/>
          <Task text={'task 4'}/>
          <Task text={'task 5'}/>
          <Task/>
         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{},
});
