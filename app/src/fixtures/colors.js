export default {
  get() {
    return [
      {
        name: 'cyan',
        value: 'rgb(0, 255, 255)',
        related: [
          'blue-cyan',
          'green-cyan'
        ],
        opposite: 'red'
      },
      {
        name: 'blue-cyan',
        value: 'rgb(0, 124, 255)',
        related: [
          'cyan',
          'blue'
        ],
        opposite: 'yellow-red'
      },
      {
        name: 'blue',
        value: 'rgb(0, 0, 255)',
        related: [
          'blue-cyan',
          'magenta-blue'
        ],
        opposite: 'yellow'
      },
      {
        name: 'magenta-blue',
        value: 'rgb(124, 0, 255)',
        related: [
          'blue',
          'magenta'
        ],
        opposite: 'green-yellow'
      },
      {
        name: 'magenta',
        value: 'rgb(255, 0, 255)',
        related: [
          'magenta-blue',
          'red-magenta'
        ],
        opposite: 'green'
      },
      {
        name: 'red-magenta',
        value: 'rgb(255, 0, 124)',
        related: [
          'magenta',
          'red'
        ],
        opposite: 'cyan-green'
      },
      {
        name: 'red',
        value: 'rgb(255, 0, 0)',
        related: [
          'red-magenta',
          'yellow-red'
        ],
        opposite: 'cyan'
      },
      {
        name: 'yellow-red',
        value: 'rgb(255, 124, 0)',
        related: [
          'red',
          'yellow'
        ],
        opposite: 'blue-cyan'
      },
      {
        name: 'yellow',
        value: 'rgb(255, 255, 0)',
        related: [
          'yellow-red',
          'green-yellow'
        ],
        opposite: 'blue'
      },
      {
        name: 'green-yellow',
        value: 'rgb(124, 255, 0)',
        related: [
          'yellow',
          'green'
        ],
        opposite: 'magenta-blue'
      },
      {
        name: 'green',
        value: 'rgb(0, 255, 0)',
        related: [
          'green-yellow',
          'cyan-green'
        ],
        opposite: 'magenta'
      },
      {
        name: 'cyan-green',
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
