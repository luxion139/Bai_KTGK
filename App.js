import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const DATA = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Nguyen Minh Hieu sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra lại kế hoạch hoàn thành công việc.',
    date: '20/08/2020, 06:00',
  },
];

const NotificationItem = ({ title, description, date, id }) => {
  // Determine the icon based on the id
  const iconName = ['2', '3', '4'].includes(id) ? 'person' : 'check-circle';

  return (
    <View style={styles.item}>
      <Icon name={iconName} size={24} color="#000" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.title}
            description={item.description}
            date={item.date}
            id={item.id} // Pass the id to NotificationItem
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row', // Align items in a row
    backgroundColor: '#CCFFCC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center', // Center items vertically
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },textContainer: {
    flex: 1, // Allow text to take remaining space
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
});

export default App;