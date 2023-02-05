import { Movie } from '@/contexts/CartContext'
import { ListCardsContainer } from '@/styles/components/ListCards'
import { Card } from './Card'

interface List {
  products: Movie[]
}

export const ListCards = ({ products }: List) => (
  <ListCardsContainer className="container">
    {products.map((prod) => (
      <Card key={prod.id} product={prod} />
    ))}
  </ListCardsContainer>
)
