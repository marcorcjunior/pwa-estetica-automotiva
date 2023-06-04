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

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://solutudo-cdn.s3-sa-east-1.amazonaws.com/prod/adv_files/5d2f2382-c82c-4537-b1c6-0cacac1e0eb7/a264db2f-590d-4ce5-9028-0c4266d5c85b.jpg"
              title="green iguana"
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
              <Button size="small">Ver lista</Button>
            </CardActions>
          </Card>

        </Container>
      </Container>
    </>
  );
}

export default Home;
