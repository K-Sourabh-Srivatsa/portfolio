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
      <nav className="w-full mb-3">
        <div className="flex w-full bg-white/10 backdrop-blur-md rounded-xl p-1 sm:p-2 border border-white/20 gap-1 sm:gap-2">
          {links.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              aria-label={`${label} navigation`}
              className={({ isActive }) =>
                `flex-1 text-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all text-sm sm:text-base ${
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
    </>
  );
};

export default Navbar;
