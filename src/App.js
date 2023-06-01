import './App.css';
import Container from './components/Container';
import ListItem from './components/ListItem';

function App() {
  return (
    <div className="container">
      <Container>
        <ListItem title="Hello world" description="Treinando react" />
        <ListItem title="Hello world" />
        <ListItem description="Treinando react" />
        <ListItem />
      </Container>
    </div>
  );
}

export default App;
