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
      <img src={coffee.image} alt={coffee.title} />
      <div>
        {coffee.tags.map(tag => <p>{tag}</p>)}
        
        <h2>{coffee.title}</h2>
        <p>{coffee.description}</p>
        <p> R${coffee.price.toFixed(2)}</p>
      </div>
    </section>
  );
}