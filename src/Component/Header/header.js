import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../Image/File-01.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-24">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="max-h-24  w-44" src={logo} alt="Your Company" />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  className="rounded-md px-4 py-2 text-lg font-medium text-white hover:bg-baseColor hover:text-white"
                  to="/"
                >
                  Home
                </Link>
                <Button
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  className="text-white"
                  onClick={handleClick}
                >
                  <p className="text-white text-[15px] mt-1 font-bold">
                    Services ^
                  </p>
                </Button>

                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom", // Position the menu below the button
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top", // Align the menu with the top edge of the anchor element
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/webDesign"> Web design and development</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="animation">Animation / Graphics designing</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Content Writing</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Software Development
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="mobileApp">Mobile Application</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <Link to="dataScience"> Data and Analytics</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Game Development</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Taxation and accounting services
                  </MenuItem>
                </Menu>

                <a
                  href="#"
                  className="rounded-md px-4 py-2 text-lg font-medium text-white hover:bg-baseColor hover:text-white"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="rounded-md px-4 py-2 text-lg font-medium text-white hover:bg-baseColor hover:text-white"
                >
                  Focus
                </a>
                <a
                  href="#"
                  className="rounded-md px-4 py-2 text-lg font-medium text-white hover:bg-baseColor hover:text-white"
                >
                  Partners
                </a>
                <button class="bg-baseColor  text-white text-lg font-medium py-2 px-8 rounded">
                  TALK
                </button>
              </div>
            </div>
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
