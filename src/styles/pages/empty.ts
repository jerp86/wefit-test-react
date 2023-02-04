import { styled } from '..'

export const EmptyContainer = styled('main', {
  width: '100%',
  backgroundColor: '$white',
  color: '$gray900',
  borderRadius: '4px',
  padding: '6.4rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.2rem',

  h1: {
    fontSize: '2rem',
    textAlign: 'center',
  },

  img: {
    aspectRatio: 447 / 266,
    objectFit: 'cover',
    // width: '3.2rem',
  },

  button: {
    width: '18rem',
  },
})
