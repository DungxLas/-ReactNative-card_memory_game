import {StackActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

function StartScreen() {
  const navigation = useNavigation();
  const resetAction = StackActions.push('playScreen');

  const [fontSize, setFontSize] = useState(0);
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
      <Pressable
        style={styles.button}
        onPress={() => navigation.dispatch(resetAction)}>
        <Text style={{...styles.text, fontSize: fontSize}}>Let's Play</Text>
      </Pressable>
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
    //backgroundColor: '#DDDDDD',
    padding: 10,
  },
  text: {
    color: 'yellow',
  },
});

export default StartScreen;
