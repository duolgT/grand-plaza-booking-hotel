import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Footer from './components/Footer';
import AllRooms from "./Pages/AllRooms";




const App = () => {
  const isOwner = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwner && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
        </Routes>
        <div>
            <Footer/>
        </div>
       
      </div>
    </div>
  );
};

export default App;
