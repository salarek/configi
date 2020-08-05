let dirPath = 'static/Games/page024_game0/';

let configGame = {
  correctBlock: true,
  bruteForce: true,
  rulesGame: {
    itemsConfig: { shuffle: true },
    items: [
      {
        idGroup: 'left',
        idItem: '04',
        items: [{ idGroup: 'right', idItem: '04', correct: [{ idGroup: 'left', idItem: '04' }] }],
      },
      {
        idGroup: 'left',
        idItem: '03',
        items: [{ idGroup: 'right', idItem: '03', correct: [{ idGroup: 'left', idItem: '03' }] }],
      },
      {
        idGroup: 'left',
        idItem: '02',
        items: [{ idGroup: 'right', idItem: '02', correct: [{ idGroup: 'left', idItem: '02' }] }],
      },
      {
        idGroup: 'left',
        idItem: '01',
        items: [{ idGroup: 'right', idItem: '01', correct: [{ idGroup: 'left', idItem: '01' }] }],
      },
      {
        idGroup: 'left',
        idItem: '00',
        items: [{ idGroup: 'right', idItem: '00', correct: [{ idGroup: 'left', idItem: '00' }] }],
      },
    ],
  },
  layout: {
    groupsConfig: { positions: { pos: { y: 0 } } },
    itemsConfig: {
      positions: { pos: { width: 400, height: 100 }, margin: { top: 20 }, columns: 1 },
      background: {
        // border: { color: 'black' },
        text: {
          font: 'Myriad Pro',
          size: '40px',
          textBaseline: 'middle',
          textAlign: 'center',
          lineWidth: 780,
        },
      },
    },
    otherProperty: {
      points: {
        pointMouse: {
          color: 'rgba(0,0,0,0.3)',
          rad: 0,
          alwaysShow: true,
        },
        itemsConfig: {
          alwaysShow: true,
          positions: { rad: 25 },
        },
      },
    },
    groups: [
      {
        idGroup: 'left',
        background: {
          text: {
            font: 'Myriad Pro',
            size: '40px',
            textBaseline: 'middle',
            textAlign: 'left',
            lineWidth: 780,
            val: 'Choroby',
            offset: { y: -130 },
            bold: true,
          },
        },
        positions: { autoFit: true, type: 'absolute', pos: { x: 70, y: 100 } },
        itemsConfig: {
          background: {
            color: '#e2edb0',
          },
        },
        otherProperty: {
          lines: {
            good: {
              hideLine: true,
            },
            connect: {
              color: '#5698ff',
              hideLine: true,
            },
            select: {
              color: '#5698ff',
              hideLine: true,
            },
          },
          points: {
            itemsConfig: {
              positions: { rad: 0, offset: { x: 0 } },
              registrationPoint: { setTo: 'center' },
            },
            items: [{ id: 'p01', positions: { pos: { setTo: 'right' } } }],
          },
        },
        items: [
          { id: '00', background: { text: { val: 'krzywica' } } },
          { id: '01', background: { text: { val: 'dyskopatia' } } },
          { id: '02', background: { text: { val: 'skrzywienie kręgosłupa' } } },
          { id: '03', background: { text: { val: 'osteoporoza' } } },
          { id: '04', background: { text: { val: 'płaskostopie' } } },
        ],
      },
      {
        idGroup: 'right',
        background: {
          text: {
            font: 'Myriad Pro',
            size: '40px',
            textBaseline: 'middle',
            textAlign: 'center',
            lineWidth: 780,
            val: 'Profilaktyka',
            offset: { y: -130, x: 100 },
            bold: true,
          },
        },
        positions: { autoFit: true, type: 'absolute', pos: { x: 920, y: 100 } },
        itemsConfig: {
          background: {
            color: '#bfe3ef',
          },
          positions: { pos: { width: 800, height: 100 } },
        },
        otherProperty: {
          lines: {
            good: {
              hideLine: true,
            },
            connect: {
              color: '#5698ff',
              hideLine: true,
            },
            select: {
              color: '#5698ff',
              hideLine: true,
            },
          },
          points: {
            itemsConfig: {
              positions: { rad: 1, offset: { x: 0 } },
              registrationPoint: { setTo: 'center' },
            },
            items: [{ id: 'p01', positions: { pos: { setTo: 'left' } } }],
          },
        },
        items: [
          { id: '00', background: { text: { val: 'zapewnienie odpowiedniej dawki witaminy D' } } },
          {
            id: '01',
            background: {
              text: {
                val: 'regularna aktywność fizyczna\ni higieniczny tryb życia',
                offset: { y: -20 },
              },
            },
          },
          {
            id: '02',
            background: {
              text: {
                val: 'dbałość o prawidłową postawę i ułożenie ciała oraz regularna aktywność fizyczna',
                offset: { y: -20 },
              },
            },
          },
          {
            id: '03',
            background: {
              text: { val: 'odpowiednia dieta bogata w wapń \ni zapewnienie witaminy D', offset: { y: -20 } },
            },
          },
          {
            id: '04',
            background: {
              text: {
                val: 'chodzenie boso, dobór odpowiedniego obuwia i wkładek oraz ćwiczenia stóp',
                offset: { y: -20 },
              },
            },
          },
        ],
      },
    ],
  },
};

let dataConfig = {
  mixinEngine: 'connect',
  // isDev: true,
  realHeight: 800,
  canvasBackground: {
    color: 'white',
    // border: { color: 'black' },
  },
  configGame: configGame,
};

export default dataConfig;
