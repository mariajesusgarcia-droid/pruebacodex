import Button from './Button'

const variants = ['contained', 'outlined', 'text']
const colors = ['primary', 'secondary', 'tertiary']
const sizes = ['large', 'medium', 'small']
const states = ['resting', 'hover', 'disabled']
const icons = ['none', 'left', 'right']

const darkThemeVars = {
  '--button-primary-main': '#1ca58a',
  '--button-primary-dark': '#118d75',
  '--button-primary-contrast': '#000000',
  '--button-primary-hover-bg': 'rgba(28, 165, 138, 0.08)',
  '--button-secondary-main': '#e73a78',
  '--button-secondary-contrast': '#000000',
  '--button-secondary-hover-bg': 'rgba(231, 58, 120, 0.08)',
  '--button-secondary-contained-hover': '#a22954',
  '--button-text-primary': '#f0f4f8',
  '--button-text-disabled': 'rgba(85, 94, 104, 0.48)',
  '--button-outlined-border': '#32383e',
  '--button-action-hover': 'rgba(255, 255, 255, 0.08)',
  '--button-action-selected': 'rgba(255, 255, 255, 0.16)',
  '--button-action-disabled-bg': 'rgba(255, 255, 255, 0.05)',
}

function MatrixStory({ theme = 'light', ...args }) {
  return (
    <div
      className={`button-story-grid button-story-grid--${theme}`}
      style={theme === 'dark' ? darkThemeVars : undefined}
    >
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

export const DarkGallery = {
  render: (args) => <MatrixStory {...args} theme="dark" />,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'ink',
    },
    docs: {
      description: {
        story:
          'Version oscura del mismo sistema de botones, ajustada al nodo 10372:19143 de Figma.',
      },
    },
  },
}
