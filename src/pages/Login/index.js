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

const Login = () => {
  let navigate = useNavigate();

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

            <TextField id="email" label="E-mail" variant="filled" style={{ display: 'flex', flex: 1 }} />
            <br />

            <TextField id="senha" label="Senha" variant="filled" style={{ display: 'flex', flex: 1 }} />

          </CardContent>
          <CardActions style={{ padding: '24px' }}>
            <Button variant='contained' onClick={() => navigate('/home')} style={{ width: '100%' }} >
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
