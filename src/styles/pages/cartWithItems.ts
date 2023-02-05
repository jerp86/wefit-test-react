import { styled } from '..'

export const CartWithItemsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.1rem',
  padding: '2.4rem',

  backgroundColor: '$white',
  borderRadius: '4px',

  img: {
    objectFit: 'cover',
  },

  hr: {
    width: '100%',
    border: '1px solid $gray300',
  },

  '@sm': {
    padding: '1.6rem',
  },
})

export const CartWithItemsHeader = styled('header', {
  width: '100%',
  display: 'flex',
  gap: '5.2rem',

  span: {
    fontSize: '1.4rem',
    color: '$gray300',
    textTransform: 'uppercase',
  },

  'span:first-child': {
    width: 'min(100%, calc(89px + 52px + 253px))',
  },

  'span:nth-child(2)': {
    width: 'min(100%, 12rem)',
  },

  'span:nth-child(3)': {
    width: 'min(100%, 28.4rem)',
  },

  '@sm': {
    display: 'none',
  },
})

export const Footer = styled('footer', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    width: '23.542rem',
  },

  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    p: {
      color: '$gray300',
      fontSize: '1.4rem',
      textAlign: 'center',
    },

    span: {
      fontSize: '2.4rem',
      color: '$gray900',
      textAlign: 'center',
    },
  },
})
