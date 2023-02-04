import emptyImg from '@/assets/empty.svg'
import confirmImg from '@/assets/confirm.svg'
import { Button } from '@/components/Button'
import Image from 'next/image'
import { ConfirmCartContainer } from '@/styles/pages/confirmCart'

const options = [
  {
    title: 'Parece que não há nada por aqui :(',
    src: emptyImg,
    alt: 'Standing woman with black hair, black clothing and light overcoat, holding a circle with a blue background containing a circle of 2 clockwise arrows. Illustration.',
    width: 447,
    height: 266,
  },
  {
    title: 'Compra realizada com sucesso!',
    src: confirmImg,
    alt: 'Man with black hair, light shirt, dark pants, has the thumb of his left hand raised, behind a circle with a blue background with a confirmation symbol above his thumb. On the left side at the front is a completed form. Illustration.',
    width: 295,
    height: 307,
  },
]

export default function ConfirmCart() {
  const hasItems = 1
  const { alt, height, src, title, width } = options[hasItems]

  return (
    <ConfirmCartContainer content={hasItems ? 'confirm' : 'empty'}>
      <h1>{title}</h1>

      <Image
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
      />

      <Button>Voltar</Button>
    </ConfirmCartContainer>
  )
}
