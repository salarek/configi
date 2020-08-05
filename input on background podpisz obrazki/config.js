import img from './img';
import audio from './audio';
import dataConfig from './gameData.config.js';
// const audio = require.context( '.', true, /\.mp3$/ );
// const img = require.context( '.', true, /\.jpg$/ );
// audio
//   .keys()
//   .forEach( key => {
//      files( key ).default
//     console.log( 'audio: ', key );
//   } );
// img.forEach( item => {
//    img( item ).default;
//   console.log( 'img id: ', item.id );
//   console.log( 'img text: ', item.text );
// } );

var config = {
  engine: 'inputOnBackground',
  gameConfig: dataConfig,
  title: [
    {
      text: `Napisz imiona i nazwiska osób przedstawionych na zdjęciach.`,
      ////audio: 'test.mp3',
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
