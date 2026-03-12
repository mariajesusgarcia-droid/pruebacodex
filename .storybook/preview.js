import '../src/styles.css'

const preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
    backgrounds: {
      default: 'canvas',
      values: [
        { name: 'canvas', value: '#ececec' },
        { name: 'white', value: '#ffffff' },
        { name: 'ink', value: '#111827' },
      ],
    },
  },
}

export default preview
