import { Button } from '@/components/Button'
import { Item } from '@/components/Item'
import { useCart } from '@/contexts/CartContext'
import {
  CartWithItemsContainer,
  CartWithItemsHeader,
  Footer,
} from '@/styles/pages/cartWithItems'
import { formattedPrice } from '@/utils/formattedPrice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'

export default function CartWithItems() {
  const { cartItems, cartItemsTotal } = useCart()
  const router = useRouter()

  const returnToHome = useCallback(async () => {
    if (cartItems.length === 0) {
      await router.push('/')
      return <></>
    }
  }, [cartItems.length, router])

  useEffect(() => {
    returnToHome()
  }, [returnToHome])

  return (
    <CartWithItemsContainer>
      <CartWithItemsHeader>
        <span>Produto</span>
        <span>Qtd</span>
        <span>Subtotal</span>
      </CartWithItemsHeader>

      <main>
        {cartItems.map((item) => (
          <Item product={item} key={item.id} />
        ))}
      </main>

      <hr />

      <Footer>
        <Link href="/confirmCart">
          <Button>Finalizar pedido</Button>
        </Link>

        <section>
          <p>Total</p>
          <span>{formattedPrice.format(cartItemsTotal)}</span>
        </section>
      </Footer>
    </CartWithItemsContainer>
  )
}
