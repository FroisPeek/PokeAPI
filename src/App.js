import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa/doidera';

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
.li {
    list-style: none;
}
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
