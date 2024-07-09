import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LayoutDash from '../components/Dashboard/LayoutDash';
import Inicio from '../components/Dashboard/Inicio';
import { AuthProvider } from '../context/AuthProvide.jsx'; 
import Layout from '../components/Public/Layout'; 
import Login from '../components/Public/Login';
import CerrarSesion from '../components/Dashboard/CerrarSesion';
import Turbiedad from '../components/Dashboard/Turbiedad'; 
import Turbiedad2 from '../components/Dashboard/Turbiedad2';
import Color from '../components/Dashboard/Color';
import Color2 from '../components/Dashboard/Color2';


const Routing = () => {
  return (
    <BrowserRouter>    
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/dashboard" element={<LayoutDash />}>
            <Route index element={<Inicio />} />
            <Route path="Planta1/Turbiedad" element={<Turbiedad/>}/>
            <Route path="Planta1/Color" element={<Color/>}/>
            <Route path="Planta2/Turbiedad2" element={<Turbiedad2/>}/>
            <Route path="Planta2/Color2" element={<Color2/>}/>
            <Route path="Cerrar" element={<CerrarSesion />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routing;
