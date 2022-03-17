import React,  {useState} from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import Task from "./components/Task";


export default function App() {
  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
    console.log(task);
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go!*/}
          {
            taskItems.map((item, index) => {
              return <Task key={index} text={item} />
            })
          }
          <Task text={"task 1"} />
          <Task text={"task 2"} />

        </View>
      </View>

      {/* This is where the tasks will go!*/}
      <KeyboardAvoidingView
        //  behavior={Plataform.OS === "ios" ? "padding" : "heigth"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"write a task"} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15, 
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor:'#c0c0c0',
    borderWidth: 1,
    width: 250,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#c0c0c0',
    borderWidth: 1,

  },
  addText: {

  },
});
