import { useRouteError } from "react-router-dom";
import { Typography } from "@mui/material";

import Container from "../../components/Container";
import Header from "../../components/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <Header title={"Estética Automotiva"} icon={"directions_car"} />
      <Container style={{ 'margin': '24px', alignItems: 'center' }}>
        <Container />

        <Typography variant="h3" component="div">
          Oops!
        </Typography>
        <Typography variant="h4" component="div">
          Desculpe, ocorreu um erro inesperado.
        </Typography>

        <Typography variant="h5" component="div">
          404 - {error.statusText || error.message}
        </Typography>


        <Container />
      </Container>
    </Container>
  );
}