import './index.css';
import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

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

const FormUsuario = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [documento, setDocumento] = useState('');

    const newId = Number.parseInt(searchParams.get('position')) + 1;

    const onFormSubmit = (usuario) =>
        navigate(`/home?${new URLSearchParams(usuario).toString()}`);

    return (
        <>
            <Container>
                <Header title={"Estética Automotiva"} icon={"directions_car"} />
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

                            <Button variant='contained' onClick={() => onFormSubmit({ id: newId, nomeCompleto, documento })}>
                                Adicionar
                            </Button>

                        </div>
                    </form>
                </Container>
            </Container>
        </>
    );
}

export default FormUsuario;