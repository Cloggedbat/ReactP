import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import App2 from './pages/Homepage';
import contacts from './pages/contactAj';
import Portfolio from './pages/profile';
import Navbar from './components/Navbar';
import HeroSlider from './components/Navbar/swiper/myIMG';
import Header from './components/Navbar/swiper/header';
// import SwiperCore, { Swiper } from 'swiper'
// import './swiper/swiper-bundle.css'
// we may not use this
// import 'styles.css'

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />
        <div className="App">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 px-0">
                <HeroSlider />
              </div>
            </div>
          </div>
        </div>

        <div className="App">
          <Switch>
            <Route exact path='/' component={App2} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={contacts} />
          </Switch>

        </div>


      </GlobalProvider>
    </Router>
  );
}


export default App;
