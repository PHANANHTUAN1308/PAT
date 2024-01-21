import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
     KeyboardAvoidingView, ImageBackground, Alert } from 'react-native';
import React, { useState } from 'react';
import img1 from '../../assets/images/bg.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
function Register({ navigation }) {

  const HandleRegisterCheck = async () => {
   
    const newUser = {
      username: username,
      password: password,
    };
    const existingAccount = await AsyncStorage.getItem("user");
    if (existingAccount) {
      const parsedAccount = JSON.parse(existingAccount);
      var flag = parsedAccount.find((account) => account.username == username);
      if (flag) {
        Alert.alert("Thông báo", "Tài khoản đã tồn tại");
        return;
      }
      parsedAccount.push(newUser);
      AsyncStorage.setItem("user", JSON.stringify(parsedAccount)).then(() => {
        AsyncStorage.getItem("user").then((res) => {
          Alert.alert("Thông báo", "Đăng kí thành công");
          navigation.navigate("Login");
        });
      });
    } else {
      AsyncStorage.setItem("user", JSON.stringify([newUser])).then(() => {
        AsyncStorage.getItem("user").then((res) => {
          Alert.alert("Thông báo", "Đăng kí thành công");
          navigation.navigate("Login");
        });
      });
    }
  };
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}
>
  <View>
  <ImageBackground source={img1} style={styles.background}>
        <Text style={styles.title}>ĐĂNG KÍ</Text>
        <View style={{marginTop:40}}>
          <View style={styles.iconinput}>
            <TextInput style={styles.input} placeholder=" Nhập tên đăng nhập hoặc email" onChangeText={(e)=>setUsername(e)}/>
          </View>
         
          <View style={styles.iconinput}>
            <TextInput style={styles.input} placeholder=" Nhập mật khẩu"  onChangeText={(e)=>setPassword(e)}/>
          </View>
          <View style={styles.iconinput}>
            <TextInput style={styles.input} placeholder=" Xác nhận mật khẩu" onChangeText={(e)=>setRePassword(e)}/>
          </View>
         
        </View>
        <TouchableOpacity style={styles.button} onPress={() => HandleRegisterCheck()}>
          <Text style={styles.buttonText}>Đăng kí</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={{ alignSelf: 'flex-end' }}>Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ textAlign: 'center', color: 'red' }}> Đăng nhập</Text>
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
    borderRadius:10,
    backgroundColor: 'white',
    
    paddingHorizontal: 10,
   
  },
  button: {
    backgroundColor: '#59caa7',
    padding: 10,
    marginTop: 30,
    borderRadius:10,
  },
  buttonText: {
    width: 180,
    borderRadius:10,
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

export default Register;
