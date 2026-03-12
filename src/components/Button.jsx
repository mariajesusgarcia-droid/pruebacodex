import './Button.css'

const SIZE_CONFIG = {
  large: {
    paddingInline: '24px',
    paddingBlock: '11px',
    fontSize: '15px',
    lineHeight: '26px',
    iconBox: '20px',
    iconSize: '20px',
  },
  medium: {
    paddingInline: '20px',
    paddingBlock: '8px',
    fontSize: '14px',
    lineHeight: '24px',
    iconBox: '20px',
    iconSize: '20px',
  },
  small: {
    paddingInline: '16px',
    paddingBlock: '6px',
    fontSize: '13px',
    lineHeight: '22px',
    iconBox: '18px',
    iconSize: '18px',
  },
}

const TONES = {
  primary: {
    main: 'var(--button-primary-main)',
    contrast: 'var(--button-primary-contrast)',
    hoverBg: 'var(--button-primary-hover-bg)',
    containedHover: 'var(--button-primary-dark)',
  },
  secondary: {
    main: 'var(--button-secondary-main)',
    contrast: 'var(--button-secondary-contrast)',
    hoverBg: 'var(--button-secondary-hover-bg)',
    containedHover: 'var(--button-secondary-contained-hover)',
  },
  tertiary: {
    main: 'var(--button-text-primary)',
    contrast: 'var(--button-text-primary)',
    border: 'var(--button-outlined-border)',
    hoverBg: 'var(--button-action-hover)',
    contained: 'var(--button-action-selected)',
    containedHover: 'var(--button-action-hover)',
  },
}

function cx(...classNames) {
  return classNames.filter(Boolean).join(' ')
}

function ArrowIcon({ direction = 'right', size = 20 }) {
  const rotation = direction === 'left' ? '180deg' : '0deg'

  return (
    <svg
      aria-hidden="true"
      className="button__icon-svg"
      style={{ width: size, height: size, transform: `rotate(${rotation})` }}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M11.667 5L16.667 10L11.667 15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.333 10H16.111"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function getVisualState({ variant, color, state }) {
  const tone = TONES[color]
  const disabled = state === 'disabled'

  if (disabled) {
    return {
      background:
        variant === 'contained' ? 'var(--button-action-disabled-bg)' : 'transparent',
      borderColor:
        variant === 'outlined' ? 'var(--button-action-disabled-bg)' : 'transparent',
      textColor: 'var(--button-text-disabled)',
    }
  }

  if (variant === 'contained') {
    return {
      background:
        state === 'hover'
          ? tone.containedHover
          : color === 'tertiary'
            ? tone.contained
            : tone.main,
      borderColor: 'transparent',
      textColor: color === 'tertiary' ? 'var(--button-text-primary)' : tone.contrast,
    }
  }

  if (variant === 'outlined') {
    return {
      background: state === 'hover' ? tone.hoverBg : 'transparent',
      borderColor: color === 'tertiary' ? tone.border : tone.main,
      textColor: color === 'tertiary' ? 'var(--button-text-primary)' : tone.main,
    }
  }

  return {
    background: state === 'hover' ? tone.hoverBg : 'transparent',
    borderColor: 'transparent',
    textColor: color === 'tertiary' ? 'var(--button-text-primary)' : tone.main,
  }
}

export default function Button({
  label = 'Button',
  children,
  variant = 'contained',
  color = 'primary',
  size = 'large',
  state = 'resting',
  icon = 'none',
  className = '',
  ...props
}) {
  const copy = children ?? label
  const config = SIZE_CONFIG[size]
  const visuals = getVisualState({ variant, color, state })
  const isDisabled = state === 'disabled' || props.disabled

  return (
    <button
      type="button"
      className={cx(
        'button',
        `button--${variant}`,
        `button--${size}`,
        `button--${color}`,
        `button--${state}`,
        className,
      )}
      disabled={isDisabled}
      style={{
        '--button-padding-inline': config.paddingInline,
        '--button-padding-block': config.paddingBlock,
        '--button-font-size': config.fontSize,
        '--button-line-height': config.lineHeight,
        '--button-icon-box': config.iconBox,
        '--button-icon-size': config.iconSize,
        '--button-bg': visuals.background,
        '--button-border': visuals.borderColor,
        '--button-fg': visuals.textColor,
      }}
      {...props}
    >
      <span className="button__content">
        {icon === 'left' ? (
          <span className="button__icon" aria-hidden="true">
            <ArrowIcon direction="left" size={Number.parseInt(config.iconSize, 10)} />
          </span>
        ) : null}
        <span className="button__label">{copy}</span>
        {icon === 'right' ? (
          <span className="button__icon" aria-hidden="true">
            <ArrowIcon direction="right" size={Number.parseInt(config.iconSize, 10)} />
          </span>
        ) : null}
      </span>
    </button>
  )
}
