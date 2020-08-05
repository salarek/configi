let dirPath = 'static/games/page008_game0';

let configGame = {
  removeInCorrects: true,
  correctBlock: false,
  // autoCheckAllCorrect: true,
  // removeAllFromBadTarget: false,
  rulesGame: {
    itemsConfig: {
      block: true,
    },
    // otherProperty: {
    //   sounds: [{ src: dirPath + '/audio/klik.mp3', id: 'mouseup' }],
    // },
    items: [
      {
        idGroup: 'mapa',
        idItem: 'legend',
        itemsConfig: {
          shuffle: true,
        },
        items: [
          {
            idGroup: 'source',
            idItem: '00',
            correct: [{ idGroup: 'mapa', idItem: 'legend', idHook: 'hook0' }],
          },
          {
            idGroup: 'source',
            idItem: '01',
            correct: [{ idGroup: 'mapa', idItem: 'legend', idHook: 'hook1' }],
          },
          {
            idGroup: 'source',
            idItem: '02',
            correct: [{ idGroup: 'mapa', idItem: 'legend', idHook: 'hook2' }],
          },
          {
            idGroup: 'source',
            idItem: '03',
            correct: [{ idGroup: 'mapa', idItem: 'legend', idHook: 'hook3' }],
          },
          {
            idGroup: 'source',
            idItem: '04',
            correct: [{ idGroup: 'mapa', idItem: 'legend', idHook: 'hook4' }],
          },
          {
            idGroup: 'source',
            idItem: '05',
            correct: [{ idGroup: 'mapa', idItem: 'legend', idHook: 'hook5' }],
          },
        ],
      },
    ],
  },
  layout: {
    itemsConfig: {
      positions: {
        margin: { left: 5, bottom: 5 },
      },
      background: {
        color: 'transparent',
        text: { textAlign: 'center', size: '30px', lineWidth: 325 },
      },
    },
    groups: [
      {
        idGroup: 'mapa',
        background: {
          color: 'transparent',
          //     color: 'pink',
        },
        positions: {
          type: 'absolute',
          pos: { x: 100, y: 0, height: 750, width: 1700 },
        },
        items: [
          {
            id: 'legend',
            positions: {
              autoFit: true,
            },
            otherProperty: {
              hooks: {
                background: {
                  color: 'green',
                },
                positions: {
                  type: 'absolute',
                  pos: { height: 72, width: 331 },
                },
                items: [
                  {
                    id: 'hook0',
                    background: {
                      color: '#bfe3ef',
                    },
                    positions: { pos: { x: 49, y: 122 } },
                  },
                  {
                    id: 'hook1',
                    background: {
                      color: '#bfe3ef',
                    },
                    positions: { pos: { x: 20, y: 385 } },
                  },
                  {
                    id: 'hook2',
                    background: {
                      color: '#bfe3ef',
                    },
                    positions: { pos: { x: 30, y: 512 } },
                  },
                  //
                  {
                    id: 'hook3',
                    background: {
                      color: '#e2edb0',
                    },
                    positions: { pos: { x: 1058, y: 101 } },
                  },
                  {
                    id: 'hook4',
                    background: {
                      color: '#e2edb0',
                    },
                    positions: { pos: { x: 1256, y: 301 } },
                  },
                  {
                    id: 'hook5',
                    background: {
                      color: '#e2edb0',
                    },
                    positions: { pos: { x: 1110, y: 516 } },
                  },
                ],
              },
            },
          },
        ],
      },
      {
        idGroup: 'source',
        background: {
          color: 'transparent',
        },
        positions: {
          type: 'absolute',
          pos: { x: 340, y: 620 },
          autoFit: true,
        },
        itemsConfig: {
          background: {
            color: '#e7e7e7',
          },
          positions: {
            pos: { height: 72, width: 331 },
            margin: { right: 20, top: 20 },
            columns: 3,
          },
        },
        items: [
          {
            id: '00',
            background: {
              text: { val: 'kość' },
            },
          },
          {
            id: '01',
            background: {
              text: { val: 'tkanka kostna zbita' },
            },
          },
          {
            id: '02',
            background: {
              text: { val: 'komórka kostna' },
            },
          },
          {
            id: '05',
            background: {
              text: { val: 'komórka mięśni szkieletowych', offset: { y: -15 } },
            },
          },
          {
            id: '04',
            background: {
              text: { val: 'tkanka mięśniowa poprzecznie prążkowana', offset: { y: -15 } },
            },
          },
          {
            id: '03',
            background: {
              text: { val: 'mięsień szkieletowy' },
            },
          },
        ],
      },
    ],
  },
};

let dataConfig = {
  mixinEngine: 'dnd',
  // isDev: true,
  //   defaultConfig: dirPath + '/defaultConfig.json',
  //   realHeight: 790,
  //   realWidth: 1820,
  mainImage: {
    imagePath: dirPath + '/img/bcg.png',
    pos: {
      y: 0,
      x: 0,
    },
    cssStyle: {
      positions: 'absolute',
      left: '-46px',
      top: '30px',
    },
  },
  configGame: configGame,
};

export default dataConfig;
