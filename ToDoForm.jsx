import React from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from './your-styles-file'; // Update the path to your styles file

function ToDoForm() {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a new task..." />
      <Button title="Add" />
    </View>
  );
}

export default ToDoForm;
