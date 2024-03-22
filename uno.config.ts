import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'base': '#222431',
      'main': '#191b21',
      'base-b-color': '#2f313c',
      'base-text': '#76777e',
    },
    boxShadow: {
      base: '7px 8px 17px -7px #000',
    },
  },
  shortcuts: [
    ['flex-center', 'flex items-center justify-center'],
    ['flex-col-center', 'flex flex-col items-center justify-center'],
    // main-title style
    ['title-main', 'ma w-fit rounded-b-xl bg-main px-3 py-1 color-white font-bold italic'],
  ],
  rules: [
    // side-bar 动画
    [/^slide-in-blurred-(\d+)$/, ([, d]) => ({ animation: `slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both ${d as any / 1000}s` })],
    ['base-shadow', { 'box-shadow': '0 20px 40px rgba(0, 0, 0, 0.1)' }],
    ['base-input', {
      'box-sizing': 'border-box',
      'width': '100%',
      'height': '50px',
      'border-radius': '8px',
      'background-color': 'transparent',
      'border': '1px solid rgba(255, 255, 255, 0.5)',
      'margin-bottom': '15px',
      'padding-left': '15px',
      'color': '#fff',
      'outline': 'none',
    }],
    ['base-button', {
      'user-select': 'none',
      'width': '100%',
      'height': '50px',
      'border': '0',
      'background-image': 'linear-gradient(to right,#02aab0 0%,#00cdac 51%,#02aab0 100%)',
      'background-size': '200% auto',
      'border-radius': '8px',
      'color': '#fff',
      'outline': 'none',
      'cursor': 'pointer',
      'box-shadow': '0 20px 40px rgba(0, 0, 0, 0.1)',
      'transition': 'ease 0.4s',
    }],
    [
      'base-button-hover',
      {
        'background-position': 'right center',
        'color': '#fff',
        'text-decoration': 'none',
      },
    ],
    [
      'circle-lg',
      {
        'position': 'absolute',
        'content': '\'\'',
        'z-index': '2',
        'width': '450px',
        'height': '450px',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-100%, -80%)',
        'background-color': '#ffe53b',
        'background-image': 'linear-gradient(147deg, #ffe53b 0%, #ff2525 74%)',
        'border-radius': '50%',
        'box-shadow': '0 0 0 0 rgba(255, 255, 255, 0.2)',
        'animation': 'pulse 1.5s infinite',
      },
    ],
    [
      'circle-sm',
      {
        'position': 'absolute',
        'content': '\'\'',
        'z-index': '2',
        'width': '300px',
        'height': '300px',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(10%, 20%)',
        'background-color': '#fa8bff',
        'background-image': 'linear-gradient(45deg,#fa8bff 0%,#2bd2ff 52%,#2bff88 90%)',
        'border-radius': '50%',
        'box-shadow': '0 0 0 0 rgba(255, 255, 255, 0.2)',
        'animation': 'pulse 1.6s infinite',
      },
    ],

    // all animates
    ['animate-color-change-3x', { animation: 'color-change-3x 2s linear infinite alternate both' }],
    ['animate-slide-in-blurred-left', {
      '-webkit-animation': 'slide-in-blurred-left 0.6s cubic-bezier(0.23, 1, 0.32, 1) both',
      'animation': 'slide-in-blurred-left 0.6s cubic-bezier(0.23, 1, 0.32, 1) both',
    }],
    ['animate-slide-out-blurred-right', {
      '-webkit-animation': 'slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both',
      'animation': 'slide-out-blurred-right 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both',
    }],
    ['animate-welcome-text', { animation: 'welcome-text-animate 3s linear infinite' }],
    ['font-Bad', { 'font-family': 'Bad' }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        pop: 'Poppins',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
