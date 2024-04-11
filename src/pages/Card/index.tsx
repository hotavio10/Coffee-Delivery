import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Radio, Trash } from '@phosphor-icons/react';

import { coffees } from '../../../data.json'
import { useCard } from "../../hooks/useCard";
import { QuantityInput } from '../../components/Form/QuantityInput';

import { AddressContainer, AddressForm, AddressHeading, CoffeeCard, CoffeeInfo, Container, InfoContainer, OrderContainer, OrderTotal, PaymentContainer, PaymentHeading, PaymentOptions } from './styles';


export function Card() {
  const {
    card,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,

  } = useCard()

  const coffeesInCard = card.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)
    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }
    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }
  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }
  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>


        <AddressContainer>
          <AddressHeading>
            <MapPin size={22} />

            <div>
              <span>Endereço de Entrega</span>

              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </div>

          </AddressHeading>
          <AddressForm>

          </AddressForm>

        </ AddressContainer>

        <PaymentContainer>
          <PaymentHeading>
            <CurrencyDollar size={22} />

            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar
              </p>
            </div>
          </PaymentHeading>

          <PaymentOptions>
            <div>
              <Radio>
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>

              <Radio>
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio>
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </div>
          </PaymentOptions>


        </PaymentContainer>
      </InfoContainer>

      <OrderContainer>
        <h2>Cafés Selecionados</h2>

        <OrderTotal>

          <CoffeeCard>
            <div>
              <img src="{coffee.image}" alt="{coffee.title}" />
              <div>
                <span>{coffeesInCard.title}</span>


                <CoffeeInfo>
                  <QuantityInput
                    quantity={coffees.quantity}
                    incrementQuantity={() => handleItemIncrement(coffees.id)}
                    decrementQuantity={() => handleItemDecrement(coffees.id)}
                  />

                  <button onClick={() => handleItemRemove(coffees.id)}>
                    <Trash />
                    <span>Remover</span>
                  </button>
                  </CoffeeInfo>
                
              </div>
            </div>
            </CoffeeCard>

          </OrderTotal>
        </OrderContainer>
    </Container>
  )
}