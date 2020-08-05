import img from './img';
import audio from './audio';
import dataConfig from './gameData.config.js';

var config = {
  author: 'MP',
  engine: 'crossword2',
  gameConfig: dataConfig,
  title: [
    {
      text: `Rozwiąż krzyżówkę. Użyj kursora, aby przejść do kolejnej kratki.`,
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
