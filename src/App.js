import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PostApi from './components/PostApi';
import Ali from './components/Ali';

const App = () => {
  return (
    <BrowserRouter>
      <Ali /> 
      <Routes>
        <Route path="/add-user" element={<PostApi />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
