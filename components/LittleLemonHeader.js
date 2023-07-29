import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.1, backgroundColor: '#F4CE14',justifyContent:'center',alignItems:'center' }}>
      <Text style={{fontSize:24,fontWeight:'bold'}}>Little lemon</Text>
    </View>
  );
}