import { CoffeeImg, Description, Price, Tags, Title } from "./styles";

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
    <section>
      <CoffeeImg>
      <img src={coffee.image} alt={coffee.title} />
      </CoffeeImg>
      <div>

        <Tags>
          {coffee.tags.map(tag => <p>{tag}</p>)}
        </Tags>

        <Title>
          <h2>{coffee.title}</h2>
        </Title>

        <Description>
          <p>{coffee.description}</p>
        </Description>

        <Price>
          <p> R${coffee.price.toFixed(2)}</p>
        </Price>
      </div>
    </section>
  );
}