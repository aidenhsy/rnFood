import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text styles={styles.text}>Home</Text>
      <Button title="Info" onPress={() => navigation.navigate('Info')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default HomeScreen;
