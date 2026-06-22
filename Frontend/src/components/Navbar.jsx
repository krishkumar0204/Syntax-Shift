import { NavLink } from "react-router-dom";
import { CodeXml } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider.jsx";
import LoadingSpinner from "./LoadingSpinner";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <>
      <nav className="w-full h-16 py-3 ">
        <div className="flex justify-around items-center h-full px-4">
          <div className="flex gap-2 items-center">
            <CodeXml className="w-8 h-8 text-blue-500" />
            <NavLink to="/" className="font-semibold text-xl tracking-wider">
              Syntax
              <span className="text-amber-400 font-bold">Shift</span>
            </NavLink>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : user ? (
            <div>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-blue-400 font-mono duration-200 ease"
                    : "text-xl font-mono hover:text-blue-400 duration-200 ease"
                }
              >
                Profile
              </NavLink>
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-blue-400 font-mono duration-200 ease"
                    : "text-xl font-mono hover:text-blue-400 duration-200 ease"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl text-blue-400 font-mono duration-200 ease"
                    : "text-xl font-mono hover:text-blue-400 duration-200 ease"
                }
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
