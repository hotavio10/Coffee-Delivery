import { Container, Header, PageTitle, MainContainer, Tab, TableHeader } from "./style"
export function Home() {
  
  return(
    <Container >
      <Header>
        <PageTitle>
          <div>DASHBOARD</div>
        </PageTitle>
      </Header>

        <MainContainer>
            <Tab>
              <TableHeader>
               <div> Encontre o café perfeito para qualquer hora do dia. </div>
              </TableHeader>
            </Tab>
        </MainContainer>

        <div>teste</div>
    </Container>
  )
}