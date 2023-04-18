import React from 'react';
import './Styles/App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import Administration from './pages/Administration';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import CreateUserAndGuild from './pages/CreateUserAndGuild';
import CreateUserAndFindGuild from './pages/CreateUserAndFindGuild';

function App() {
  return (
    <main className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/createuser" element={<CreateUser/>}/>
          <Route path="/create-user-and-guild" element={<CreateUserAndGuild/>}/>
          <Route path="/create-user-find-guild" element={<CreateUserAndFindGuild/>}/>
          <Route path="/administration" element={<Administration/>}/>
          <Route path="/tableau-de-bord" element={<DashBoard/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
