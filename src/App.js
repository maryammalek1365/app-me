import react from "react";
import {useState} from "react"
import "./App.css"
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route,Link,Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import {Contact} from "./pages/Contact";
import { Nav } from "./pages/Nav";

function App(){
    
    return(
        <div className="App">
    <Router>
        <div> sarvin style </div>
    <Nav/>
        <Routes>
   <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>not found</div>} />
        </Routes>
        <div>this is footer</div>
        </Router>        
        
   
       </div>
    );
 }
export default App;