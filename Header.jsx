import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7287b',
    height: 90,
    paddingTop: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});
