import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState();

  const handleLogin = (token) => {
    setToken(token);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/dashboard">
            <Dashboard token={token} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;