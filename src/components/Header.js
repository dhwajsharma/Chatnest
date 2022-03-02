import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  const [logout, setLogout] = useState(null);
  const [channels] = useCollection(db.collection("rooms"));

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar alt={user?.displayName} src={user?.photoURL} />

        {!user ? (
          <LoginButton onClick={signIn}>Login</LoginButton>
        ) : (
          <LogoutButton onClick={() => auth.signOut()}>Logout</LogoutButton>
        )}

        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <Search />
        <input
          style={{ padding: "10px", fontSize: "1.3rem" }}
          placeholder="Search"
        />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--dark-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #3d3d3d;
  text-align: center;
  align-items: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;
  }
`;

const LogoutButton = styled.div`
  cursor: pointer;
  margin-left: auto;
`;

const LoginButton = styled.div`
  cursor: pointer;
  margin-left: auto;
`;
