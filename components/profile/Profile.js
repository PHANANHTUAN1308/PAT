import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Header';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Header navigation={navigation} />
      </View>


      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}}
        />
        <Text style={styles.name}>Tuan</Text>
        <Text style={styles.bio}>Tuan</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
  },
  header: {
    marginTop: 10,
    
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150, 
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    marginTop: 5,
  },
  editButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  editText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },

});

export default Profile;
