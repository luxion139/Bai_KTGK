import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { isValidPhoneNumber } from 'libphonenumber-js'; 

const SignInScreen = () => {
  const [countryCode, setCountryCode] = useState('VN'); 
  const [callingCode, setCallingCode] = useState('84'); 
  const [phoneNumber, setPhoneNumber] = useState(''); 

  // Hàm kiểm tra tính hợp lệ của số điện thoại
  const handleSignIn = () => {
    const fullPhoneNumber = `+${callingCode}${phoneNumber}`;
    if (isValidPhoneNumber(fullPhoneNumber)) {
      alert('Số điện thoại hợp lệ!');
    } else {
      alert('Số điện thoại không hợp lệ. Vui lòng kiểm tra lại!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Hình ảnh phía trên */}
      <Image
        source={require('./assets/6011.png')} 
        style={styles.image}
      />

      {/* Tiêu đề */}
      <Text style={styles.title}>Get your groceries with nectar</Text>

      {/* Trường nhập số điện thoại */}
      <View style={styles.phoneContainer}>
        {/* Picker mã quốc gia */}
        <CountryPicker
          countryCode={countryCode} 
          withCallingCode 
          withFlag 
          onSelect={(country) => {
            setCountryCode(country.cca2); 
            setCallingCode(country.callingCode[0]); 
          }}
        />
        {/* Hiển thị mã gọi quốc gia */}
        <Text style={styles.callingCode}>+{callingCode}</Text>
        {/* Ô nhập số điện thoại */}
        <TextInput
          style={styles.phoneInput}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Nút đăng nhập */}
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Nút đăng nhập bằng Google và Facebook */}
      <Text style={styles.socialText}>Or connect with social media</Text>

      <TouchableOpacity style={styles.socialButtonGoogle}>
        <FontAwesome name="google" size={24} color="white" />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonFacebook}>
        <FontAwesome name="facebook" size={24} color="white" />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    width: '80%',
  },
  callingCode: {
    marginLeft: 10,
    fontSize: 18,
  },
  phoneInput: {
    marginLeft: 10,
    fontSize: 18,
    flex: 1,
  },
  signInButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialText: {
    marginBottom: 10,
    color: '#555',
  },
  socialButtonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%',
    marginBottom: 10,
  },
  socialButtonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '80%',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SignInScreen;
