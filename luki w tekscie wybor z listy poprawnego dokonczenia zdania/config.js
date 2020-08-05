import img from './img';
import audio from './audio';
import dataConfig from './gameData.config.js';

var config = {
  engine: 'selectGameWithTextImpr',
  gameConfig: dataConfig,
  title: [
    {
      text: 'Uzupełnij tekst, wybierając właściwe słowo z rozwijalnej listy.',
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
