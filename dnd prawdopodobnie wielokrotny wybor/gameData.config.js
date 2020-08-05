let dirPath = 'static/games/page040_game0';

let configGame = {
  removeInCorrects: true,
  correctBlock: true,
  rulesGame: {
    groupsConfig: {},
    itemsGarbage: [{ idGroup: 'source', itemsConfig: { block: false, shuffle: true } }],
    itemsConfig: { shuffle: true, block: true },
    items: [
      {
        idGroup: 'target',
        idItem: '00',
        correct: [{ idGroup: 'source', idItem: 's00' }],
      },
      {
        idGroup: 'target',
        idItem: '00',
        correct: [{ idGroup: 'source', idItem: 's01' }],
      },
      {
        idGroup: 'target',
        idItem: '00',
        correct: [{ idGroup: 'source', idItem: 's02' }],
      },
      {
        idGroup: 'target',
        idItem: '00',
        correct: [{ idGroup: 'source', idItem: 's03' }],
      },
      {
        idGroup: 'target2',
        idItem: '00',
        correct: [{ idGroup: 'source', idItem: 's04' }],
      },
      {
        idGroup: 'target2',
        idItem: '00',
        correct: [{ idGroup: 'source', idItem: 's05' }],
      },
    ],
  },
  layout: {
    itemsConfig: {
      background: {
        text: {
          textBaseline: 'middle',
          textAlign: 'center',
        },
      },
    },
    groups: [
      // {
      //   idGroup: 'title',
      //   positions: {
      //     pos: { autoFit: true, x: 0, y: 0, width: 1820, height: 100 },
      //     type: 'absolute',
      //   },
      //   background: {
      //     color: 'green',
      //     text: {
      //       font: 'Myriad Pro',
      //       size: '36px',
      //       textBaseline: 'top',
      //       textAlign: 'center',
      //       bold: true,
      //       val: 'Składniki Pokarmowe',
      //     },
      //   },
      //   itemsConfig: {
      //     background: {
      //       color: 'green',
      //       text: {
      //         font: 'Myriad Pro',
      //         size: '36px',
      //         bold: true,
      //       },
      //     },
      //   },
      //   items: [],
      // },
      {
        idGroup: 'target',
        positions: {
          pos: { autoFit: true, x: 310, y: 100, width: 600, height: 425 },
          type: 'absolute',
          fixTab: [
            { x: 0, y: 80 },
            { x: 0, y: 160 },
            { x: 0, y: 240 },
            { x: 0, y: 320 },
          ],
        },
        background: {
          color: '#bfe3ef',
          text: {
            font: 'Myriad Pro',
            size: '40px',
            textBaseline: 'top',
            textAlign: 'center',
            // bold: true,
            offset: { y: 20 },
            val: 'związki organiczne',
          },
        },
        itemsConfig: {
          background: {
            text: {
              font: 'Myriad Pro',
              size: '36px',
              bold: true,
            },
          },
        },
        otherProperty: {
          hooks: {
            positions: {
              pos: { width: 550, height: 80, x: 25, y: 0 },
              columns: 1,
            },
            background: {
              color: '#dae9ef',
            },
            items: [
              {
                id: 'h01',
              },
              {
                id: 'h02',
              },
              {
                id: 'h03',
              },
              {
                id: 'h04',
              },
            ],
          },
        },
        items: [{ id: '00' }],
      },
      {
        idGroup: 'target2',
        positions: {
          pos: { autoFit: true, x: 910, y: 100, width: 600, height: 425 },
          type: 'absolute',
          fixTab: [
            { x: 0, y: 80 },
            { x: 0, y: 160 },
            { x: 0, y: 240 },
            { x: 0, y: 320 },
          ],
        },
        background: {
          color: '#e2edb0',
          text: {
            font: 'Myriad Pro',
            size: '40px',
            textBaseline: 'top',
            textAlign: 'center',
            // bold: true,
            offset: { y: 20 },
            val: 'związki nieorganiczne',
          },
        },
        itemsConfig: {
          background: {
            text: {
              font: 'Myriad Pro',
              size: '36px',
              bold: true,
            },
          },
        },
        otherProperty: {
          hooks: {
            positions: {
              pos: { width: 550, height: 80, x: 25, y: 0 },
              columns: 1,
            },
            background: {
              color: '#e9edd7',
            },
            items: [
              {
                id: 'h01',
              },
              {
                id: 'h02',
              },
              {
                id: 'h03',
              },
              {
                id: 'h04',
              },
            ],
          },
        },
        items: [{ id: '00' }],
      },
      {
        idGroup: 'source',
        itemsConfig: {
          positions: {
            pos: { height: 80, width: 550, y: 550, x: 75 },
            rows: 2,
            margin: { right: 5, top: 5 },
          },
          background: {
            color: '#e7e7e7',
            text: { size: '30px', textAlign: 'center', textBaseline: 'middle', font: 'Myriad Pro' },
          },
        },
        // otherProperty: {
        //   clones: {
        //     cloneNumber: 2,
        //   },
        // },
        items: [
          { id: 's00', background: { text: { val: 'białka' } } },
          { id: 's01', background: { text: { val: 'cukry' } } },
          { id: 's02', background: { text: { val: 'tłuszcze' } } },
          { id: 's03', background: { text: { val: 'witaminy' } } },
          { id: 's04', background: { text: { val: 'woda' } } },
          { id: 's05', background: { text: { val: 'sole mineralne' } } },
        ],
      },
    ],
  },
};

let dataConfig = {
  mixinEngine: 'dnd',
  realHeight: 800,
  realWidth: 1800,
  mainImage: {
    imagePath: dirPath + '/img/plansza.png',
    pos: {
      x: -0,
      y: -119,
    },
  },
  configGame: configGame,
};

export default dataConfig;
