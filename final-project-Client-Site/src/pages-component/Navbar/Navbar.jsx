import { Link, NavLink } from "react-router-dom";
import card from "../../images/nav-shop.png";

export default function Navbar() {
  const navItems = (
    <>
      <li>
        <NavLink className="font-bold text-white" to={"/"}>
          HOME
        </NavLink>
      </li>

      <li>
        <NavLink className="font-bold text-white" to={"/contact"}>
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-white" to={"/deshboard"}>
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-white" to={"/ourmenu"}>
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-white" to={"/ourshop"}>
          OUR SHOP
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[rgba(0,0,0,0.4)] fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[rgba(0,0,0,0.6)] rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          <span className="text-sm text-white logo-text font-bold">
            <h1 className="text-2xl">BISTROBOOS</h1>
            RESTAURANT
          </span>
        </NavLink>
      </div>
      <div className="w-[35%] md:w-[80%] justify-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navItems}</ul>
        <img src={card} className="h-[40px] mr-3" />
        <Link className="font-bold text-white" to={"/login"}>
          Join
        </Link>
      </div>
    </div>
  );
}
