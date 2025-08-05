import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
const Navbar1 = () => {
    return (_jsx("nav", { className: "bg-[#E6F6FE] border-gray-200 dark:bg-gray-900", children: _jsxs("div", { className: "max-w-screen-xl flex items-center justify-between mx-auto p-4", children: [_jsxs(Link, { to: "/login", className: "flex items-center space-x-3 rtl:space-x-reverse", children: [_jsx("img", { src: logo, className: "h-8", alt: "Flowbite Logo" }), _jsx("span", { className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white", children: "Tbibek" })] }), _jsxs("div", { className: "flex space-x-4", children: [_jsx(Link, { to: "/login", className: "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500", children: "Login" }), _jsx(Link, { to: "/signup", className: "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500", children: "Sign Up" })] })] }) }));
};
export default Navbar1;
