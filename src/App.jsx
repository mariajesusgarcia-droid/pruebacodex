import Button from './components/Button'

const examples = [
  { variant: 'contained', color: 'primary', size: 'large', icon: 'none' },
  { variant: 'contained', color: 'secondary', size: 'large', icon: 'right' },
  { variant: 'outlined', color: 'primary', size: 'medium', icon: 'left' },
  { variant: 'outlined', color: 'tertiary', size: 'medium', icon: 'none' },
  { variant: 'text', color: 'secondary', size: 'small', icon: 'right' },
  { variant: 'text', color: 'tertiary', size: 'small', icon: 'left' },
]

const storybookLinks = [
  {
    href: 'http://127.0.0.1:9010/?path=/story/components-button-playground--interactive',
    label: 'Abrir Storybook local',
    kind: 'primary',
  },
  {
    href: 'https://pruebastorybook.vercel.app/?path=/story/components-button-light--gallery',
    label: 'Ver Light',
    kind: 'secondary',
  },
  {
    href: 'https://pruebastorybook.vercel.app/?path=/story/components-button-dark--gallery',
    label: 'Ver Dark',
    kind: 'secondary',
  },
]

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero hero--system">
        <p className="eyebrow">MKP v5.0 button system</p>
        <h1>Botones listos para Storybook.</h1>
        <p className="lead">
          La implementacion sigue la matriz del nodo de Figma con variantes,
          colores, tamanos, estados e iconos reutilizables desde un solo
          componente.
        </p>
        <div className="storybook-links">
          {storybookLinks.map((link) => (
            <a
              key={link.href}
              className={`storybook-link storybook-link--${link.kind}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="button-showcase">
          {examples.map((example) => (
            <Button
              key={JSON.stringify(example)}
              {...example}
              label="Button"
              state="resting"
            />
          ))}
        </div>
      </section>
    </main>
  )
}
