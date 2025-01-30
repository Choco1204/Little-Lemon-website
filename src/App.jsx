import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import MainBanner from "./MainBanner";
import Footer from "./Footer";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/OrderOnline";
import "./App.css";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
