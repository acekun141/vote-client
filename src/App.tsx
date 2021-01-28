import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'components/pages/Home';
import Candidate from "./components/pages/Candidate";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail' component={Candidate} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;