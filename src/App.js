import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import HomePage from './components/HomePage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route exact path='/nextPage' element={<AddUser/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
