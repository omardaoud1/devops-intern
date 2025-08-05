import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import user from "./../../assets/user.jpg";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUserData] = useState(null);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch("/auth/status", {
                    method: "GET",
                });
                const data = await response.json();
                if (data.isAuthenticated) {
                    setUserData(data.user);
                }
                else {
                    setUserData(null);
                }
            }
            catch (error) {
                console.error("Error fetching authentication status:", error);
            }
        };
        checkAuthStatus();
    }, []);
    return (_jsx("nav", { className: " bg-white border-gray-200 dark:bg-gray-900", children: _jsxs("div", { className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4", children: [_jsxs(Link, { to: "/home", className: "flex items-center space-x-3 rtl:space-x-reverse", children: [_jsx("img", { src: logo, className: "h-8", alt: "Flowbite Logo" }), _jsx("span", { className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white", children: "Tbibek" })] }), _jsxs("div", { className: "flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse", children: [_jsxs("button", { type: "button", className: "flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600", onClick: toggleDropdown, "aria-expanded": dropdownOpen ? "true" : "false", children: [_jsx("span", { className: "sr-only", children: "Open user menu" }), _jsx("img", { className: "w-8 h-8 rounded-full", src: user, alt: "user photo" })] }), dropdownOpen && (_jsxs("div", { className: "z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-40 top-0 mt-2 w-45", children: [_jsxs("div", { className: "px-2 py-3", children: [_jsx("span", { className: "block text-sm text-gray-900 dark:text-white", children: user.name }), _jsx("span", { className: "block text-sm text-gray-500 truncate dark:text-gray-400", children: user.email })] }), _jsxs("ul", { className: "py-2", children: [_jsx("li", { children: _jsx(Link, { to: "#", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white", children: "Dashboard" }) }), _jsx("li", { children: _jsx(Link, { to: "#", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white", children: "Settings" }) }), _jsx("li", { children: _jsx(Link, { to: "#", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white", children: "Earnings" }) }), _jsx("li", { children: _jsx(Link, { to: "/login", onClick: async (e) => {
                                                    e.preventDefault();
                                                    try {
                                                        const response = await fetch("http://localhost:5000/login", {
                                                            method: "GET",
                                                            credentials: "include",
                                                        });
                                                        if (response.ok) {
                                                            window.location.href = "/login";
                                                        }
                                                        else {
                                                            console.error("Failed to log out");
                                                        }
                                                    }
                                                    catch (error) {
                                                        console.error("Error logging out:", error);
                                                    }
                                                }, className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white", children: "Sign out" }) })] })] })), _jsxs("button", { type: "button", className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600", onClick: toggleMenu, "aria-expanded": menuOpen ? "true" : "false", children: [_jsx("span", { className: "sr-only", children: "Open main menu" }), _jsx("svg", { className: "w-5 h-5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 17 14", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 1h15M1 7h15M1 13h15" }) })] })] }), _jsx("div", { className: `items-center justify-between ${menuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`, id: "navbar-user", children: _jsxs("ul", { className: "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700", children: [_jsx("li", { children: _jsx(Link, { to: "/home", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700", "aria-current": "page", children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/services", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700", children: "Service" }) }), _jsx("li", { children: _jsx(Link, { to: "#", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700", children: "Blogs" }) }), _jsx("li", { children: _jsx(Link, { to: "/about", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700", children: "About" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", className: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700", children: "Contact" }) })] }) })] }) }));
};
export default Navbar;
