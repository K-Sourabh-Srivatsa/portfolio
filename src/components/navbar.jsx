import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex justify-center mb-6 sm:mb-12">
          <div className="flex bg-white/10 backdrop-blur-md rounded-xl p-1 sm:p-2 border border-white/20 gap-1 sm:gap-2 flex-wrap justify-center">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <button
                key={item}
                aria-current={item === "Home" ? "page" : undefined}
                aria-label={`${item} navigation`}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all text-sm sm:text-base ${
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
      </div>
    </>
  );
};

export default Navbar;
