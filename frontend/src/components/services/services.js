import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import test from "./../../assets/test.png";
import Footer from "./../footer/footer";
function Services() {
    return (_jsxs("div", { className: "bg-[#f9fbff] text-[#011632]", children: [_jsxs("section", { className: "bg-[#E6F6FE] rounded-b-[20px] py-10 px-4 md:px-20 text-center", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold", children: "Services" }), _jsx("p", { className: "text-gray-600 mt-4 text-center", children: "Nous mettons \u00E0 profit notre expertise et nos comp\u00E9tences pour offrir des soins de la plus haute qualit\u00E9 \u00E0 nos patients." })] }), _jsx("section", { className: "py-10 px-4 md:px-20 space-y-6", children: _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6", children: [
                        {
                            title: "Consultations Médicales En Ligne",
                            description: "Accédez à des médecins qualifiés pour des conseils ou des suivis à distance.",
                            img: "/src/assets/icon4.png",
                        },
                        {
                            title: "Urgences Médicales 24/7",
                            description: "Service de consultations urgentes, disponibles à toute heure.",
                            img: "/src/assets/icon5.png",
                        },
                        {
                            title: "Examens De Santé",
                            description: "Bénéficiez d'examens réguliers pour un suivi de santé complet et personnalisé.",
                            img: "/src/assets/icon6.png",
                        },
                        {
                            title: "Spécialistes En Médecine",
                            description: "Des professionnels dans divers domaines, tels que la pédiatrie, l'ophtalmologie, la gynécologie, etc.",
                            img: "/src/assets/icon7.png",
                        },
                        {
                            title: "Vaccinations Et Prévention",
                            description: "Accédez à des services de prévention pour maintenir une bonne santé.",
                            img: "/src/assets/icon8.png",
                        },
                        {
                            title: "Suivi Post-Opératoire",
                            description: "Un accompagnement après intervention chirurgicale pour garantir une récupération optimale.",
                            img: "/src/assets/icon9.png",
                        },
                    ].map((service, index) => (_jsxs("div", { className: "bg-white rounded-lg p-5 shadow hover:shadow-lg w-full h-full", children: [service.img && (_jsx("img", { src: service.img, alt: service.title, className: "w-28 h-28 mx-auto rounded-md mb-4" })), _jsx("h3", { className: "text-[#011632] text-2xl text-center font-mono font-medium capitalize leading-[28.8px] break-words", children: service.title }), _jsx("p", { className: "text-[#3C4959] text-lg text-center font-mono font-normal leading-[27.9px] tracking-[0.27px] break-words", children: service.description })] }, index))) }) }), _jsx("section", { className: "py-12 px-4 md:px-48 flex justify-center items-center", children: _jsxs("div", { className: "bg-[#011632] text-white rounded-lg p-8 flex flex-col md:flex-row items-center gap-6 max-w-7xl w-full", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-white text-3xl font-sans font-semibold capitalize leading-[45px] break-words", children: "Un Site M\u00E9dical Qui Va R\u00E9volutionner Les R\u00E8gles Du Jeu" }), _jsx("p", { children: "Nous utilisons uniquement les meilleures comp\u00E9tences et technologies disponibles pour offrir les meilleurs soins \u00E0 nos patients." })] }), _jsx("img", { src: test, alt: "Medical Highlight", className: "rounded-lg max-w-full h-auto mt-4 md:mt-0" })] }) }), _jsx(Footer, {})] }));
}
export default Services;
