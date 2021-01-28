import React from 'react';
import BaseLayout from "./components/organisms/BaseLayout";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'components/pages/Home';
import Candidate from "./components/pages/Candidate";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <BaseLayout>
            <Route exact path='/' component={Home} />
            <Route exact path='/detail' component={Candidate} />
          </BaseLayout>
        </Switch>
    </BrowserRouter>
  )
}

export default App;