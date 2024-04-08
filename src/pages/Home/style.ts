 import styled from 'styled-components';

 export const Container = styled.div`
 background: #f8f8f8;
`

export const Header = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`
export const PageTitle = styled.span`
background: red;
 color: #000;
 margin: 46px auto 41px 50px;
 font-family: Roboto;
 font-size: 20px;
 font-weight: 400;
`


export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  overflow: auto;
  max-height: 88vh;
`

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TableHeader = styled.div`
  color: #000000;
  font-size: 25px;
  margin: 25px auto 22px 26px;
`