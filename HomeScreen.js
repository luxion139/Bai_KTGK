import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from './AuthContext.js';

const HomeScreen = () => {
  const { phoneNumber } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Chào mừng bạn đã đăng nhập!</Text>
      <Text style={styles.phoneText}>Số điện thoại của bạn: {phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background color
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Darker text color
  },
  phoneText: {
    fontSize: 18,
    color: '#555', // Slightly lighter text color
  },
});

export default HomeScreen;
