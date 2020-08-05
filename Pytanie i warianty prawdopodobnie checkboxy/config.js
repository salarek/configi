import img from './img';
import audio from './audio';
import gameData from './gameData.config.js';

var config = {
  engine: 'testMulti',
  gameConfig: gameData,
  title: [
    {
      text: 'Spośród podanych odpowiedzi zaznacz prawidłowe.',
      // audio: 'test.mp3',
      // pos: {
      //     x: 10,
      //     y: 10
      // }
    },
  ],
  assets: {
    img: img || [],
    audio: audio || [],
    extendetJS: [],
    extendetStyle: [],
  },
};

// console.log( 'config', config );
export default config;
