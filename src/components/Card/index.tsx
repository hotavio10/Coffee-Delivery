import { CoffeeImg, Container, Description, Price, Tags, Title } from "./styles";

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
  return (
    <Container>
      <CoffeeImg>
      <img src={coffee.image} alt={coffee.title} />
      </CoffeeImg>
      <div>

        <Tags>
          {coffee.tags.map(tag => <p>{tag}</p>)}
        </Tags>

        <Title>{coffee.title}</Title>

        <Description>{coffee.description}</Description>

        <Price>
           <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
      </div>
    </Container>
  )
}