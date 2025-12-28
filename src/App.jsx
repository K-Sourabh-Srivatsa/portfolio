import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/homePage/home";
import About from "./pages/aboutPage/about";
import Contact from "./pages/contactPage/contact";
import Projects from "./pages/projectsPage/projects";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white p-8 md:p-16">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
