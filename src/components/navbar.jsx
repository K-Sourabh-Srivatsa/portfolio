import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-4xl lg:mx-auto sm:w-full px-8 md:px-16 py-4">
          <nav>
            <div className="flex w-full bg-white/10 backdrop-blur-md rounded-xl p-1 sm:p-2 border border-white/20 gap-1 sm:gap-2 shadow-sm shadow-black/25">
              {links.map(({ label, to }) => (
                <NavLink
                  key={label}
                  to={to}
                  aria-label={`${label} navigation`}
                  className={({ isActive }) =>
                    `flex-1 text-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all text-base sm:text-lg ${
                      isActive
                        ? "bg-purple-500 shadow-lg text-green-100"
                        : "hover:bg-white/10 text-white"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* spacer to prevent content being hidden under fixed navbar */}
      {/* <div className="h-14 sm:h-16" aria-hidden="true" /> */}
    </>
  );
};

export default Navbar;
