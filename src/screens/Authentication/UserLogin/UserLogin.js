import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const UserLogin = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#223e4b', fontSize: 20, marginBottom: 16}}>
        Login
      </Text>
      <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
        <TextInput
          placeholder="Enter your email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <View style={{paddingHorizontal: 32, marginBottom: 16, width: '100%'}}>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          autoCompleteType="password"
        />
      </View>
      <TouchableOpacity>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserLogin;
