import { Link } from 'react-router-dom'
import { Container } from './styles'
import { MapPin } from '@phosphor-icons/react'

export function Header() {
  return (
  <Container>
    <Link to="/">
      <img src="/logo.svg" alt="Coffee-delivery" />
      
      <nav>
        <div>
          <MapPin size={20} weight='fill'/>
          <span>Porto Alegre, RS</span>
        </div>


      </nav>

    </Link>
  </Container>
  )
} 