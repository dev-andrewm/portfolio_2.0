import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/header/Header';

import Sobre from './components/pages/sobre/Sobre';
import { PageFooter } from './components/layout/footer/Styles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Sobre />}></Route>
        <Route path='/aboutme' element={<Sobre />}></Route>
        <Route path='/contact'></Route>
        <Route path='/projects'></Route>
        <Route path='/skills'></Route>
      </Routes>
      <PageFooter />
    </BrowserRouter>
  );
}

export default App;
