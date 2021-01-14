import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Homepage from './pages/Homepage';
import contacts from './pages/contactAj';
import Portfolio from './pages/profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />

        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/portfolio' component={Portfolio} />

            <Route exact path='/contact' component={contacts} />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}


export default App;
