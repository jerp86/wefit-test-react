import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'
import { ButtonContainer } from '@/styles/components/Button'
import cart from '@/assets/cart.svg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  quantity?: number
}

export const Button = ({ children, quantity }: ButtonProps) => {
  const hasQuantity = quantity || quantity === 0

  return (
    <ButtonContainer quantity={!!quantity}>
      {hasQuantity && (
        <div>
          <Image
            src={cart}
            alt="White shopping cart with plus sign on top"
            loading="lazy"
            decoding="async"
          />
          <span>{quantity}</span>
        </div>
      )}

      <span>{children}</span>
    </ButtonContainer>
  )
}
