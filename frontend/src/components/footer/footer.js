import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (_jsx("footer", { className: "py-6 px-4 md:px-20 border-t border-gray-300 text-center md:text-left", children: _jsxs("div", { className: "md:flex justify-between items-center", children: [_jsx("p", { className: "text-gray-600", children: "Tous droits r\u00E9serv\u00E9s \u2022 Achraf Bouchalghouma" }), _jsxs("div", { className: "flex justify-center md:justify-end gap-4 text-gray-600 mt-4 md:mt-0", children: [_jsx(FaFacebook, { className: "hover:text-[#1376F8] cursor-pointer" }), _jsx(FaTwitter, { className: "hover:text-[#1376F8] cursor-pointer" }), _jsx(FaLinkedin, { className: "hover:text-[#1376F8] cursor-pointer" }), _jsx(FaInstagram, { className: "hover:text-[#1376F8] cursor-pointer" })] }), _jsxs("p", { className: "text-gray-600", children: ["\u00A9 ", new Date().getFullYear(), " Medi-Clinique Hamdi Ben Haj rhouma."] })] }) }));
};
export default Footer;
