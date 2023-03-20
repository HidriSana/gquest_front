import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import Administration from './pages/Administration';
import TableauDeBord from './pages/TableauDeBord';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createuser" element={<CreateUser/>}/>
        <Route path="/administration" element={<Administration/>}/>
        <Route path="/tableau-de-bord" element={<TableauDeBord/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
