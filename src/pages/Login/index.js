import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  Button, Card, CardActions, CardContent, TextField, Typography
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Container from '../../components/Container';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider';

const Login = () => {
  let navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState("admin@email.com"); //admin@email.com
  const [senha, setSenha] = useState("admin"); //admin

  const signin = () =>
    auth.logar(email, senha)
      .then(({ data: { token } }) => {
        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('email', email);
        }
      })
      .then(() => {
        if (localStorage.getItem('token')) {
          navigate('/home');
        }
      })
      .catch((error) => {
        console.log(error.message);
        // localStorage.removeItem('token');
      });

  return (
    <Container>
      <Header title={"Estética Automotiva"} icon={"directions_car"} />
      <Container style={{ 'margin': '24px', alignItems: 'center' }}>
        <Container />

        <Card style={{ minWidth: '30%' }}>
          <CardContent style={{ padding: '24px' }}>
            <Typography variant="h5" component="div">
              Login
            </Typography>
            <br />

            <TextField
              id="email"
              label="E-mail"
              variant="filled"
              type='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{ display: 'flex', flex: 1 }}
            />
            <br />

            <TextField
              id="senha"
              label="Senha"
              variant="filled"
              type='password'
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              style={{ display: 'flex', flex: 1 }}
            />

          </CardContent>
          <CardActions style={{ padding: '24px' }}>
            <Button variant='contained' onClick={signin} style={{ width: '100%' }} >
              Logar
            </Button>
          </CardActions>
        </Card>

        <Container />
      </Container>
    </Container>
  );
}

export default Login;
