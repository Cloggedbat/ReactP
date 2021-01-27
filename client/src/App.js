import React from 'react';
import HeroSlider from './components/swipIMG';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Portfolio from './pages/portflolio';
import App2 from './components/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 px-0">
              <Header />
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>
      <GlobalProvider>
        <div className="App">
          <Switch>
            <Route exact path='/' component={App2} />
            <Route exact path='/portfolio' component={Portfolio} />

          </Switch>

        </div>


      </GlobalProvider>
    </Router >
  );
}


export default App;
