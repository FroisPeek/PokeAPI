import Logo from '../logo'
import styled from 'styled-components'

const HeaderContainer = styled.header `
  background-color: #FFF;
  display: flex;
  justify-content: center;
`


function Header(){
    return (
      <HeaderContainer>
        <Logo/>
      </HeaderContainer>
    )
}

export default Header
