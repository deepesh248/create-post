import { Link } from "react-router-dom";
import logo from "../images/logo.png"

function Navbar() {
  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <Link to={'/'} className="text-3xl font-bold leading-none">
          <img className="h-10" src={logo} alt="logo" viewBox="0 0 10240 10240"/>
        </Link>
        <div>
        </div>
        <ul className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-wrap justify-evenly items-center">
          <li>
            <Link
              to={'/'}
              className="text-sm text-blue-600 font-bold px-2"
            >
              Home
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link to={'/CreatePost'} className="text-sm text-gray-400 px-2  hover:text-gray-500">
              Create Post
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link
              to={'/ViewPost'}
              className="text-sm text-gray-400 hover:text-gray-500 px-2"
            >
              View Post
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link
              to={'/About'}
              className="text-sm text-gray-400 hover:text-gray-500 px-2"
            >
              About
            </Link>
          </li>
          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
