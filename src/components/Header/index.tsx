import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { useCard } from '../../hooks/useCard'
import { Aside, Container } from './styles'

export function Header() {
  const { card } = useCard()

  return (
    <Container>
      <Link to="/Home">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to={`card`} aria-disabled={card.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {card.length > 0 ? <span>{card.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  )
}