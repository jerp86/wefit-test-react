import { CardContainer } from '@/styles/components/Card'
import Image from 'next/image'
import { Button } from './Button'

export const Card = () => (
  <CardContainer>
    <div>
      <div>
        <Image
          src="/x.png"
          alt=""
          loading="lazy"
          decoding="async"
          width={147}
          height={188}
        />

        <p>Homem Aranha</p>
      </div>

      <p>R$ 29,99</p>
    </div>

    <Button type="button" quantity={0}>
      adicionar ao carrinho
    </Button>
  </CardContainer>
)
