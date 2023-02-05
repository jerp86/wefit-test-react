import { ListCards } from '@/components/ListCards'
import { Movie } from '@/contexts/CartContext'
import { api } from '@/lib/axios'
import { GetStaticProps } from 'next'

interface HomeProps {
  products: Movie[]
}

export default function Home({ products }: HomeProps) {
  return <ListCards products={products} />
}

export const getStaticProps: GetStaticProps = async () => {
  const seconds = 60
  const minutes = 60
  const hours = 24
  const days = 7

  const response = await api.get<Movie[]>('/products')

  const movies = response.data.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      image: movie.image,
      price: movie.price,
    } as Movie
  })

  return {
    props: {
      products: movies,
    },
    revalidate: seconds * minutes * hours * days,
  }
}
