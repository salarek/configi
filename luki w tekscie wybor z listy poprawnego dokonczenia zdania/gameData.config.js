let elements = {
  mainImage: {
    imagePath: 'games/page016_game0/img/plansza.png',
    width: 1920,
    height: 1080,
    pos: {
      x: 0,
      y: 0,
    },
  },

  /** @type {Number} domyślna szerokość inputa [px] */
  inputWidth: 220,
  /** @type {Number} domyślna szerokośc całego bloku z inputem [px]*/
  blockWidth: 1300,
  /** @type {Number} domyślna wysokość całego bloku z inputem [px]*/
  blockHeight: 80,
  /** @type {Number} domyślna szerokośc całego tekstu z inputem [px]*/
  textBlockWidth: 1100,
  /** @type {Number} domyślna wysokość całego tekstu z inputem [px]*/
  // textBlockHeight: 100,
  /** @type {String} domyślny kolor tła */
  blockBackgroundColor: 'transparent',
  /** @type {Number} domyslna wielkość czcionki */
  gameFontSize: 40,
  /** @type {Number} ile ma być wybranych elementów */
  pick: 1,
  /** @type {Boolean} czy mają byc losowane true: tak */
  shuffle: true,
  /** @type {Number} maksymalna licznba znaków */
  inputMaxLength: 30,
  /** @type {Boolean} ustawia input w tryb Case sensitive */
  caseSensitive: true,

  /** @type {Array} pozycje bloków tekstu z inputem */
  layoutItems: [
    {
      pos: {
        x: 470,
        y: 300,
      },
      // blockBackgroundColor: '#fff684',
      cssStyle: {
        display: 'inline-block',
        'text-align': 'start',
        'font-size': '40px',
      },
    },
  ],
  /** @type {Array} bloki tekstu z selectami oznaczonymi markerami __elem0__,__elem1__,itd. jesli jest wiecej niz 1 to opcje dla markerow ustawiane sa w tablicy markers w kolejnosci*/
  items: [
    {
      inputFontSize: '30px',
      shuffle: true,
      items: [
        {
          text:
            'Szkielet człowieka jest zbudowany w przeważającej części z __elem0__, a także w niewielkiej części z __elem1__. Szkielet stanowi podstawową wewnętrzną konstrukcję organizmu, na której opierają się inne elementy ciała, przede wszystkim __elem2__. Ruchome połączenia pomiędzy kośćmi to __elem3__. Kości czaszki są połączone ze sobą w sposób nieruchomy za pomocą __elem4__.',
          markers: [
            {
              options: [
                {
                  text: 'szwów',
                },
                {
                  text: 'stawy',
                },
                {
                  text: 'tkanki kostnej',
                  correct: true,
                },
                {
                  text: 'tkanki chrzęstnej',
                },
                {
                  text: ' mięśnie szkieletowe',
                },
              ],
              inputWidth: 410,
              inputFontSize: '30px',
            },
            {
              options: [
                {
                  text: 'szwów',
                },
                {
                  text: 'stawy',
                },
                {
                  text: 'tkanki kostnej',
                },
                {
                  text: 'tkanki chrzęstnej',
                  correct: true,
                },
                {
                  text: ' mięśnie szkieletowe',
                },
              ],
              inputWidth: 410,
              inputFontSize: '30px',
            },
            {
              options: [
                {
                  text: 'szwów',
                },
                {
                  text: 'stawy',
                },
                {
                  text: 'tkanki kostnej',
                },
                {
                  text: 'tkanki chrzęstnej',
                },
                {
                  text: ' mięśnie szkieletowe',
                  correct: true,
                },
              ],
              inputWidth: 410,
              inputFontSize: '30px',
            },
            {
              options: [
                {
                  text: 'szwów',
                },
                {
                  text: 'stawy',
                  correct: true,
                },
                {
                  text: 'tkanki kostnej',
                },
                {
                  text: 'tkanki chrzęstnej',
                },
                {
                  text: ' mięśnie szkieletowe',
                },
              ],
              inputWidth: 410,
              inputFontSize: '30px',
            },
            {
              options: [
                {
                  text: 'szwów',
                  correct: true,
                },
                {
                  text: 'stawy',
                },
                {
                  text: 'tkanki kostnej',
                },
                {
                  text: 'tkanki chrzęstnej',
                },
                {
                  text: ' mięśnie szkieletowe',
                },
              ],
              inputWidth: 410,
              inputFontSize: '30px',
            },
          ],
          cssInnerTextStyle: {
            margin: '0',
          },
        },
      ],
    },
  ],
};
export default elements;
