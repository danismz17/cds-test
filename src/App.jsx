import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './layouts/Sidebar/Sidebar';
import Dashboard from './layouts/Dashboard/Dashboard';
import SidebarMaxify from '../src/components/SidebarComponents/SidebarMaxify/SidebarMaxify';
import SidebarMinify from '../src/components/SidebarComponents/SidebarMinify/SidebarMinify';
import Home from './pages/Home/Home';
import Canales from './pages/Canales/Canales';
import Eventos from './pages/Eventos/Eventos';

function App() {
  const [isSidebarMaxify, setIsSidebarMaxify] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarMaxify(!isSidebarMaxify);
  };

  return (
    <Router>
      <div className="web-container">
        <Sidebar>
          {isSidebarMaxify ? (
            <SidebarMaxify toggleSidebar={toggleSidebar} />
          ) : (
            <SidebarMinify toggleSidebar={toggleSidebar} />
          )}
        </Sidebar>
        <Dashboard>
          <Routes>
            {/* ----Home---- */}
            <Route path="/home" element={<Home />} />

            {/* ----Servicios---- */}
            <Route path="/principal" element={<Canales />} />
            <Route path="/eventos" element={<Eventos />} />

            {/* ----Catalogo---- */}
            <Route path="/canales" element={<Canales />} />

            {/* ----Autorizaciones---- */}

            {/* ----Gestion del Portal---- */}

            {/* ----Gestion de Plataforma---- */}
          </Routes>
        </Dashboard>
      </div>
    </Router>
  );
}

export default App;
