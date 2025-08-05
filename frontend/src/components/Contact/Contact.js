import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import axios from "axios";
import Footer from "./../footer/footer";
const ContactSection = () => {
    const [formData, setFormData] = useState({
        prenom: "",
        nom: "",
        email: "",
        phone: "",
        date: "",
        message: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/contact", formData);
            alert(response.data.message);
        }
        catch (error) {
            console.error("Error sending form data:", error);
            alert("Failed to send your form. Please try again later.");
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-blue-50 to-white", children: [_jsxs("div", { className: "text-center py-12", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-800", children: "Prenez Contact" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Prenez rendez-vous d\u00E8s maintenant pour recevoir les soins dont vous avez besoin." })] }), _jsxs("div", { className: "container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md", children: [_jsxs("div", { className: "text-blue-500 text-3xl", children: [_jsx("i", { className: "fas fa-clock" }), " "] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-bold", children: "Heures d'ouverture" }), _jsx("p", { className: "text-gray-600", children: "Disponible 24/7" })] })] }), _jsxs("div", { className: "flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md", children: [_jsxs("div", { className: "text-blue-500 text-3xl", children: [_jsx("i", { className: "fas fa-envelope" }), " "] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-bold", children: "Adresse e-mail" }), _jsx("p", { className: "text-gray-600", children: "Tbibek@gmail.com" })] })] }), _jsxs("div", { className: "flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md", children: [_jsxs("div", { className: "text-blue-500 text-3xl", children: [_jsx("i", { className: "fas fa-phone" }), " "] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-bold", children: "Phone Number" }), _jsx("p", { className: "text-gray-600", children: "+216 00 000 000" })] })] })] }), _jsx("div", { className: "bg-transparent p-8 rounded-lg shadow-md", children: _jsxs("form", { className: "space-y-6", onSubmit: handleSubmit, children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "prenom", className: "block text-sm font-medium text-gray-700", children: "Pr\u00E9nom" }), _jsx("input", { type: "text", id: "prenom", value: formData.prenom, onChange: handleChange, className: "mt-1 block w-full h-full rounded-md border-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-[10px]", placeholder: "Pr\u00E9nom" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "nom", className: "block text-sm font-medium text-gray-700", children: "Nom de famille" }), _jsx("input", { type: "text", id: "nom", value: formData.nom, onChange: handleChange, className: "mt-1 block w-full h-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-[10px]", placeholder: "Nom de famille" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }), _jsx("input", { type: "email", id: "email", value: formData.email, onChange: handleChange, className: "mt-1 block w-full h-[55px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-[10px]", placeholder: "E-mail@gmail.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700", children: "Num\u00E9ro de t\u00E9l\u00E9phone" }), _jsx("input", { type: "text", id: "phone", value: formData.phone, onChange: handleChange, className: "mt-1 block w-full h-[55px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-[10px]", placeholder: "+216 00 000 000" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "date", className: "block text-sm font-medium text-gray-700", children: "S\u00E9lectionner la date" }), _jsx("input", { type: "date", id: "date", className: "mt-1 block w-full h-[55px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-[10px]" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700", children: "Message" }), _jsx("textarea", { id: "message", rows: "4", value: formData.message, onChange: handleChange, className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" })] }), _jsx("button", { type: "submit", className: "w-full py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600", children: "Prendre un rendez-vous" })] }) })] }), _jsx(Footer, {})] }));
};
export default ContactSection;
