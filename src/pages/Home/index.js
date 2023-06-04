import './index.css';

import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import Header from '../../components/Header';
import Container from '../../components/Container';

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <Container>
        <Header title={"Estética Automotiva"} exit />
        <Container style={{ 'margin': '24px', alignItems: 'flex-start' }}>

          <Typography variant="h4" component="div">
            Home
          </Typography>
          <br />

          <Container row style={{ width: '100%', justifyContent: 'space-around' }}>
            <Card className='margin-not-left' sx={{ flex: 1 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://solutudo-cdn.s3-sa-east-1.amazonaws.com/prod/adv_files/5d2f2382-c82c-4537-b1c6-0cacac1e0eb7/a264db2f-590d-4ce5-9028-0c4266d5c85b.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Clientes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lista declientes da Estética Automotiva
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => navigate('/clientes')}>Ver lista</Button>
              </CardActions>
            </Card>

            <Card className='margin-not-left' sx={{ flex: 1 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://jetfilm.com.br/blog/wp-content/uploads/2021/03/detail-e-estetica-automotiva-sao-paulo.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Serviços
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lista de serviços disponiveis na Estética Automotiva
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => navigate('/clientes')}>Ver lista</Button>
              </CardActions>
            </Card>

          </Container>

        </Container>
      </Container>
    </>
  );
}

export default Home;
