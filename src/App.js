import './App.css';

import { useState } from 'react';

import Header from './components/Header';
import Container from './components/Container';
import ListItem from './components/ListItem';
import FormUsuario from './components/FormUsuario';

const App = () => {
  const [listaClientes, setListaClientes] = useState([]);

  const onFormSubmit = ({ nomeCompleto, documento }) =>
    setListaClientes([...listaClientes, { nomeCompleto, documento }]);

  return (
    <Container>
      <Header title={"Estética Automotiva"} icon={"directions_car"} />
      <Container style={{ 'margin': '24px' }}>

        <FormUsuario onFormSubmit={onFormSubmit} />

        {listaClientes.map(
          ({ nomeCompleto, documento }, key) =>
            <ListItem key={key} title={nomeCompleto} description={documento} />
        )}

      </Container>
    </Container>
  );
}

export default App;
