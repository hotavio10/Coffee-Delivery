import { useState } from "react";
import { CoffeeImg, Container, Control, Description, Order, Price, Tags, Title } from "./styles";

type CardProps = {
  coffee: {
    id: string,
    title: string,
    description: string,
    tags: string[],
    price: number,
    image: string,
  }
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(0)


  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <Container>
      <CoffeeImg>
        <img src={coffee.image} alt={coffee.title} />
      </CoffeeImg>


      <Tags>
        
        {coffee.tags.map(tag => <span>{tag}</span>)}
        
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>


        </Order>
      </Control>
    </Container>
  )
}