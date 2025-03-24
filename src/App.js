import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import DataAdd from './components/DataAdd';

=======
<<<<<<< HEAD
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import HomePage from './components/HomePage';
>>>>>>> 2d5aa37466f64b63b3282eb3a21aa15df08073bf

=======
import Bilal from './components/Bilal';
import "./components/Stylee.css"
import PasswordLogic from './components/PasswordLogic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> 0688b426662a8c1380cc607d95ac020c578b121e

const App = () => {
  return (
<<<<<<< HEAD
    <div className="App">
    <h1>  junaid </h1>
   <DataAdd/>
=======
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route exact path='/nextPage' element={<AddUser/>}></Route>
      </Routes>
      </BrowserRouter>




<BrowserRouter>
<Routes>
  <Route path='/' element={<Bilal/>}/>
  <Route path='/hideshow' element={<PasswordLogic/>}/>
</Routes>

</BrowserRouter>
>>>>>>> 2d5aa37466f64b63b3282eb3a21aa15df08073bf
    </div>
  );
};

export default App;
