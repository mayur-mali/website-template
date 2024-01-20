import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div>
      <nav className="bg-[#141647] shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <button
                  data-todo-at-click="open = !open"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  data-todo-x-bind-aria-expanded="open"
                  aria-expanded="false"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed. */}
                  <svg
                    data-todo-x-state-on="Menu open"
                    data-todo-x-state-off="Menu closed"
                    data-todo-colon-className="{ 'hidden': open, 'block': !open }"
                    className="block h-6 w-6"
                    data-todo-x-description="Heroicon name: outline/menu"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                  {/* Icon when menu is open. */}
                  <svg
                    data-todo-x-state-on="Menu open"
                    data-todo-x-state-off="Menu closed"
                    data-todo-colon-className="{ 'hidden': !open, 'block': open }"
                    className="hidden h-6 w-6"
                    data-todo-x-description="Heroicon name: outline/x"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <Link
                to="/"
                className="text-gray-300  hover:text-[#02f9fd] px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/a"
                className="text-gray-300  hover:text-[#02f9fd] px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </Link>
              <Link
                to="/aa"
                className="text-gray-300  hover:text-[#02f9fd] px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                to="/aaa"
                className="text-gray-300  hover:text-[#02f9fd] px-3 py-2 rounded-md text-sm font-medium"
              >
                Calendar
              </Link>
            </div>
            <div className="flex items-center">
              <button className="px-6 py-1.5 bg-[#02fafe] rounded-lg text-black tracking-wide font-bold">
                Sign In
              </button>
            </div>
          </div>
        </div>

        <div
          className={` h-64 md:hidden w-full duration-200 transition-all ${
            showMobileMenu ? " h-auto" : " h-0"
          }`}
        >
          {showMobileMenu && (
            <div className="flex flex-col items-center space-y-4">
              <Link
                to="/"
                className="text-gray-300  hover:text-[#02f9fd] px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/a"
                className="text-gray-300  hover:text-[#02f9fd] px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </Link>
              <Link
                to="/aa"
                className="text-gray-300  hover:text-[#02f9fd] px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                to="/aaa"
                className="text-gray-300  hover:text-[#02f9fd] px-3 py-2 rounded-md text-sm font-medium"
              >
                Calendar
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
