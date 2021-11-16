import React from 'react'
import "./styles.css";
import Display from "./components/displayComonents/Display";
import Home from './components/homeComponents/home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Library from './components/Library';
import Login from './components/login';

export default function App() {
    return (
            <Router>
              <div className="App">
                  <Routes> 
                    <Route path="/" element={<Home/>}/>
                    <Route path="/display" element={<Display/>}/>
                    <Route path="/library" element={<Library/>}/>
                    <Route path="/login" element={<Login/>}/>
                  </Routes>
              </div>             
           </Router>
      );
}
