import { Link } from "react-router-dom";
import card from "../../images/nav-shop.png";

export default function Navbar() {
  const navItems = (
    <>
      <li>
        <Link className="font-bold text-white" to={"/"}>
          HOME
        </Link>
      </li>

      <li>
        <Link className="font-bold text-white" to={"/"}>
          CONTACT US
        </Link>
      </li>
      <li>
        <Link className="font-bold text-white" to={"/"}>
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link className="font-bold text-white" to={"/"}>
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link className="font-bold text-white" to={"/"}>
          OUR MENU
        </Link>
      </li>
      <li>
        <Link className="font-bold text-white" to={"/"}>
          OUR SHOP
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[rgba(0,0,0,0.4)] fixed top-0 z-50">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <span className="text-sm text-white logo-text font-bold">
            <h1 className="text-2xl">BISTROBOOS</h1>
            RESTAURANT
          </span>
        </Link>
      </div>
      <div className="w-[35%] md:w-[80%] justify-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navItems}</ul>
        <img src={card} className="h-[40px] mr-3" />
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
