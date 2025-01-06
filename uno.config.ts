import {
  presetEllipsis,
  presetIcon,
  presetSafearea,
  presetShortcuts,
  transformerWh,
  WHAutoComplete,
} from '@bryce-loskie/unocss-preset-mini'
import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

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
  autocomplete: {
    templates: [
      WHAutoComplete,
    ],
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerWh,
  ],
  presets: [
    presetEllipsis,
    presetSafearea,
    presetShortcuts,
    presetUno(),
    presetIcon(),
  ],
})
