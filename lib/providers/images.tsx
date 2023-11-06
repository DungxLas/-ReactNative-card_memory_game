import {ImageSourcePropType} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


export interface ImageItem {
  id: string;
  source: ImageSourcePropType;
}

export const images: ImageItem[] = [
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/bird.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/cat.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/dog.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/lizard.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/mouse.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/rabbit.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/bird.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/cat.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/dog.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/lizard.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/mouse.png'),
  },
  {
    id: uuidv4(),
    source: require('W:/Code/ReactNative/-ReactNative-card_memory_game/lib/image/rabbit.png'),
  },
];
