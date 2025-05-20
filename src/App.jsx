
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import About from './emcommerce/About'
import Cartu from './emcommerce/Cartu'
import Catalogue from './emcommerce/Catalogue'
import Contact from './emcommerce/Contact'
import Loginned from './emcommerce/Loginned'
import Payment from './emcommerce/Payment'
import Registerr from './emcommerce/Registerr'

function App() {
  return (
    <Router>
      <div style={{ padding: '24px' }}>
        <nav style={{ marginBottom: '24px' }}>
          <Link to="/registerr" style={{ marginRight: '16px' }}>Register</Link>
          <Link to="/loginned" style={{ marginRight: '16px' }}>Login</Link>
          <Link to="/about" style={{ marginRight: '16px' }}>About</Link>
          <Link to="/catalogue" style={{ marginRight: '16px' }}>Catalogue</Link>
          <Link to="/cartu" style={{ marginRight: '16px' }}>Cart</Link>
          <Link to="/payment" style={{ marginRight: '16px' }}>Payment</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/registerr" element={<Registerr />} />
          <Route path="/loginned" element={<Loginned />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/cartu" element={<Cartu />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Loginned />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App




