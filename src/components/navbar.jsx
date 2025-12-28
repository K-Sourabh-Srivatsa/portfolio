import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center mb-12">
        <div className="flex bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <button
              key={item}
              className={`px-6 py-2 rounded-lg transition-all ${
                item === "Home"
                  ? "bg-purple-500 shadow-lg"
                  : "hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
