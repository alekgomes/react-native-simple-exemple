import React from 'react';
import { Button, Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button title="start" />
      <Text>Hello, world!</Text>
    </View>
  );
};
export default HelloWorldApp;
