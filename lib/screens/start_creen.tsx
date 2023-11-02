import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function StartScreen() {
  const [fontSize, setFontSize] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setInterval(() => {
      setFontSize(prevFontSize => {
        if (prevFontSize >= 48) {
          clearInterval(timer);
          return prevFontSize;
        }
        return ++prevFontSize;
      });
    }, (2 * 1000) / 48);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('playScreen' as never)}>
        <Text style={{...styles.text, fontSize: fontSize}}>Let's Play</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  text: {
    color: 'yellow',
  },
});

export default StartScreen;
