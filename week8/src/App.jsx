
import styled from 'styled-components'
import Header from './component/Header.jsx'
import Body from './component/Body';
import Footer from './component/Footer.jsx';

const App = () => {
  return (
    <Container> 
      <CardBox> 
        <Header /> 
        <Body /> 
        <Footer /> 
      </CardBox> 
    </Container>
  )
}

export default App;

const Container = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  min-height: 100vh; 
  background: #f9fafb;
`
const CardBox = styled.div`
  background: white; 
  border-radius: 20px; 
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`