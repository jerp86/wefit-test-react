import { HeaderContainer, HeaderSection } from '@/styles/components/Header'
import bag from '@/assets/bag.svg'
import Image from 'next/image'

export const Header = () => (
  <HeaderContainer className="container">
    <h2>WeMovies</h2>

    <HeaderSection>
      <div>
        <p>Meu Carrinho</p>
        <span>0 item</span>
      </div>

      <Image
        src={bag}
        alt="A shopping bag white"
        loading="lazy"
        decoding="async"
      />
    </HeaderSection>
  </HeaderContainer>
)
