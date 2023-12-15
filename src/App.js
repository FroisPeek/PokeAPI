import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
.li {
    list-style: none;
}
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa /> 
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
