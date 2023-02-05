import { styled } from '..'

export const ItemContainer = styled('section', {
  width: '100%',
  color: '$gray900',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '5.2rem',

  '& > img': {
    aspectRatio: 0.78,
  },

  button: {
    border: 'none',
    backgroundColor: 'transparent',
    lineHeight: 0,

    img: {
      aspectRatio: 1,
      width: 'auto',
      height: 'auto',
    },
  },
})

export const SectionDescription = styled('section', {
  width: 'min(100%, 25.3rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.8rem',

  p: {
    fontSize: '1.4rem',
  },

  span: {
    fontSize: '1.6rem',
  },
})

export const SectionQuantity = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.1rem',

  button: {
    border: 'none',
    backgroundColor: 'transparent',
    lineHeight: 0,

    img: {
      aspectRatio: 1,
      width: 'auto',
      height: 'auto',
    },
  },

  span: {
    width: '6.2rem',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0.35rem 1.6rem',

    border: '1px solid $gray100',
    borderRadius: '4px',

    fontWeight: 400,
    fontSize: '1.4rem',
    textAlign: 'center',
  },
})

export const Subtotal = styled('p', {
  width: 'min(100%, 21.369rem)',
  fontSize: '1.6rem',
})
