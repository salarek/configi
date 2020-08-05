import img from './img';
import audio from './audio';
import dataConfig from './gameData.config.js';

var config = {
  author: 'MP',
  engine: 'createJS',
  gameConfig: dataConfig,
  title: [
    {
      text: 'Przeciągnij składniki pokarmowe we właściwe miejsca w tabeli.',
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
