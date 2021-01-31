import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from 'context/Auth/AuthProvider';
import Home from 'components/pages/Home';
import Candidate from "./components/pages/Candidate";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail' component={Candidate} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;