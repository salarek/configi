import img from './img';
import audio from './audio';
import dataConfig from './gameData.config.js';

var config = {
  author: 'MP',
  engine: 'createJS',
  gameConfig: dataConfig,
  title: [
    {
      text: 'Połącz właściwie choroby układu ruchu z ich profilaktyką.',
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
