import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function LeftBar() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center my-5">
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          <span className="text-sm text-black logo-text font-bolder">
            <h1 className="text-2xl">BISTROBOOS</h1>
            RESTAURANT
          </span>
        </NavLink>
      </div>
      <div className="w-full p-2 -mb-3">
        <NavLink
          to={`/`}
          className={`w-full btn p-2 flex justify-start items-center text-md`}
        >
          <FaHome /> Home{" "}
        </NavLink>
      </div>
      <div className="w-full -mb-3 p-2">
        <NavLink
          to={`/`}
          className={`w-full btn p-2 flex justify-start items-center text-md`}
        >
          <FaHome /> Home{" "}
        </NavLink>
      </div>
      <div className="w-full -mb-3 p-2">
        <NavLink
          to={`/`}
          className={`w-full btn p-2 flex justify-start items-center text-md`}
        >
          <FaHome /> Home{" "}
        </NavLink>
      </div>
      <div className="w-full -mb-3 p-2">
        <NavLink
          to={`/`}
          className={`w-full btn p-2 flex justify-start items-center text-md`}
        >
          <FaHome /> Home{" "}
        </NavLink>
      </div>
      <div className="w-full -mb-3 p-2">
        <NavLink
          to={`/`}
          className={`w-full btn p-2 flex justify-start items-center text-md`}
        >
          <FaHome /> Home{" "}
        </NavLink>
      </div>
      <div className="w-full -mb-3 p-2">
        <NavLink
          to={`/`}
          className={`w-full btn p-2 flex justify-start items-center text-md`}
        >
          <FaHome /> Home{" "}
        </NavLink>
      </div>
      <div className="w-full -mb-3 p-2">
        <NavLink
          to={`/`}
          className={`w-full btn p-2 flex justify-start items-center text-md`}
        >
          <FaHome /> Home{" "}
        </NavLink>
      </div>
    </div>
  );
}
