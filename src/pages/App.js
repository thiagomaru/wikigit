import gitLogo from '../assets/pngwing.com.png';
import { Container } from './styles'

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='git hub logo'/>
    </Container>
  );
}

export default App;
