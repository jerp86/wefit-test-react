import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'
import { ButtonContainer } from '@/styles/components/Button'
import cart from '@/assets/cart.svg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  hasIcon?: boolean
}

export const Button = ({
  children,
  hasIcon = false,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer disabled={disabled} {...rest}>
      {hasIcon && (
        <div>
          <Image
            src={cart}
            alt="White shopping cart with plus sign on top"
            loading="lazy"
            decoding="async"
            width={15}
            height={15}
          />
          <span>{disabled ? 1 : 0}</span>
        </div>
      )}

      <span>{children}</span>
    </ButtonContainer>
  )
}
