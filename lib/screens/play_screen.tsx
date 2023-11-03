import {Dimensions, FlatList, Image} from 'react-native';

const images = [
  {source: require('./assets/image/bird.png')},
  {source: require('./assets/image/cat.png')},
  {source: require('./assets/image/dog.png')},
  {source: require('./assets/image/lizard.png')},
  {source: require('./assets/image/mouse.png')},
  {source: require('.assets/image/rabbit.png')},
];

const size = Dimensions.get('window').width / 3;

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
