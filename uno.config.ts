import { presetWeb } from '@bryce-loskie/unocss-preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        'src/**/*.{js,ts,vue}',
      ],
    },
  },
  theme: {
    colors: {
      primary: '#374EFC',
      black: '#252525',
      dim: '#eaeaea',
    },
  },
  presets: [
    presetWeb(),
  ],
})
