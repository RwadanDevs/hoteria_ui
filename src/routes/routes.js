import'dotenv/config';
import React,{ Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Header from '../components/helpers/Header';
import Login from '../components/auth/login';
import AdminLogin from '../components/auth/admin';
import GuestHome from '../components/dashboard/Home';
import Cart from '../components/dashboard/cart';
import Order from '../components/dashboard/orders';
import NewItem from '../components/dashboard/createItem';
import Users from '../components/dashboard/Users';
import Socket from '../utils/webSocket';

class App extends Component {
  scrollUp = {background:'transparent',border:"3px solid orange",outline:"none"}
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Socket/>
          <Switch >
            <Route path='/' exact component={Login}/>
            <Route path='/Admin' component={AdminLogin}/>
            <Route path='/Dash' component={GuestHome}/>
            <Route path='/Cart' component={Cart}/>
            <Route path='/Orders' component={Order}/>
            <Route path='/Create' component={NewItem}/>
            <Route path='/users' component={Users}/>
          </Switch>
          <ScrollUpButton style={this.scrollUp} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
