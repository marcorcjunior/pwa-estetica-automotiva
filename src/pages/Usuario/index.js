import './index.css';
import { useState } from 'react';
import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';

import Container from '../../components/Container';
import Header from '../../components/Header';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const styles = {
    customInput: {
        display: 'flex',
        flex: 1,
        margin: '8px',
        marginLeft: '0px'
    }
}

const Usuario = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const [alert, setAlert] = useState(false);
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [documento, setDocumento] = useState('');

    const newId = Number.parseInt(searchParams.get('position')) + 1;

    const onFormSubmit = (usuario) =>
        navigate(`/home?${new URLSearchParams(usuario).toString()}`);

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
                                    id="nomeCompleto"
                                    label="Nome completo"
                                    variant="filled"
                                    style={styles.customInput}
                                    value={nomeCompleto}
                                    onChange={({ target: { value } }) => setNomeCompleto(value)}
                                />
                                <TextField
                                    id="cpf"
                                    label="CPF"
                                    variant="filled"
                                    style={styles.customInput}
                                    value={documento}
                                    onChange={({ target: { value } }) => setDocumento(value)}
                                />
                            </Container>

                            <br />

                            <Button variant='contained' onClick={() => {
                                if (newId && nomeCompleto && documento) {
                                    return onFormSubmit({ id: newId, nomeCompleto, documento });
                                }
                                return setAlert(true);
                            }}>
                                Adicionar
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

export default Usuario;