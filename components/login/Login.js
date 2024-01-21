import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
     KeyboardAvoidingView, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import img1 from '../../assets/images/bg.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const accounts = await AsyncStorage.getItem("user");
    if (accounts) {
      const accountArray = JSON.parse(accounts);
      var flag = accountArray.find(
        (account) =>
          account.username == username && account.password == password
      );
      if (flag) {
        Alert.alert("Thông báo", "Đăng nhập thành công!");

        navigation.navigate("Home");
      } else {
        Alert.alert("Thông báo", "Tài khoản hoặc mật khẩu không đúng!");
        return;
      }
    }
  };
  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}
>
  <View>
  <ImageBackground source={img1} style={styles.background}>
        <Text style={styles.title}>ĐĂNG NHẬP</Text>
        <View style={{marginTop:40}}>
          <View style={styles.iconinput}>
            <TextInput style={styles.input} placeholder=" Nhập tên đăng nhập hoặc email" onChangeText={(e) => setUsername(e)} />
          </View>
         
          <View style={styles.iconinput}>
            <TextInput style={styles.input} placeholder=" Nhập mật khẩu" onChangeText={(e)=> setPassword(e)} />
          </View>
          <Text style={{ alignSelf: 'flex-end' }}>Quên mật khẩu?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={{ alignSelf: 'flex-end' }}>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ textAlign: 'center', color: 'red' }}> Đăng kí</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
  </View>
</KeyboardAvoidingView>

  
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconinput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor:'black',
    borderBottomWidth:0.3,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 240,
    borderRadius: 10,
    backgroundColor: 'white',
    
    paddingHorizontal: 10,
   
  },
  button: {
    backgroundColor: '#59caa7',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    width: 180,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  background: {
    flex: 1,

    backgroundColor: 'white',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:420
  },
});

export default Login;
