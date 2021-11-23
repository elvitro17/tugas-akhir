import { BrowserRouter, Route, NavLink, Routes, Navigate } from "react-router-dom";
import { MdGroup } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { ImOffice } from "react-icons/im";
import { FiArchive } from "react-icons/fi";
import { BiAlignMiddle } from "react-icons/bi";
import "./App.css";
import Paket from "./pages/Paket";
import Lokasi from "./pages/Lokasi";
import MyForm from "./pages/MyForm";
import Tatacara from "./pages/Tatacara";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Pendaftaran TOEFL</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/tatacara" />}></Route>
        <Route path="/tatacara" element={<Tatacara />}></Route>
        <Route path="/paket" element={<Paket />}></Route>
        <Route path="/lokasi" element={<Lokasi />}></Route>
        <Route path="/myform" element={<MyForm />}></Route>        
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <footer>
      <NavLink to="/tatacara" className="iconWrapper">          
          <BiAlignMiddle className="icon" />
          Tata Cara
        </NavLink>
        <NavLink to="/paket" className="iconWrapper">
          <FiArchive className="icon" />
          Paket
        </NavLink>
        <NavLink to="/lokasi" className="iconWrapper">          
          <ImOffice className="icon" />
          Lokasi
        </NavLink>
        <NavLink to="/myform" className="iconWrapper">          
          <MdGroup className="icon" />
          Daftar
        </NavLink>
      
        <NavLink to="/about" className="iconWrapper">          
          <VscAccount className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}
 
export default App;