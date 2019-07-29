import React from 'react';
import MainPage from './components/MainPage/MainPage';
import { Router, Switch, Route } from 'react-router-dom';
import history from './app.history';
import './App.css';

function App() {
   return (
      <div className="App">
         <Router history={history}>
            <Switch>
               <Route exact path="/" component={MainPage} />
               <Route exact path="/Songs" component={MainPage} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
