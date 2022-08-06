module.exports = {
  content: ['src/components/**/*.{js,jsx,ts,tsx}'],
  css: ['./node_modules/greencss/css/minified/greencss.css'],
  keyframes: true,
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  blocklist: [
    'html',
    'body',
    'div',
    'header',
    'h3',
    'p',
    'button',
    'svg',
    'footer',
    'span',
    'a',
    'i',
    'center',
    'label',
    'table',
    'canvas',
    '*',
    'container',
    'sans'
  ],
  output: './dist/style/green.css'
}
