import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../views/page/home';
import SmallFooter from '../components/smallFooter';
// import Header from '../components/header';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/feedback" component={Contact} /> */}
        </Switch>
        <SmallFooter />
      </div>
    </BrowserRouter>
  );
};

export default AppRoute;