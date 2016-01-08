export default {
  get() {
    return [
      {
        name: 'red',
        related: [
          'pink',
          'orange'
        ],
        opposite: 'blue'
      },
      {
        name: 'orange',
        related: [
          'red',
          'yellow'
        ],
        opposite: 'blue-violet'
      },
      {
        name: 'yellow',
        related: [
          'orange',
          'yellow-green'
        ],
        opposite: 'violet'
      },
      {
        name: 'yellow-green',
        related: [
          'yellow',
          'green'
        ],
        opposite: 'mauve'
      },
      {
        name: 'green',
        related: [
          'yellow-green',
          'blue-green'
        ],
        opposite: 'mauve-pink'
      },
      {
        name: 'blue-green',
        related: [
          'green',
          'blue'
        ],
        opposite: 'pink'
      },
      {
        name: 'blue',
        related: [
          'blue-green',
          'blue-violet'
        ],
        opposite: 'red'
      },
      {
        name: 'blue-violet',
        related: [
          'blue',
          'violet'
        ],
        opposite: 'orange'
      },
      {
        name: 'violet',
        related: [
          'blue-violet',
          'mauve'
        ],
        opposite: 'yellow'
      },
      {
        name: 'mauve',
        related: [
          'violet',
          'mauve-pink'
        ],
        opposite: 'yellow-green'
      },
      {
        name: 'mauve-pink',
        related: [
          'mauve',
          'pink'
        ],
        opposite: 'green'
      },
      {
        name: 'pink',
        related: [
          'mauve-pink',
          'red'
        ],
        opposite: 'blue-green'
      }
    ]
  }
}
