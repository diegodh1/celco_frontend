import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Login from './components/login';
import Home from './components/home';

const Root = (
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Redirect from="/" to="/login" />
    </Switch>
    </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
