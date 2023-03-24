import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      background: '#23272A',
      subText: '#99AAB5',
      purple: '#7289DA',
    }
  },
})