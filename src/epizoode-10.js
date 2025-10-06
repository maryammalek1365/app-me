import react from "react";
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



export const profileContext = createContext();

function App() {
  const [username, setUsername] = useState("sarvin")
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false }
    }
  })
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <profileContext.Provider value={{ username, setUsername }} >
          <Router>
            <div> sarvin style </div>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<div>not found</div>} />
            </Routes>
            <div>this is footer</div>
          </Router>
        </profileContext.Provider>
      </QueryClientProvider>
    </div>
  );
}
export default App;