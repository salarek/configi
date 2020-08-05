import img from './img';
import audio from './audio';
import dataConfig from './gameData.config.js';

var config = {
  author: 'MP',
  engine: 'findWords',
  gameConfig: dataConfig,
  title: [
    {
      text: `Znajdź 7 pojęć związanych ze skórą.`,
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
