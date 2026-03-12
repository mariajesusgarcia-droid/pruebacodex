import Button from './Button'

const variants = ['contained', 'outlined', 'text']
const colors = ['primary', 'secondary', 'tertiary']
const sizes = ['large', 'medium', 'small']
const states = ['resting', 'hover', 'disabled']
const icons = ['none', 'left', 'right']

function MatrixStory(args) {
  return (
    <div className="button-story-grid">
      {variants.map((variant) => (
        <section key={variant} className="button-story-section">
          <header>
            <p>{variant}</p>
          </header>
          <div className="button-story-matrix">
            {icons.map((icon) => (
              <div key={icon} className="button-story-column">
                <h3>{icon}</h3>
                {sizes.map((size) => (
                  <div key={size} className="button-story-block">
                    <strong>{size}</strong>
                    <div className="button-story-stack">
                      {colors.map((color) => (
                        <div key={`${size}-${color}`} className="button-story-row">
                          {states.map((state) => (
                            <Button
                              key={`${variant}-${icon}-${size}-${color}-${state}`}
                              {...args}
                              variant={variant}
                              icon={icon}
                              size={size}
                              color={color}
                              state={state}
                              label="Button"
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'large',
    state: 'resting',
    icon: 'none',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: variants,
    },
    color: {
      control: 'inline-radio',
      options: colors,
    },
    size: {
      control: 'inline-radio',
      options: sizes,
    },
    state: {
      control: 'inline-radio',
      options: states,
    },
    icon: {
      control: 'inline-radio',
      options: icons,
    },
  },
}

export default meta

export const Playground = {}

export const Gallery = {
  render: (args) => <MatrixStory {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Galeria completa inspirada en el nodo de Figma, organizada por variante, icono y tamano.',
      },
    },
  },
}
