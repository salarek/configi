let dataConfig = {
  id: 'crossword2',
  numPass: false,
  numPassColor: false,
  caseSensitive: false,
  listStyle: {
    cssStyle: {
      marginLeft: '35px',
    },
  },
  cssStyle: {
    marginTop: '70px',
    marginLeft: '-75px',
    width: '760px',
  },
  inputWidth: 50,
  crossword: [
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', 'F', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', 'I', '', '', '', '', '', '', '', '', '', '', ''],
    ['', 'G', 'Ą', 'B', 'C', 'Z', 'A', 'S', 'T', 'A', '', '', '', '', '', '', ''],
    ['', '', '', '', '', 'J', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', 'O', '', '', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', 'L', '', '', 'M', '', '', '', 'S', '', '', '', ''],
    ['', '', '', '', '', 'O', '', '', 'E', '', '', '', 'Z', '', '', '', ''],
    ['', '', '', '', '', 'G', '', '', 'T', '', '', '', 'K', '', '', '', ''],
    ['', '', '', '', 'H', 'I', 'E', 'R', 'A', 'R', 'C', 'H', 'I', 'C', 'Z', 'N', 'A'],
    ['', '', '', '', '', 'A', '', '', 'B', '', '', '', 'E', '', '', '', ''],
    ['', '', '', '', '', '', '', '', 'O', '', '', 'A', 'L', 'F', 'R', 'E', 'D'],
    ['', '', '', '', '', '', '', '', 'L', '', '', '', 'E', '', '', '', ''],
    ['', '', '', '', '', '', '', '', 'I', '', '', '', 'T', '', '', '', ''],
    ['', '', '', '', '', '', '', '', 'Z', '', '', '', 'O', '', '', '', ''],
    ['', '', '', '', '', '', '', '', 'M', '', '', '', 'W', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', '', '', '', 'E', '', '', '', ''],
  ],
  crossdata: [
    {
      pass: 'FIZJOLOGIA',
      txt: 'Nauka o procesach życiowych.',
      ver: true,
      cord: { y: 5, x: 0 },
    },
    // {
    //   pass: 'INSULINA',
    //   txt: 'Substancja niezbędna<br />do utrzymania prawidłowego poziomu glukozy w organizmie.',
    //   ver: true,
    //   cord: { y: 16, x: 1 },
    // },
    {
      pass: 'GĄBCZASTA',
      txt: 'Jeden z 2 rodzajów tkanki<br />kostnej.',
      ver: false,
      cord: { y: 0, x: 3 },
    },
    {
      pass: 'METABOLIZM',
      txt: 'Wszystkie przemiany chemiczne zachodzące w organizmie.',
      ver: true,
      cord: { y: 8, x: 5 },
    },
    {
      pass: 'SZKIELETOWE',
      txt: 'Rodzaj mięśni tworzący układ mięśniowy, który jest częścią układu ruchu.',
      ver: true,
      cord: { y: 12, x: 5 },
    },
    {
      pass: 'HIERARCHICZNA',
      txt: 'Typ budowy organizmu,<br />w którym komórki tworzą<br />bardziej skomplikowane<br />struktury.',
      ver: false,
      cord: { y: 3, x: 9 },
    },
    {
      pass: 'ALFRED',
      txt: 'Imię szwedzkiego naukowca,<br />który wynalazł dynamit;<br />dziś przyznaje się nagrody<br />jego imienia.',
      ver: false,
      cord: { y: 10, x: 11 },
    },
  ],
};

export default dataConfig;
