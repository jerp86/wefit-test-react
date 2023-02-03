import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  padding: '2.4rem 1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h2: {
    fontSize: '2rem',
  },

  '@sm': {
    padding: '2rem 1rem',
  },
})

export const HeaderSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',

    p: {
      fontWeight: 600,
      fontSize: '1.4rem',
    },

    span: {
      fontWeight: 600,
      fontSize: '1.2rem',
      color: '$gray100',
    },
  },
})
