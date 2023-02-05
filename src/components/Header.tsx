import Image from 'next/image'
import Link from 'next/link'
import bag from '@/assets/bag.svg'
import { useCart } from '@/contexts/CartContext'
import { HeaderContainer, HeaderSection } from '@/styles/components/Header'

export const Header = () => {
  const { cartQuantity } = useCart()

  const itemText = cartQuantity ? 'itens' : 'item'
  const href = cartQuantity ? '/cartWithItems' : '/confirmCart'

  return (
    <HeaderContainer className="container">
      <Link href="/">
        <h2>WeMovies</h2>
      </Link>

      <Link href={href}>
        <HeaderSection>
          <div>
            <p>Meu Carrinho</p>
            <span>{`${cartQuantity} ${itemText}`}</span>
          </div>

          <Image
            src={bag}
            alt="A shopping bag white"
            loading="lazy"
            decoding="async"
          />
        </HeaderSection>
      </Link>
    </HeaderContainer>
  )
}
