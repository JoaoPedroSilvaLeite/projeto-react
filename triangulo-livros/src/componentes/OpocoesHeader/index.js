import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcao = styled.li`
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`;

const Opcoes = styled.ul`
    display: flex;
    list-style: none; /* Remove bullets da lista */
    margin: 0;
    padding: 0;
`;

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
    return(
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Link to={`/${texto.toLowerCase()}`} ><Opcao><p>{texto}</p></Opcao></Link>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader;
