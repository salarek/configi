import img from './img';
import audio from './audio';
import dataConfig from './gameData.config.js';

var config = {
  author: 'MP',
  engine: 'createJS',
  gameConfig: dataConfig,
  title: [
    {
      text: 'Przeciągnij opisy w odpowiednie miejsca na ilustracji.',
      // audio: 'games/page019_game4/audio/z19c4.mp3',
    },
  ],
  assets: {
    img: img || [],
    audio: audio || [],
    extendetJS: [],
    extendetStyle: [],
  },
};

export default config;
