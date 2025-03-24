import logo from './logo.svg';
import './App.css';
import Bilal from './components/Bilal';
import "./components/Stylee.css"
import PasswordLogic from './components/PasswordLogic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">




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
