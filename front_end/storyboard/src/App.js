import React from 'react'
import "./styles.css";
import Display from "./components/displayComonents/Display";
import Home from './components/homeComponents/home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Library from './components/library';
import Login from './components/login';
import SignUp from './components/SignUp';
import View from './components/view';
import Tutorial from './tutorial'


export default function App() {
    return (
            <Router>
              <div className="App">
                  <Routes> 
                    <Route path="/" element={<Home/>}/>
                    <Route path="/display" element={<Display/>}/>
                    <Route path="/library" element={<Library/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/users" element={<SignUp/>}/>
                    <Route path="/view/:id" element={<View/>}/>
                    <Route path="/tutorial" element={<Tutorial/>}/>   
                  </Routes>
              </div>             
           </Router>
      );
}
