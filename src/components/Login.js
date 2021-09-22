import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = () => {
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <h1>Chat App</h1>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: var(--dark-color);
    height: 100vh;
    display: grid;
    place-items: center;
    color: white;
`

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);

    > button{
        margin-top: 50px;
        text-transform: inherit !important;
        background-color:#5855F3 !important;
        color: white;

    }
`