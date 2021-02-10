import React from 'react';
import HeroSlider from './components/swipIMG';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Portfolio from './pages/portflolio';
import Footer from "./components/Footer";
import contacts from "./pages/contactAj"
import App2 from './pages/Homepage';

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
      <br />
      <GlobalProvider>
        <div className="App">
          <Switch>
            <Route exact path='/' component={App2} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contacts' component={contacts} />
          </Switch>

        </div>
      </GlobalProvider>
      <Footer />

    </Router >
  );
}


export default App;
