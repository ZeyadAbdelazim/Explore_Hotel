import React,{Component} from 'react'; 
import Navbar from './Component/Navbar'
import {BrowserRouter,NavLink,Route,Routes} from 'react-router-dom';
import Home from './Component/Home';
import Bus from './Component/Bus';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Hotel from './Component/Hotel';


import './App.css';

class App extends Component{
  render(){
  return (

  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" exact element={<Home/>}></Route>
  <Route path="/bus" exact element={<Bus/>}></Route>
  <Route path="/hotel" exact element={<Hotel/>}></Route>

  <Route path="/contact" exact element={<Contact/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>  
  );

}}

export default App;
