import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Accueil from "./pages/Accueil"
import QRcodeNum from "./pages/QRcodeNum"
import Reference from "./pages/Reference"
import About from "./pages/About"
import Contact from "./pages/Contact"
import './index.css'
import CertificateResult from "./pages/CertificateResult"
function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/qrcode/:refNum" element={<QRcodeNum />} />
            <Route path="/ref" element={<Reference />} />
            <Route path="/certificate-result" element={<CertificateResult/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
