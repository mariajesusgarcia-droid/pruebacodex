import Button from './Button'
import {
  ButtonMatrixStory,
  buttonArgTypes,
  buttonArgs,
} from './buttonStoryShared'

const meta = {
  title: 'Components/Button/Light',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  args: buttonArgs,
  argTypes: buttonArgTypes,
}

export default meta

export const Gallery = {
  render: (args) => <ButtonMatrixStory {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Galeria clara inspirada en el nodo 3973:14370 de Figma, organizada por variante, icono y tamano.',
      },
    },
  },
}
