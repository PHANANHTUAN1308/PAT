import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native'; // Import useRoute from @react-navigation/native

export default function Footer({ navigation }) {
  const route = useRoute();

  const renderIcon = (tabName, iconName) => {
    const iconColor = isActiveTab(tabName) ? '#007bff' : '#666';

    return (
      <TouchableOpacity onPress={() => handleTabPress(tabName)} style={styles.tab}>
        <Icon name={iconName} size={24} color={iconColor} style={styles.icon} />
        <Text style={[styles.label, { color: iconColor }]}>{tabName}</Text>
      </TouchableOpacity>
    );
  };

  const isActiveTab = (tabName) => {
    return route.name === tabName;
  };

  const handleTabPress = (tabName) => {
    navigation.navigate(tabName)
  };

  return (
    <View style={styles.container}>
      {renderIcon('Home', 'home-filled')}
      {renderIcon('Cart', 'shopping-cart')}
      {renderIcon('Category', 'stacked-bar-chart')}
      {renderIcon('Profile', 'person')}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tab: {
    alignItems: 'center',
  },
  icon: {
    marginBottom: 5,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
