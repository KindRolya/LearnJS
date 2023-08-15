import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import Aboutus from "./routes/Aboutus"
import Cart from "./routes/Cart"


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about-us" element={<Aboutus />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  )
}