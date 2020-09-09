import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar.js';
// import Halaman from './Component/halaman.js';
import {Switch, Route} from 'react-router-dom';
import Home from './page/home'
import Laporan from './page/laporan'
import Data from './page/data'
import Login from './page/login'
import Register from './page/register'


class App extends Component{
  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/laporan' component={Laporan}/>
          <Route path='/data' component={Data}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </div>
    );
  }
}
export default App;
