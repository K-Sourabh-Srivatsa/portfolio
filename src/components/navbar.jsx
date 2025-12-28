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
      <div className="px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center mb-3">
          <div className="flex bg-white/10 backdrop-blur-md rounded-xl p-1 sm:p-2 border border-white/20 gap-1 sm:gap-2 flex-wrap justify-center">
            {links.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                aria-label={`${label} navigation`}
                className={({ isActive }) =>
                  `px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all text-sm sm:text-base ${
                    isActive
                      ? "bg-purple-500 shadow-lg text-green-100"
                      : "hover:bg-white/10"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
