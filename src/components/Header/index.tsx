import { Link } from 'react-router-dom'

import { Container, Nav } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'


export function Header() {

  return (
    <Container>
      <Link to="/Home">
        <img src="/images/logo.svg" alt="Coffee-delivery" />
      </Link>

      <Nav>
        <Link to="https://www.google.com/maps/place/Porto+Alegre,+RS/@-30.1088701,-51.1771419,11z/data=!4m15!1m8!3m7!1s0x95199cd2566acb1d:0x603111a89f87e91f!2sPorto+Alegre,+RS!3b1!8m2!3d-30.0368176!4d-51.2089887!16zL20vMDE3NTc1!3m5!1s0x95199cd2566acb1d:0x603111a89f87e91f!8m2!3d-30.0368176!4d-51.2089887!16zL20vMDE3NTc1?entry=ttu">
          <img src="/images/location.svg" />
        </Link>
        
        <div>
        <ShoppingCart size={22} weight='fill'/>
        </div>
      </Nav>
    </Container>
  )
} 