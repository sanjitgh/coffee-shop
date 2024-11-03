import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${isActive ? "text-yellow-600" : "hover:text-black"}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${isActive ? "text-yellow-600" : "hover:text-black"}`
        }
        to="/coffees"
      >
        Coffees
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-bold ${isActive ? "text-yellow-600" : "hover:text-black"}`
        }
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </>
  );
  return (
    <div className="backdrop-blur bg-white/30 z-50 fixed w-full">
      <div className="navbar container mx-auto px-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          Coffee Shop
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
