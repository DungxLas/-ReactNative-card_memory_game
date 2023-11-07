import {StackActions, useNavigation} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';

const Timer = () => {
  const navigation = useNavigation();
  const resetAction = StackActions.replace('startScreen');

  const [countdown, setCountdown] = useState(30); // Đặt thời gian đếm ngược ban đầu
  const countdownRef = useRef(countdown);

  useEffect(() => {
    // Cài đặt hàm setInterval để giảm thời gian đếm ngược
    const intervalId = setInterval(() => {
      --countdownRef.current;

      // Kiểm tra nếu thời gian đếm ngược đã kết thúc
      if (countdownRef.current < 0) {
        clearInterval(intervalId);
        Alert.alert(
          'Time Out!!!',
          'Sorry, your time is up. If you want to continue the challenge, click "Restart"',
          [
            {
              text: 'Ok',
              onPress: () => navigation.dispatch(resetAction),
            },
          ],
        );
      } else {
        setCountdown(countdownRef.current);
      }
    }, 1000);

    // Dọn dẹp khi unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.timerContainer}>
      <Text>Time Remaining: {countdown}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Timer;
