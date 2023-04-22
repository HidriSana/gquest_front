import React from 'react';
import './Styles/App.scss';
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import Administration from './pages/Administration';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import CreateUserAndGuild from './pages/CreateUserAndGuild';
import CreateUserAndFindGuild from './pages/CreateUserAndFindGuild';
import Unauthorized from './pages/Unauthorized';
import PendingRequest from './pages/PendingRequest';
import Layout from './components/Layout';
import authValidators from './components/RequireAuth';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
        <Routes>
          <Route path="/" element = {<Layout/>}>
            {/*Unprotected routes*/}
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/createuser" element={<CreateUser/>}/>
            <Route path="/create-user-and-guild" element={<CreateUserAndGuild/>}/>
            <Route path="/create-user-find-guild" element={<CreateUserAndFindGuild/>}/>
            <Route path="/unauthorized" element={<Unauthorized/>}/>
            <Route path="/pending-request" element={<PendingRequest/>}/>
            
          {/*Protected routes */}
            <Route element={<authValidators.RequireAuth/>}> 
              <Route path="/tableau-de-bord" element={<DashBoard/>}/>
            </Route>
            <Route element={<authValidators.RequireAdmin/>}>
              <Route path="/administration" element={<Administration/>}/> 
            </Route>
          </Route>
          
        </Routes>
  )
}

export default App;
