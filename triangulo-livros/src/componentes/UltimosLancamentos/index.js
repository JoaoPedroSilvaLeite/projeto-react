import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

const ImagemLivro = styled.img`
    max-width: 150px;
    height: auto;
    margin: 0 10px;

    @media (max-width: 768px) {
        max-width: 100px;
    }
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor={"#EB9B00"}
                tamanhoFonte={"36px"}
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.length > 0 ? (
                    livros.map((livro, index) => (
                        <ImagemLivro 
                            key={index} 
                            src={livro.src} 
                            alt={`Capa do livro ${livro.titulo || index}`} 
                        />
                    ))
                ) : (
                    <p>Nenhum lançamento disponível no momento.</p>
                )}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Livro Genérico"
                descricao="Descrição de um livro genérico"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;
