import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import HomePage from './components/HomePage';

=======
import Bilal from './components/Bilal';
import "./components/Stylee.css"
import PasswordLogic from './components/PasswordLogic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> 0688b426662a8c1380cc607d95ac020c578b121e

const App = () => {
  return (
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
    </div>
  );
};

export default App;
