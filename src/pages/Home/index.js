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
import DeleteIcon from '@mui/icons-material/Delete';

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
        <Header title={"Estética Automotiva"} exit />
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
                    <TableCell align="left">ID</TableCell>
                    <TableCell align="left">Nome Completo</TableCell>
                    <TableCell align="left">CPF</TableCell>
                    <TableCell align="center">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listaClientes.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.nomeCompleto}</TableCell>
                      <TableCell>{row.cpf}</TableCell>

                      <TableCell align="center">
                        <IconButton
                          color="primary"
                          aria-label="Atualizar registro"
                          onClick={() => navigate(`/cliente/${row.id}`)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="error"
                          aria-label="Excluir registro"
                          onClick={() => navigate(`/cliente/${row.id}`)}
                        >
                          <DeleteIcon />
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
