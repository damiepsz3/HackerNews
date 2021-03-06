import React, { Component } from 'react';
import './Home.css';
import CreateLink from '../CreateLink';
import LinkList from '../LinkList';
import Header from '../Header';
import Login from '../Login';
import Search from '../Search';
import { Switch, Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/create' component={CreateLink}/>
            <Route exact path='/search' component={Search}/>
            <Route exact path='/' component={LinkList}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Home;
