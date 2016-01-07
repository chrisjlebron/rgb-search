export default {
  get() {
    return [
      {
        name: 'red',
        tints: [
          {name: 'red50', value: 'hsl(357, 83%, 50%)'},
          {name: 'red60', value: 'hsl(357, 83%, 60%)'},
          {name: 'red70', value: 'hsl(357, 83%, 70%)'},
          {name: 'red80', value: 'hsl(357, 83%, 80%)'},
          {name: 'red90', value: 'hsl(357, 83%, 90%)'},
        ],
        value: 'hsl(357, 83%, 50%)',
        related: [
          'pink',
          'orange'
        ],
        opposite: 'blue'
      },
      {
        name: 'orange',
        tints: [
          {name: 'orange50', value: 'hsl(35, 94%, 50%)'},
          {name: 'orange60', value: 'hsl(35, 94%, 60%)'},
          {name: 'orange70', value: 'hsl(35, 94%, 70%)'},
          {name: 'orange80', value: 'hsl(35, 94%, 80%)'},
          {name: 'orange90', value: 'hsl(35, 94%, 90%)'},
        ],
        value: 'hsl(35, 94%, 50%)',
        related: [
          'red',
          'yellow'
        ],
        opposite: 'blue-violet'
      },
      {
        name: 'yellow',
        tints: [
          {name: 'yellow50', value: 'hsl(57, 88%, 50%)'},
          {name: 'yellow60', value: 'hsl(57, 88%, 60%)'},
          {name: 'yellow70', value: 'hsl(57, 88%, 70%)'},
          {name: 'yellow80', value: 'hsl(57, 88%, 80%)'},
          {name: 'yellow90', value: 'hsl(57, 88%, 90%)'},
        ],
        value: 'hsl(57, 88%, 50%)',
        related: [
          'orange',
          'yellow-green'
        ],
        opposite: 'violet'
      },
      {
        name: 'yellow-green',
        tints: [
          {name: 'yellow-green50', value: 'hsl(80, 54%, 50%)'},
          {name: 'yellow-green60', value: 'hsl(80, 54%, 60%)'},
          {name: 'yellow-green70', value: 'hsl(80, 54%, 70%)'},
          {name: 'yellow-green80', value: 'hsl(80, 54%, 80%)'},
          {name: 'yellow-green90', value: 'hsl(80, 54%, 90%)'},
        ],
        value: 'hsl(80, 54%, 50%)',
        related: [
          'yellow',
          'green'
        ],
        opposite: 'mauve'
      },
      {
        name: 'green',
        tints: [
          {name: 'green50', value: 'hsl(105, 44%, 50%)'},
          {name: 'green60', value: 'hsl(105, 44%, 60%)'},
          {name: 'green70', value: 'hsl(105, 44%, 70%)'},
          {name: 'green80', value: 'hsl(105, 44%, 80%)'},
          {name: 'green90', value: 'hsl(105, 44%, 90%)'},
        ],
        value: 'hsl(105, 44%, 50%)',
        related: [
          'yellow-green',
          'blue-green'
        ],
        opposite: 'mauve-pink'
      },
      {
        name: 'blue-green',
        tints: [
          {name: 'blue-green50', value: 'hsl(157, 41%, 50%)'},
          {name: 'blue-green60', value: 'hsl(157, 41%, 60%)'},
          {name: 'blue-green70', value: 'hsl(157, 41%, 70%)'},
          {name: 'blue-green80', value: 'hsl(157, 41%, 80%)'},
          {name: 'blue-green90', value: 'hsl(157, 41%, 90%)'},
        ],
        value: 'hsl(157, 41%, 50%)',
        related: [
          'green',
          'blue'
        ],
        opposite: 'pink'
      },
      {
        name: 'blue',
        tints: [
          {name: 'blue50', value: 'hsl(198, 78%, 50%)'},
          {name: 'blue60', value: 'hsl(198, 78%, 60%)'},
          {name: 'blue70', value: 'hsl(198, 78%, 70%)'},
          {name: 'blue80', value: 'hsl(198, 78%, 80%)'},
          {name: 'blue90', value: 'hsl(198, 78%, 90%)'},
        ],
        value: 'hsl(198, 78%, 50%)',
        related: [
          'blue-green',
          'blue-violet'
        ],
        opposite: 'red'
      },
      {
        name: 'blue-violet',
        tints: [
          {name: 'blue-violet50', value: 'hsl(216, 45%, 50%)'},
          {name: 'blue-violet60', value: 'hsl(216, 45%, 60%)'},
          {name: 'blue-violet70', value: 'hsl(216, 45%, 70%)'},
          {name: 'blue-violet80', value: 'hsl(216, 45%, 80%)'},
          {name: 'blue-violet90', value: 'hsl(216, 45%, 90%)'},
        ],
        value: 'hsl(216, 45%, 50%)',
        related: [
          'blue',
          'violet'
        ],
        opposite: 'orange'
      },
      {
        name: 'violet',
        tints: [
          {name: 'violet50', value: 'hsl(245, 32%, 50%)'},
          {name: 'violet60', value: 'hsl(245, 32%, 60%)'},
          {name: 'violet70', value: 'hsl(245, 32%, 70%)'},
          {name: 'violet80', value: 'hsl(245, 32%, 80%)'},
          {name: 'violet90', value: 'hsl(245, 32%, 90%)'},
        ],
        value: 'hsl(245, 32%, 50%)',
        related: [
          'blue-violet',
          'mauve'
        ],
        opposite: 'yellow'
      },
      {
        name: 'mauve',
        tints: [
          {name: 'mauve50', value: 'hsl(281, 31%, 50%)'},
          {name: 'mauve60', value: 'hsl(281, 31%, 60%)'},
          {name: 'mauve70', value: 'hsl(281, 31%, 70%)'},
          {name: 'mauve80', value: 'hsl(281, 31%, 80%)'},
          {name: 'mauve90', value: 'hsl(281, 31%, 90%)'},
        ],
        value: 'hsl(281, 31%, 50%)',
        related: [
          'violet',
          'mauve-pink'
        ],
        opposite: 'yellow-green'
      },
      {
        name: 'mauve-pink',
        tints: [
          {name: 'mauve-pink50', value: 'hsl(324, 58%, 50%)'},
          {name: 'mauve-pink60', value: 'hsl(324, 58%, 60%)'},
          {name: 'mauve-pink70', value: 'hsl(324, 58%, 70%)'},
          {name: 'mauve-pink80', value: 'hsl(324, 58%, 80%)'},
          {name: 'mauve-pink90', value: 'hsl(324, 58%, 90%)'},
        ],
        value: 'hsl(324, 58%, 50%)',
        related: [
          'mauve',
          'pink'
        ],
        opposite: 'green'
      },
      {
        name: 'pink',
        tints: [
          {name: 'pink50', value: 'hsl(333, 82%, 50%)'},
          {name: 'pink60', value: 'hsl(333, 82%, 60%)'},
          {name: 'pink70', value: 'hsl(333, 82%, 70%)'},
          {name: 'pink80', value: 'hsl(333, 82%, 80%)'},
          {name: 'pink90', value: 'hsl(333, 82%, 90%)'},
        ],
        value: 'hsl(333, 82%, 50%)',
        related: [
          'mauve-pink',
          'red'
        ],
        opposite: 'blue-green'
      }
    ]
  }
}
