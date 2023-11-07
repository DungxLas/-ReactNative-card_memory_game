import {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';

const Timer = () => {
  const [countdown, setCountdown] = useState(5); // Đặt thời gian đếm ngược ban đầu
  const countdownRef = useRef(countdown);

  useEffect(() => {
    let currentCountdown = countdown;

    // Cài đặt hàm setInterval để giảm thời gian đếm ngược
    const intervalId = setInterval(() => {
      --countdownRef.current;

      // Kiểm tra nếu thời gian đếm ngược đã kết thúc
      if (countdownRef.current < 0) {
        clearInterval(intervalId);
      } else {
        setCountdown(countdownRef.current);
      }
    }, 1000);

    // Dọn dẹp khi unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <Text>Thoi gian con lai: {countdown}</Text>
    </View>
  );
};

export default Timer;
