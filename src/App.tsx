import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from 'context/Auth/AuthProvider';
import Home from 'components/pages/Home';
import Candidate from "./components/pages/Candidate";
import PageNotFound from "./components/atoms/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail' component={Candidate} />
          <Route component={PageNotFound} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;