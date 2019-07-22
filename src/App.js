import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import history from "./history";
import store from "./store";
import { Header } from './components/layouts';
import BookingWrapper from './views/BookingWrapper';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/booking" component={BookingWrapper} />
          </Switch>

        </Router>
      </div>

    </Provider>
  );
}

export default App;
