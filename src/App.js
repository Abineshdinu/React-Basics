import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Ternaryy from './operators/Ternaryy';
import Logical from './operators/Logical';
import Todo from './Todo/Todo';

function App() {
    
  return (
    <Router>
    <Navbar/>
    <Routes>
     <Route path="/Todo" Component={Todo}></Route>
      <Route path="/Ternaryy" Component={Ternaryy}></Route>
      <Route path="/Logical" Component={Logical}></Route>
    </Routes>
    </Router>
  );
}




export default App;
