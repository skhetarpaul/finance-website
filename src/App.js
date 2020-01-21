import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Carousel from './components/carousel'
import {carouselSlidesData} from './components/carousel'
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component= {Home}/>
      <Route exact path="/services" component= {Rooms}/>
      <Route exact path="/services/:slug" component= {SingleRoom}/>
      <Route exact path="/signup" component = {SignUp} />
      <Route exact path = "/testimonials" render = {(props) => <Carousel  slides={carouselSlidesData} {...props} />} />
      <Route component={Error}/>
    </Switch> 
    
    </>
  );
}

export default App;
