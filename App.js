import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'; // Thêm TouchableOpacity
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Bộ icon
import AppIntroSlider from 'react-native-app-intro-slider'; // Slider thư viện

// Lấy kích thước màn hình để đặt hình ảnh full màn hình
const { width, height } = Dimensions.get('window');

// Mảng dữ liệu cho các slide
const slides = [
  {
    key: '1',
    title: 'Welcome to the App',
    text: 'Discover all the amazing features!',
    image: require('./assets/slide1.png'), // Đường dẫn tới file ảnh
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Scan with Ease',
    text: 'Quickly scan and manage everything.',
    image: require('./assets/slide2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Let’s Get Started!',
    text: 'Experience the future today.',
    image: require('./assets/slide3.png'),
    backgroundColor: '#22bcb5',
  },
];

// Màn hình slider
function IntroSlider({ navigation }) {
  const [showMainApp, setShowMainApp] = useState(false);

  // Hàm render từng item slide
  const _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, backgroundColor: item.backgroundColor }}>
        <Image
          source={item.image}
          style={{ width: width, height: height * 0.7, resizeMode: 'cover' }} // Full màn hình
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>
          {item.title}
        </Text>
        <Text style={{ textAlign: 'center', marginHorizontal: 20 }}>{item.text}</Text>
      </View>
    );
  };

  // Khi hoàn thành slider
  const _onDone = () => {
    setShowMainApp(true);
  };

  if (showMainApp) {
    navigation.replace('MainApp');
    return null;
  } else {
    return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />;
  }
}

// Tạo các màn hình Home và Scan
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ScanScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Scan Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginTop: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: '#007bff',
          borderRadius: 5,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

// Tạo cấu trúc BottomTab và Stack Navigator
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tạo HomeStack cho phép sử dụng Stack Navigator với các màn hình Home và Scan
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  );
}

// Tạo cấu trúc BottomTab Navigation
function MainApp() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size }) => (
            <Icon name="qr-code-scanner" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Ứng dụng chính, bắt đầu với màn hình IntroSlider
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroSlider} options={{ headerShown: false }} />
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
