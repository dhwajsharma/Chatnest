import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components'
import Chat from './components/Chat';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoading>
        <h1>Chatnest</h1>
        <Spinner
          name="ball-spin-fade-loader"
          color="white"
          fadeIn="none"
        />
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route exact path="/" >
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}


export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
const AppLoading = styled.div`
 background-color: #242424;
  color: white;
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1{
    padding: 20px;
    margin-bottom: 40px;
  }
`