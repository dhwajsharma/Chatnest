import { Avatar } from '@material-ui/core'
import { AccessTime, HelpOutline, Search } from '@material-ui/icons'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                />
                <AccessTime />
            </HeaderLeft>

            <HeaderSearch>
                <Search />
                <input placeholder="Search" />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutline />
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--dark-color);
    color: white;
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
        cursor: pointer;
    }
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover{
        opacity: 0.8; 
    }
`
const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #3D3D3D;
    text-align: center;
    display: flex;
    padding: 0 50px;    
    color: gray;
    border: 1px solid solid;

    >input {
        background-color:transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: none;
        color: white;
    }
`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
        cursor: pointer;    
    }
`