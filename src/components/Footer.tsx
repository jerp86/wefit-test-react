import { FooterContainer } from '@/styles/components/Footer'
import { formattedPrice } from '@/utils/formattedPrice'
import Link from 'next/link'
import { Button } from './Button'

interface FooterProps {
  buttonText: string
  total: number
}

export const Footer = ({ buttonText, total }: FooterProps) => (
  <FooterContainer>
    <Link href="/confirm-cart" prefetch={false}>
      <Button>{buttonText}</Button>
    </Link>

    <section>
      <p>Total</p>
      <span>{formattedPrice.format(total)}</span>
    </section>
  </FooterContainer>
)
