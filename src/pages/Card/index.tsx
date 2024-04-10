import { CurrencyDollar, MapPin } from "@phosphor-icons/react";



import { AdressContainer, AdressForm, AdressHeading, CoffeeCard, CoffeeInfo, Container, InfoContainer, OrderContainer, OrderTotal, PaymentContainer, PaymentHeading } from "./styles";


export function Card() {
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>



        <AdressContainer>


          <AdressHeading>
            <MapPin size={22} />

            <div>
              <span>Endereço de Entrega</span>

              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </div>
          </AdressHeading>

          <AdressForm>

          </AdressForm>
        </AdressContainer >

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
        </PaymentContainer>

      </InfoContainer>

      <OrderContainer>
        <h2>Cafés Selecionados</h2>

        <OrderTotal>
          
              <CoffeeCard>
                <div>
                  <img src="{coffee.image}" alt="{coffee.title}" />
                  <div>
                  

                    <CoffeeInfo>
                    
                    </CoffeeInfo>
                  </div>
                </div>
              </CoffeeCard>
          
        </OrderTotal>
      </OrderContainer>
    </Container>
  )
}