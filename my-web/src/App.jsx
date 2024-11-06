import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Loyout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Pages from "./pages/Pages";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
//import Testimonial1 from "./pages/Testimonial1";

const App = () => {

    return(
    <>
    
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="index" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="team" element={<Pages />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="contact" element={<Contact />} />
       


        </Route>
    </Routes>
    
    </BrowserRouter>
        
    
    
    
    
    
    </>
    );
}

export default App;