import {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, ImageSourcePropType} from 'react-native';
import FlipCard from 'react-native-flip-card';
import {ImageItem, images} from '../providers/images';

const data = images.sort(() => Math.random() - 0.5);

const size = Dimensions.get('window').width / 3;

const PlayScreen = () => {
  const [flippedCards, setFlippedCards] = useState<ImageItem[]>([]);

  const onFlipStart = (item: ImageItem) => {
    console.log(item);
    // Kiểm tra xem item đã được thêm vào flippedCards chưa
    if (!flippedCards.includes(item) && flippedCards.length < 2) {
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, item]);
    }
    console.log(flippedCards);
  }

  useEffect(() => {
    if (flippedCards.length === 2) {
      const newFlippedCards = [...flippedCards];
      const timerId = setTimeout(() => {
        // Nếu hai thẻ không trùng nhau, lật lại chúng
        if (newFlippedCards[0].source !== newFlippedCards[1].source) {
          setFlippedCards([]);
        }
      }, 1000); // Đặt thời gian chờ là 1 giây

      // Dọn dẹp khi unmount hoặc khi flippedCards thay đổi
      return () => clearTimeout(timerId);
    }
  }, [flippedCards]);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <FlipCard
            flip={flippedCards.includes(item)}
            //clickable={false}
            //friction={6}
            onFlipStart={() => onFlipStart(item)}
            //onFlipEnd={onFlipEnd}
          >
            {/* Face Side */}
            <Image source={item.source} style={{width: size, height: size}} />
            {/* Back Side */}
            <Image
              source={require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/question_mark.png')}
              style={{width: size, height: size}}
            />
          </FlipCard>
        );
      }}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
    />
  );
};
export default PlayScreen;
