import emptyImg from '@/assets/empty.svg'
import { Button } from '@/components/Button'
import { EmptyContainer } from '@/styles/pages/empty'
import Image from 'next/image'

export default function Empty() {
  return (
    <EmptyContainer>
      <h1>Parece que não há nada por aqui :(</h1>

      <Image
        src={emptyImg}
        alt="A shopping bag white"
        loading="lazy"
        decoding="async"
        width={447}
        height={266}
      />

      <Button>Voltar</Button>
    </EmptyContainer>
  )
}
