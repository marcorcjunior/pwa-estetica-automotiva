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
import api from '../../utils/api';

const ListaClientes = () => {
  let navigate = useNavigate();
  // const [searchParams] = useSearchParams();

  // const id = searchParams.get('id');
  // const nomeCompleto = searchParams.get('nomeCompleto');
  // const cpf = searchParams.get('documento');

  // nome, email, telefone

  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    getListaClientes();
  }, []);

  const getListaClientes = () =>
    api.get('/clientes/find')
      .then(({ data }) => {
        setListaClientes(Object.values(data));
      })
      .catch((error) => {
        setListaClientes([]);
      });

  const deletarClienteId = (id) =>
    api.delete(`/clientes/delete/${id}`)
      .then((response) => {
        getListaClientes();
      })
      .catch((error) => {

      });

  const alterarCliente = (cliente) => navigate(`/cliente/${cliente._id}`);

  return (
    <>
      <Container>
        <Header title={"Estética Automotiva"} goBack exit />
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
                    <TableCell align="left">Nome Completo</TableCell>
                    <TableCell align="left">E-mail</TableCell>
                    <TableCell align="left">Telefone</TableCell>
                    <TableCell align="center">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listaClientes.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{row.nome}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.telefone}</TableCell>

                      <TableCell align="center">
                        <IconButton
                          color="primary"
                          aria-label="Atualizar registro"
                          onClick={() => alterarCliente(row)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="error"
                          aria-label="Excluir registro"
                          onClick={() => deletarClienteId(row._id)}
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
        onClick={() => navigate(`/cliente`)}
      >
        <AddIcon />
      </Fab>

    </>
  );
}

export default ListaClientes;
