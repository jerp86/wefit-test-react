import minus from '@/assets/minus.svg'
import plus from '@/assets/plus.svg'
import trash from '@/assets/trash.svg'
import { Button } from '@/components/Button'
import {
  CartWithItemsContainer,
  CartWithItemsHeader,
  Footer,
  SectionDescription,
  SectionQuantity,
  Subtotal,
} from '@/styles/pages/cartWithItems'
import Image from 'next/image'

export default function CartWithItems() {
  return (
    <CartWithItemsContainer>
      <CartWithItemsHeader>
        <span>Produto</span>
        <span>Qtd</span>
        <span>Subtotal</span>
      </CartWithItemsHeader>

      <main>
        <Image
          src="/x.png"
          alt=""
          width={89}
          height={114}
          loading="lazy"
          decoding="async"
        />

        <SectionDescription>
          <p>Homem Aranha</p>
          <span>R$ 29,99</span>
        </SectionDescription>

        <SectionQuantity>
          <button>
            <Image
              src={minus}
              alt="Circle with blue borders and the minus sign in the center"
              loading="lazy"
              decoding="async"
            />
          </button>

          <span>1</span>

          <button>
            <Image
              src={plus}
              alt="Circle with blue borders and the plus sign in the center"
              loading="lazy"
              decoding="async"
            />
          </button>
        </SectionQuantity>

        <Subtotal>R$ 29,99</Subtotal>

        <button>
          <Image
            src={trash}
            alt="Trash can with blue rims, painted blue"
            loading="lazy"
            decoding="async"
          />
        </button>
      </main>

      <hr />

      <Footer>
        <Button>Finalizar pedido</Button>

        <section>
          <p>Total</p>
          <span>R$ 29,90</span>
        </section>
      </Footer>
    </CartWithItemsContainer>
  )
}
