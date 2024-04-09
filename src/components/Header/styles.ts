import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.section`
  max-width: 1160px;
  padding: 32px 0px;
  margin: 0 200px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nav = styled.header`
  display: flex;

    div {
      ${mixins.fonts.textS};
      font-weight: bold;
      color:  ${({ theme }) => theme.colors['yellow-dark']};
      background-color:${({ theme }) => theme.colors['yellow-light']};
      border-radius: 15%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;
      top: 20px;
      right: 0px;
      transform: translate(50%, -50%);
    }
`