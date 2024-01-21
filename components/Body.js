import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Body = () => {
  const [inputText, setInputText] = useState('');


  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handlePress = () => {

    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
    
      style={styles.container}
    >
      <View style={{ width: 300 }}>
        <Text style={{ marginRight: 0, marginTop: 100 }}>Tên đăng nhập</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên đăng nhập hoặc email"
          value={inputText}
          onChangeText={handleInputChange}
        />

        <Text style={{ marginRight: 0 }}>Mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu"
          value={inputText}
          onChangeText={handleInputChange}
        />
        <Text style={{ alignSelf: 'flex-end' }}>Quên mật khẩu?</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#3841e9',
    padding: 10,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    width: 130,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Body;
