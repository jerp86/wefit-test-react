import minus from '@/assets/minus.svg'
import plus from '@/assets/plus.svg'
import { CartItem, useCart } from '@/contexts/CartContext'
import {
  ItemContainer,
  SectionQuantity,
  Subtotal,
} from '@/styles/components/Item'
import { formattedPrice } from '@/utils/formattedPrice'
import Image from 'next/image'
import { Description } from './Description'
import { TrashButton } from './TrashButton'

interface CartItemProps {
  product: CartItem
}

export const Item = ({ product }: CartItemProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const handleDecrease = () =>
    changeCartItemQuantity({ itemId: product.id, type: 'decrease' })

  const handleIncrease = () =>
    changeCartItemQuantity({ itemId: product.id, type: 'increase' })

  const handleRemove = () => removeCartItem(product.id)

  const subtotal = formattedPrice.format(product.price * product.quantity)

  return (
    <ItemContainer>
      <Image
        src={product.image}
        alt={`Movie cover image ${product.title}`}
        width={89}
        height={114}
        loading="lazy"
        decoding="async"
      />

      <Description
        title={product.title}
        price={product.price}
        onClick={handleRemove}
      />

      <SectionQuantity>
        <button type="button" onClick={handleDecrease}>
          <Image
            src={minus}
            alt="Circle with blue borders and the minus sign in the center"
            loading="lazy"
            decoding="async"
          />
        </button>

        <span>{product.quantity}</span>

        <button type="button" onClick={handleIncrease}>
          <Image
            src={plus}
            alt="Circle with blue borders and the plus sign in the center"
            loading="lazy"
            decoding="async"
          />
        </button>
      </SectionQuantity>

      <Subtotal>{subtotal}</Subtotal>

      <TrashButton type="button" onClick={handleRemove} />
    </ItemContainer>
  )
}
