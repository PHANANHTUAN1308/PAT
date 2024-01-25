import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Footer({ navigation }) {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    navigation.navigate(tab);
  };

  const renderIcon = (tabName, iconName) => {
    const isActive = activeTab === tabName;
    const iconColor = isActive ? 'blue' : 'black';

    return (
      <TouchableOpacity onPress={() => handleTabPress(tabName)} style={styles.tab}>
        <Icon name={iconName} size={24} color={iconColor} style={styles.icon} />
        <Text style={[styles.label, { color: iconColor }]}>{tabName}</Text>
      </TouchableOpacity>
    );
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
    marginBottom: 5,  // Adjust icon position
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
