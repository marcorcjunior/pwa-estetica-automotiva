import './index.css';

import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Header from '../../components/Header';
import Container from '../../components/Container';
// import ListItem from '../../components/ListItem';
// import FormUsuario from '../FormUsuario';
import { Fab, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

const Home = () => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const nomeCompleto = searchParams.get('nomeCompleto');
  const cpf = searchParams.get('documento');

  const [listaClientes, setListaClientes] = useState([
    { id: 1, nomeCompleto: 'Usuario teste 1', cpf: '123.456.789-12' },
    { id: 2, nomeCompleto: 'Usuario teste 2', cpf: '123.456.789-12' },
    { id: 3, nomeCompleto: 'Usuario teste 3', cpf: '123.456.789-12' },
    { id: 4, nomeCompleto: 'Usuario teste 4', cpf: '123.456.789-12' },
    { id: 5, nomeCompleto: 'Usuario teste 5', cpf: '123.456.789-12' },
  ]);

  useEffect(() => {
    if (id) {
      setListaClientes([
        ...listaClientes,
        { id, nomeCompleto, cpf }
      ]);
    }
  }, [id]);

  return (
    <>
      <Container>
        <Header title={"Estética Automotiva"} icon={"directions_car"} />
        <Container style={{ 'margin': '24px', alignItems: 'center' }}>

          <Typography variant="h4" component="div">
            Lista de Clientes
          </Typography>
          <br />

          <Container>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      ID
                    </TableCell>
                    <TableCell align="center">
                      Nome Completo
                    </TableCell>
                    <TableCell align="right">
                      CPF
                    </TableCell>
                    <TableCell align="right">
                      Ações
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listaClientes.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {row.nomeCompleto}
                      </TableCell>
                      <TableCell align="right">
                        {row.cpf}
                      </TableCell>

                      <TableCell align="right">
                        <IconButton
                          color="primary"
                          aria-label="Atualizar registro"
                          onClick={() => navigate(`/cliente/${row.id}`)}
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>

        </Container>
      </Container>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', bottom: '48px', right: '48px' }}
        onClick={() => navigate(`/cliente?position=${listaClientes.length}`)}
      >
        <AddIcon />
      </Fab>

    </>
  );
}

export default Home;
