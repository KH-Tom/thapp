import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Header} from './Header';
import {ToDoForm} from './ToDoForm';
import {ToDoItem} from './ToDoItem';

export default function App() {
  const [tasks, setTasks] = React.useState(['task 1', 'task 2', 'task 3']);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ToDoForm addTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({item, index}) => (
          <ToDoItem item={item} index={index} deleteTask={deleteTask} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
