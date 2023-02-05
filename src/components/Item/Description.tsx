import { SectionDescription } from '@/styles/components/Item'
import { formattedPrice } from '@/utils/formattedPrice'
import { TrashButton } from './TrashButton'

interface DescriptionProps {
  title: string
  price: number
  onClick: () => void
}

export const Description = ({ title, price, onClick }: DescriptionProps) => (
  <SectionDescription>
    <p>{title}</p>
    <span>{formattedPrice.format(price)}</span>

    <TrashButton type="button" onClick={onClick} />
  </SectionDescription>
)
