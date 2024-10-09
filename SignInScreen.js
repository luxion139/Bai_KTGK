import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { AuthContext } from './AuthContext';

const SignInScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const { setPhoneNumber } = useContext(AuthContext);

  const handleSignIn = () => {
    const phoneRegex = /^[0-9]{10}$/; // Định dạng số điện thoại 10 chữ số

    if (phoneRegex.test(phone)) {
      setPhoneNumber(phone);
      navigation.navigate('Home');
    } else {
      setError('Số điện thoại không đúng định dạng');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đăng Nhập</Text>
      <Text style={styles.label}>Nhập số điện thoại:</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholder="Nhập số điện thoại"
        style={styles.input}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Đăng nhập" onPress={handleSignIn} color="#007BFF" />
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignInScreen;
