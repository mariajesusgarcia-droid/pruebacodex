import Button from './Button'
import {
  ButtonMatrixStory,
  buttonArgTypes,
  buttonArgs,
} from './buttonStoryShared'

const meta = {
  title: 'Components/Button/Dark',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ink',
    },
  },
  args: buttonArgs,
  argTypes: buttonArgTypes,
}

export default meta

export const Gallery = {
  render: (args) => <ButtonMatrixStory {...args} theme="dark" />,
  parameters: {
    docs: {
      description: {
        story:
          'Galeria oscura ajustada al nodo 10372:19143 de Figma, con tokens adaptados a fondo dark.',
      },
    },
  },
}
