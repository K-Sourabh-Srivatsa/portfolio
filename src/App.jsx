import { useState } from "react";
import Homepage from "./pages/homePage/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white p-8 md:p-16">
        <Navbar />
        <Homepage />
      </div>
    </>
  );
}

export default App;
