import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Footer from './components/Footer';
import AllRooms from "./Pages/AllRooms";
import RoomDetails from "./Pages/RoomDetails";
import Experience from "./Pages/Experience";
import About from "./Pages/About";




const App = () => {
  const isOwner = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwner && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/experince" element={<Experience />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
        <div>
            <Footer/>
        </div>
       
      </div>
    </div>
  );
};

export default App;
