// Modulos/Dependencias
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// Componenentes
import './index.css';
import CartProvider from './context/CartContext';

import Home from './components/home/Home.js'
import NavBar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// WebVitals
import reportWebVitals from './reportWebVitals';

// Selector base de JS
const root = ReactDOM.createRoot(document.getElementById('root'));

// Aca se renderiza la app
root.render(
  <React.StrictMode>
 
 <CartProvider>

 <BrowserRouter>

   <NavBar/>
   <Routes>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/productos' element={<ItemListContainer/>}></Route>
    <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}></Route>
    <Route exact path='/nosotros' element={<AboutUs/>}></Route>
   </Routes>

 
 </BrowserRouter>

  <Footer></Footer>
 </CartProvider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
