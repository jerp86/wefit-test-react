import { globalCss } from '.'

export const globalStyles = globalCss({
  ':root': {
    fontSize: '62.5%',
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$white',
    '-webkit-font-smoothing': 'antialiased',
  },

  'button, a': {
    cursor: 'pointer',
  },

  'button:disabled': {
    opacity: '0.6',
    cursor: 'not-allowed',
    transition: 'all 0.4s',
  },

  'body *': {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    lineHeight: 1.4,
  },

  a: {
    textDecoration: 'none',
  },

  '.container': {
    maxWidth: '960px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
