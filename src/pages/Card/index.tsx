import { Fragment } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from '@phosphor-icons/react';

import { coffees } from '../../../data.json'
import { useCard } from "../../hooks/useCard";
import { QuantityInput } from '../../components/Form/QuantityInput';
import { TextInput } from '../../components/Form/TextInput'
import { Radio } from '../../components/Form/Radio';


import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartTotalInfo,
  CoffeeCard,
  CoffeeInfo,
  Container,
  InfoContainer,
  OrderContainer,
  OrderTotal,
  PaymentContainer,
  PaymentHeading,
  PaymentOptions
} from './styles';

type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}


export function Card() {
  const {
    card,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCard()

  /* adicionar produtos ao carrinho*/
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

  const totalItemsPrice = coffeesInCard.reduce((previousValue, currentItem) => {
    return (
      previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  /* validar formulários*/
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  /* verificação de preço do carrinho*/
  const selecionadoPaymentMethod = watch('paymentMethod')

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }
  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }
  function handleItemRemove(itemId: string) {
    removeItem(itemId)
  }

  /* mensagem ao tentar enviar o formulário sem itens */
  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (card.length === 0) {
      return alert('è preciso ter pelo menos um item no carrinho')
    }
  }
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />

              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>

            </AddressHeading>
            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
              />
              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                error={errors.street}
                {...register('street' )}
              />
              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                error={errors.cep}
                {...register('cep')}
              />
              <TextInput
                placeholder="Complemento"
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                error={errors.fullAddress}
                {...register('fullAddress')}
              />
              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />
              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                error={errors.city}
                {...register('city')}
              />
              <TextInput
                placeholder="UF"
                containerProps={{ style: { gridArea: 'state' } }}
                error={errors.state}
                {...register('state')}
              />
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
        </form>
      </InfoContainer>

      <OrderContainer>
        <h2>Cafés Selecionados</h2>



        <OrderTotal>

          {coffeesInCard.map((coffee) => (
            <Fragment key={coffee.id}>
              <CoffeeCard>
                <div>
                  <img src="{coffee.image}" alt="{coffee.title}" />
                  <div>
                    <span>{coffee.title}</span>


                    <CoffeeInfo>
                      <QuantityInput
                        quantity={coffee.quantity}
                        incrementQuantity={() => handleItemIncrement(coffee.id)}
                        decrementQuantity={() => handleItemDecrement(coffee.id)}
                      />

                      <button onClick={() => handleItemRemove(coffee.id)}>
                        <Trash />
                        <span>Remover</span>
                      </button>
                    </CoffeeInfo>
                  </div>
                </div>

                <aside>R$ {coffee.price?.toFixed(2)}</aside>
              </CoffeeCard>

            </Fragment>
          ))}


        </OrderTotal>
      </OrderContainer>
    </Container>
  )
}