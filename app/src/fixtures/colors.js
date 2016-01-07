export default {
  get() {
    return [
      {
        name: 'cyan',
        matches: [
          { name: 'cyan10', value: 'rgba(0, 255, 255, 1)'},
          { name: 'cyan8', value: 'rgba(0, 255, 255, .8)'},
          { name: 'cyan6', value: 'rgba(0, 255, 255, .6)'},
          { name: 'cyan4', value: 'rgba(0, 255, 255, .4)'},
          { name: 'cyan2', value: 'rgba(0, 255, 255, .2)'},
        ],
        value: 'rgb(0, 255, 255)',
        related: [
          'blue-cyan',
          'cyan-green'
        ],
        opposite: 'red'
      },
      {
        name: 'blue-cyan',
        matches: [
          {name: 'blue-cyan10', value: 'rgba(0, 124, 255, 1)'},
          {name: 'blue-cyan8', value: 'rgba(0, 124, 255, .8)'},
          {name: 'blue-cyan6', value: 'rgba(0, 124, 255, .6)'},
          {name: 'blue-cyan4', value: 'rgba(0, 124, 255, .4)'},
          {name: 'blue-cyan2', value: 'rgba(0, 124, 255, .2)'},
        ],
        value: 'rgb(0, 124, 255)',
        related: [
          'cyan',
          'blue'
        ],
        opposite: 'yellow-red'
      },
      {
        name: 'blue',
        matches: [
          {name: 'blue10', value: 'rgba(0, 0, 255, 1)'},
          {name: 'blue8', value: 'rgba(0, 0, 255, .8)'},
          {name: 'blue6', value: 'rgba(0, 0, 255, .6)'},
          {name: 'blue4', value: 'rgba(0, 0, 255, .4)'},
          {name: 'blue2', value: 'rgba(0, 0, 255, .2)'},
        ],
        value: 'rgb(0, 0, 255)',
        related: [
          'blue-cyan',
          'magenta-blue'
        ],
        opposite: 'yellow'
      },
      {
        name: 'magenta-blue',
        matches: [
          {name: 'magenta-blue10', value: 'rgba(124, 0, 255, 1)'},
          {name: 'magenta-blue8', value: 'rgba(124, 0, 255, .8)'},
          {name: 'magenta-blue6', value: 'rgba(124, 0, 255, .6)'},
          {name: 'magenta-blue4', value: 'rgba(124, 0, 255, .4)'},
          {name: 'magenta-blue2', value: 'rgba(124, 0, 255, .2)'},
        ],
        value: 'rgb(124, 0, 255)',
        related: [
          'blue',
          'magenta'
        ],
        opposite: 'green-yellow'
      },
      {
        name: 'magenta',
        matches: [
          {name: 'magenta10', value: 'rgba(255, 0, 255, 1)'},
          {name: 'magenta8', value: 'rgba(255, 0, 255, .8)'},
          {name: 'magenta6', value: 'rgba(255, 0, 255, .6)'},
          {name: 'magenta4', value: 'rgba(255, 0, 255, .4)'},
          {name: 'magenta2', value: 'rgba(255, 0, 255, .2)'},
        ],
        value: 'rgb(255, 0, 255)',
        related: [
          'magenta-blue',
          'red-magenta'
        ],
        opposite: 'green'
      },
      {
        name: 'red-magenta',
        matches: [
          {name: 'red-magenta10', value: 'rgba(255, 0, 124, 1)'},
          {name: 'red-magenta8', value: 'rgba(255, 0, 124, .8)'},
          {name: 'red-magenta6', value: 'rgba(255, 0, 124, .6)'},
          {name: 'red-magenta4', value: 'rgba(255, 0, 124, .4)'},
          {name: 'red-magenta2', value: 'rgba(255, 0, 124, .2)'},
        ],
        value: 'rgb(255, 0, 124)',
        related: [
          'magenta',
          'red'
        ],
        opposite: 'cyan-green'
      },
      {
        name: 'red',
        matches: [
          {name: 'red10', value: 'rgba(255, 0, 0, 1)'},
          {name: 'red8', value: 'rgba(255, 0, 0, .8)'},
          {name: 'red6', value: 'rgba(255, 0, 0, .6)'},
          {name: 'red4', value: 'rgba(255, 0, 0, .4)'},
          {name: 'red2', value: 'rgba(255, 0, 0, .2)'},
        ],
        value: 'rgb(255, 0, 0)',
        related: [
          'red-magenta',
          'yellow-red'
        ],
        opposite: 'cyan'
      },
      {
        name: 'yellow-red',
        matches: [
          {name: 'yellow-red10', value: 'rgba(255, 124, 0, 1)'},
          {name: 'yellow-red8', value: 'rgba(255, 124, 0, .8)'},
          {name: 'yellow-red6', value: 'rgba(255, 124, 0, .6)'},
          {name: 'yellow-red4', value: 'rgba(255, 124, 0, .4)'},
          {name: 'yellow-red2', value: 'rgba(255, 124, 0, .2)'},
        ],
        value: 'rgb(255, 124, 0)',
        related: [
          'red',
          'yellow'
        ],
        opposite: 'blue-cyan'
      },
      {
        name: 'yellow',
        matches: [
          {name: 'yellow10', value: 'rgba(255, 255, 0, 1)'},
          {name: 'yellow8', value: 'rgba(255, 255, 0, .8)'},
          {name: 'yellow6', value: 'rgba(255, 255, 0, .6)'},
          {name: 'yellow4', value: 'rgba(255, 255, 0, .4)'},
          {name: 'yellow2', value: 'rgba(255, 255, 0, .2)'},
        ],
        value: 'rgb(255, 255, 0)',
        related: [
          'yellow-red',
          'green-yellow'
        ],
        opposite: 'blue'
      },
      {
        name: 'green-yellow',
        matches: [
          {name: 'green-yellow10', value: 'rgba(124, 255, 0, 1)'},
          {name: 'green-yellow8', value: 'rgba(124, 255, 0, .8)'},
          {name: 'green-yellow6', value: 'rgba(124, 255, 0, .6)'},
          {name: 'green-yellow4', value: 'rgba(124, 255, 0, .4)'},
          {name: 'green-yellow2', value: 'rgba(124, 255, 0, .2)'},
        ],
        value: 'rgb(124, 255, 0)',
        related: [
          'yellow',
          'green'
        ],
        opposite: 'magenta-blue'
      },
      {
        name: 'green',
        matches: [
          {name: 'green10', value: 'rgba(0, 255, 0, 1)'},
          {name: 'green8', value: 'rgba(0, 255, 0, .8)'},
          {name: 'green6', value: 'rgba(0, 255, 0, .6)'},
          {name: 'green4', value: 'rgba(0, 255, 0, .4)'},
          {name: 'green2', value: 'rgba(0, 255, 0, .2)'},
        ],
        value: 'rgb(0, 255, 0)',
        related: [
          'green-yellow',
          'cyan-green'
        ],
        opposite: 'magenta'
      },
      {
        name: 'cyan-green',
        matches: [
          {name: 'cyan-green10', value: 'rgba(0, 255, 124, 1)'},
          {name: 'cyan-green8', value: 'rgba(0, 255, 124, .8)'},
          {name: 'cyan-green6', value: 'rgba(0, 255, 124, .6)'},
          {name: 'cyan-green4', value: 'rgba(0, 255, 124, .4)'},
          {name: 'cyan-green2', value: 'rgba(0, 255, 124, .2)'},
        ],
        value: 'rgb(0, 255, 124)',
        related: [
          'cyan',
          'green'
        ],
        opposite: 'red-magenta'
      }
    ]
  }
}
