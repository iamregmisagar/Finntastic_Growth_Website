
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/contact" element={ <Contact/> } />
        <Route exact path="/services" element={ <Services/> } />
      </Routes>
    </div>
  );
}

export default App;
