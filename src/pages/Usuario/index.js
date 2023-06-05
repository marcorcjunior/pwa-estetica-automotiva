import './index.css';
import { useEffect, useState } from 'react';
import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';

import Container from '../../components/Container';
import Header from '../../components/Header';
import api from '../../utils/api';

const styles = {
    customInput: {
        display: 'flex',
        flex: 1,
        margin: '8px',
        marginLeft: '0px'
    }
}

const Usuario = () => {
    const [alert, setAlert] = useState(false);

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const getUsuarioLogado = () => api.get(`/usuarios/find`, { params: { email: localStorage.getItem('email') } });

    const updateUsuarioLogado = () => api.put(`/usuarios/update/${id}`, { nome, email, senha });

    const onPressUpdate = () => updateUsuarioLogado()
        .then(() => {
            console.log('Atualizado');
        });

    useEffect(() => {
        getUsuarioLogado()
            .then(({ data }) => {
                setId(data[0]._id);
                setNome(data[0].nome);
                setEmail(data[0].email);
                setSenha(data[0].senha);
            })
            .catch((error) => {
                setAlert(true);
            })
    }, []);

    return (
        <>
            <Container>
                <Header title={"Estética Automotiva"} goBack />
                <Container style={{ 'margin': '24px', alignItems: 'center' }}>

                    <Typography variant="h4" component="div">
                        Meus dados
                    </Typography>
                    <br />

                    <form action='#' style={{ minWidth: '45%' }}>

                        <div>
                            <Container>
                                <TextField
                                    id="nomeCompleto"
                                    label="Nome completo"
                                    variant="filled"
                                    style={styles.customInput}
                                    value={nome}
                                    onChange={({ target: { value } }) => setNome(value)}
                                />
                                <TextField
                                    disabled
                                    id="email"
                                    label="Email"
                                    variant="filled"
                                    style={styles.customInput}
                                    value={email}
                                    onChange={({ target: { value } }) => setEmail(value)}
                                />
                            </Container>

                            <br />

                            <Button variant='contained' onClick={onPressUpdate}>
                                Atualizar
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