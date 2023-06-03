import './index.css';
import { useState } from 'react';

import Container from '../Container';
import InputLabel from '../InputLabel';

const FormUsuario = ({ onFormSubmit }) => {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [documento, setDocumento] = useState('');

    return (
        <form action='#'>
            <h2>Formulario de adição de cliente</h2>
            <div>
                <Container row={true}>
                    <InputLabel description={"Nome completo"} value={nomeCompleto} setValue={setNomeCompleto} />
                    <InputLabel description={"CPF"} type={"number"} value={documento} setValue={setDocumento} />
                </Container>

                <button type="button" onClick={() => onFormSubmit({ nomeCompleto, documento })}>
                    Adicionar
                </button>

            </div>
        </form>
    );
}

export default FormUsuario;