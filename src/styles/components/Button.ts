import { styled } from '..'

export const ButtonContainer = styled('button', {
  width: '100%',
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.2rem',
  padding: '0.8rem',

  border: 'none',
  borderRadius: '4px',

  fontSize: '1.2rem',
  color: '$white',
  textAlign: 'center',
  textTransform: 'uppercase',

  variants: {
    quantity: {
      true: { backgroundColor: '$green' },
      false: { backgroundColor: '$blue' },
    },
  },

  defaultVariants: {
    quantity: false,
  },

  div: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.4rem',

    img: {
      aspectRatio: 1,
      objectFit: 'cover',
      width: '1.36rem',
    },

    span: {
      fontWeight: 400,
    },
  },
})
