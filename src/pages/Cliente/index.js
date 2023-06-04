import './index.css';
import { useEffect, useState } from 'react';
import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';

import Container from '../../components/Container';
import Header from '../../components/Header';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import api from '../../utils/api';

const styles = {
    customInput: {
        display: 'flex',
        flex: 1,
        margin: '8px',
        marginLeft: '0px'
    }
}

const FormUsuario = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [alert, setAlert] = useState(false);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const getClienteById = () =>
        api.get(`/clientes/find/${id}`)
            .then(({ data }) => {
                setNome(data.nome);
                setEmail(data.email);
                setTelefone(data.telefone);
            })
            .catch((error) => {

            });

    const getClienteFull = () => ({
        nome,
        email,
        telefone
    });

    const updateCliente = () => {
        const cliente = getClienteFull();
        console.log(cliente);
    }

    const createCliente = () => {
        const cliente = getClienteFull();
        api.post('clientes/create', cliente)
            .then((resp) => {
                navigate(-1);
            })
            .catch((error) => {
                setAlert(true);
            });
    }

    useEffect(() => {
        if (id) {
            getClienteById();
        }
    }, []);

    // if (newId && nomeCompleto && documento) {
    //     return onFormSubmit({ id: newId, nomeCompleto, documento });
    // }
    // return setAlert(true);

    return (
        <>
            <Container>
                <Header title={"Estética Automotiva"} goBack />
                <Container style={{ 'margin': '24px', alignItems: 'center' }}>

                    <Typography variant="h4" component="div">
                        Formulario de {id ? 'edição' : 'adição'} de cliente
                    </Typography>
                    <br />

                    <form action='#' style={{ minWidth: '35%' }}>

                        <div>
                            <Container>
                                <TextField
                                    id="nome"
                                    label="Nome completo"
                                    variant="filled"
                                    style={styles.customInput}
                                    value={nome}
                                    onChange={({ target: { value } }) => setNome(value)}
                                />
                                <TextField
                                    id="email"
                                    label="E-mail"
                                    variant="filled"
                                    style={styles.customInput}
                                    value={email}
                                    onChange={({ target: { value } }) => setEmail(value)}
                                />
                                <TextField
                                    id="telefone"
                                    label="Telefone"
                                    variant="filled"
                                    style={styles.customInput}
                                    value={telefone}
                                    onChange={({ target: { value } }) => setTelefone(value)}
                                />
                            </Container>

                            <br />

                            <Button variant='contained' onClick={() => id ? updateCliente() : createCliente()}>
                                {id ? 'Alterar' : 'Adicionar'}
                            </Button>

                        </div>
                    </form>
                    <Snackbar open={alert} autoHideDuration={6000} onClose={() => setAlert(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert onClose={() => setAlert(false)} severity="error" sx={{ width: '100%' }}>
                            Todos os campos são obrigatorios!
                        </Alert>
                    </Snackbar>
                </Container>
            </Container>

        </>
    );
}

export default FormUsuario;