import { Routes, Route, Link } from "react-router-dom";
import Gallery from "./pages/your_first_component/Gallery";
import Home_Page from "./pages/Home"

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/home">中心</Link> | 
        <Link to="/gallery">画廊</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/home" element={ <Home_Page /> } />
        <Route path="/gallery" element={ <Gallery /> } />
      </Routes>
    </div>
  )
}
