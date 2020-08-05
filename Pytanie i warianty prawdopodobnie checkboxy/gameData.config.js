let elements = {
  pick: 1,
  shuffle: false,
  items: [
    {
      shuffle: true,
      // pick: 10,
      questionsList: [
        {
          question: `Sole mineralne takie jak fosforan wapnia nadają kościom`,
          shuffle: true,
          vertical: true,
          answers: [
            {
              text: 'elastyczność.',
            },
            {
              text: 'kolor.',
            },
            {
              text: 'twardość.',
              correct: true,
            },
          ],
        },
        {
          question: `Białka takie jak kolagen nadają kościom`,
          shuffle: true,
          vertical: true,
          answers: [
            {
              text: 'elastyczność.',
              correct: true,
            },
            {
              text: 'kolor.',
            },
            {
              text: 'twardość.',
            },
          ],
        },
        {
          question: `Za ochronę i odżywianie kości odpowiada okrywająca je błona nazywana`,
          shuffle: true,
          vertical: true,
          answers: [
            {
              text: 'osteonem.',
            },
            {
              text: 'okostną. ',
              correct: true,
            },
            {
              text: 'obręczą.',
            },
          ],
        },
        {
          question: `Szpik żółty składa się głównie z komórek`,
          shuffle: true,
          vertical: true,
          answers: [
            {
              text: 'nerwowych.',
            },
            {
              text: 'tłuszczowych.',
              correct: true,
            },
            {
              text: 'mięśniowych.',
            },
          ],
        },
      ],
    },
  ],
};

export default elements;
