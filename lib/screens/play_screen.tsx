import {Dimensions, FlatList, Image} from 'react-native';

const images = [
  {source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/bird.png')},
  {source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/cat.png')},
  {source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/dog.png')},
  {source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/lizard.png')},
  {source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/mouse.png')},
  {source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/rabbit.png')},
];

const size = Dimensions.get('window').width / 2;

const PlayScreen = () => {
  return (
    <FlatList
      data={images}
      renderItem={({item}) => {
        return (
          <Image source={item.source} style={{width: size, height: size}} />
        );
      }}
      keyExtractor={(_, index) => index.toString()}
      numColumns={2}
    />
  );
};
export default PlayScreen;
