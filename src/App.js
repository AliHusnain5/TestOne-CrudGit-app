<<<<<<< HEAD
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PostApi from './components/PostApi';
import Ali from './components/Ali';
=======
import logo from './logo.svg';
import './App.css';
import Bilal from './components/Bilal';
import "./components/Stylee.css"
import PasswordLogic from './components/PasswordLogic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> 8d6d2848f1c910b7051de60873b815a02d3d0fff

const App = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Ali /> 
      <Routes>
        <Route path="/add-user" element={<PostApi />} />
      </Routes>
    </BrowserRouter>
=======
    <div className="App">




<BrowserRouter>
<Routes>
  <Route path='/' element={<Bilal/>}/>
  <Route path='./hideshow' element={<PasswordLogic/>}/>
</Routes>

</BrowserRouter>
    </div>
>>>>>>> 8d6d2848f1c910b7051de60873b815a02d3d0fff
  );
};

export default App;
