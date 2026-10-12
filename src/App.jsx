import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import Header from './components/organism/header.jsx';
import Footer from './components/organism/footer.jsx';
import Sinopsis from './pages/sinopsis.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/prueba-1" element={<Home />} />
        <Route path="/sinopsis/:id" element={<Sinopsis />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}