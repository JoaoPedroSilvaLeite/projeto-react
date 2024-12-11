import Logo from '../Logo'
import OpcoesHeader from '../OpocoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: white;
    justify-content: center;
    display: flex;
}
`

//código omitido

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header