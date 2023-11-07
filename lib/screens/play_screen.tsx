import {useEffect, useState} from 'react';
import {Alert, Dimensions, FlatList, Image, View} from 'react-native';
import FlipCard from 'react-native-flip-card';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackActions, useNavigation} from '@react-navigation/native';

import {ImageItem, images} from '../providers/images';
import Timer from '../components/timer';

const data = images.sort(() => Math.random() - 0.5);

const size = Dimensions.get('window').width / 3;

const PlayScreen = () => {
  const navigation = useNavigation();
  const resetAction = StackActions.replace('startScreen');

  const [flippedCards, setFlippedCards] = useState<ImageItem[]>([]);
  const [matchedCards, setMatchedCards] = useState<ImageItem[]>([]);

  const [statusItem, setStatusItem] = useState<boolean[]>(
    Array(data.length).fill(true),
  );

  const flipCard = (index: number) => {
    setStatusItem(prevStatusItem => {
      const newStatusItem = [...prevStatusItem];
      newStatusItem[index] = !newStatusItem[index];
      return newStatusItem;
    });

    setFlippedCards(prevFlippedCards => [...prevFlippedCards, data[index]]);
  };

  useEffect(() => {
    console.log(flippedCards);
    if (flippedCards.length === 2) {
      if (flippedCards[0].source === flippedCards[1].source) {
        console.log(true);
        setMatchedCards([...matchedCards, flippedCards[0], flippedCards[1]]);
      } else {
        console.log(false);
        setTimeout(
          () =>
            setStatusItem(prevStatusItem => {
              // Tạo một bản sao của mảng trạng thái hiện tại
              const newStatusItem = [...prevStatusItem];
              // Cập nhật các phần tử cần thiết trong mảng mới
              newStatusItem[data.indexOf(flippedCards[0])] = true;
              newStatusItem[data.indexOf(flippedCards[1])] = true;
              // Trả về mảng mới để cập nhật trạng thái
              return newStatusItem;
            }),
          500,
        );
      }
      setFlippedCards([]);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedCards.length === data.length) {
      Alert.alert(
        'Congratulation!!!',
        'You have completed the challenge. If you want to play again, click "Restart"',
        [
          {
            text: 'Ok',
            onPress: () => navigation.dispatch(resetAction),
          },
        ],
      );
    }
  }, [matchedCards]);

  return (
    <View>
      <Timer />
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return matchedCards.includes(item) ? (
            <View style={{width: size, height: size}} />
          ) : (
            <TouchableOpacity onPress={() => flipCard(index)}>
              <FlipCard
                flip={statusItem[index]}
                clickable={false}
                //onFlipStart={() => onFlipStart(item)}
              >
                {/* Face Side */}
                <Image
                  source={item.source}
                  style={{width: size, height: size}}
                />
                {/* Back Side */}
                <Image
                  source={require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/question_mark.png')}
                  //source={require('/Users/phamhungdung/CoDe/ReactNative/-ReactNative-card_memory_game/lib/image/question_mark.png')}
                  style={{width: size, height: size}}
                />
              </FlipCard>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
      />
    </View>
  );
};
export default PlayScreen;
