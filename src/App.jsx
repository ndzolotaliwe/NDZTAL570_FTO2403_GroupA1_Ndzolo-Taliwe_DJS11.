import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorite';
import Layout from './components/Layout';
import Landing from './pages/Landing';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page route */}
        <Route path="/" element={<Landing />} />

        {/* Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
