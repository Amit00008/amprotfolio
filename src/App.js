import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects"; 

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarsCanvas from "./Components/Starbackground";

const bgstyle = {
  background: 'url(https://i.pinimg.com/564x/7a/7e/68/7a7e682d80d5341850890b71bf814f83.jpg)',
}

function App() {
  return (
    <div className="h-auto w-full overflow-hidden" style={bgstyle}>
       <StarsCanvas />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
      <ToastContainer />
     
    </div>
  );
}

export default App;
