import React from "react";
import { useState, createContext } from "react"
import "./App.css"
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Nav } from "./pages/Nav";
import { Profile } from "./pages/Profile";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SubmitForm } from "./Component/SubmitForm"


export const profileContext = createContext();

function App() {
  const [username, setUsername] = useState("sarvin")
  return (
    <div className="App">



      <SubmitForm />




    </div>
  );
}
export default App;