import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight, FaLinkedin } from "react-icons/fa";
import doctorImage from "/src/assets/doctor.png";
import dentalImage from "/src/assets/dental.png";
import image6 from "/src/assets/image6.png";
import Footer from "./../footer/footer";
function Home() {
    return (_jsxs("div", { className: "bg-[#f9fbff] text-[#011632]", children: [_jsx("section", { className: "bg-[#E6F6FE] rounded-b-[20px] py-10 px-4 md:px-20", children: _jsxs("div", { className: "grid md:grid-cols-2 items-center", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs("h1", { className: "text-[#011632] text-3xl font-sans font-semibold capitalize leading-[43.2px] break-words", children: ["Pr\u00E9parez-vous pour votre meilleure exp\u00E9rience m\u00E9dicale : Prenez vos rendez-vous facilement !", " "] }), _jsx("p", { className: "text-[#3C4959] text-2xl font-serif font-normal leading-[37.2px] tracking-[0.36px] break-words", children: "Nous utilisons uniquement les meilleurs outils et technologies pour vous offrir une exp\u00E9rience de prise de rendez-vous simple et fiable. R\u00E9servez votre visite en toute tranquillit\u00E9 !" }), _jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsx("button", { className: "bg-[#1376F8] text-white px-6 py-2 rounded-md hover:bg-[#0c4d9d]", children: _jsx("p", { className: "text-white text-lg font-serif font-semibold leading-[31px] tracking-[0.3px] break-words", children: "Prenez rendez-vous" }) }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(HiOutlinePhoneOutgoing, { className: "text-[#1376F8] text-xl" }), _jsxs("div", { children: [_jsx("p", { className: "text-[#1376F8] text-sm font-sans font-semibold leading-[21.7px] tracking-[0.28px] break-words", children: "Urgence 24H" }), _jsx("p", { className: "text-[#011632] text-sm font-sans font-medium leading-[21.7px] tracking-[0.28px] break-words", children: "+216 52107357" })] })] })] })] }), _jsx("div", { className: "hidden md:block", children: _jsx("img", { src: doctorImage, alt: "Doctor", className: "max-w-full h-auto ml-24" }) })] }) }), _jsx("section", { className: "py-10 px-4 md:px-20 space-y-6", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                        {
                            title: "Une Plateforme Accessible à Tous",
                            description: "Notre site vous permet de prendre facilement rendez-vous avec des médecins de diverses spécialités, partout en Tunisie. Que ce soit pour une consultation urgente ou une visite de routine, tout se fait en quelques clics.",
                            img: "/src/assets/icon1.png",
                        },
                        {
                            title: "Simplicité et Confiance",
                            description: "Grâce à notre système intuitif, trouvez un praticien de confiance, sélectionnez le créneau qui vous convient et gérez vos rendez-vous sans tracas. Votre santé mérite un service fiable et rapide.",
                            img: "/src/assets/icon2.png",
                        },
                        {
                            title: "Disponibilité 24/7",
                            description: "Peu importe l’heure ou l’endroit, notre plateforme est à votre disposition. Pour les urgences ou les suivis médicaux, réservez en toute sérénité à tout moment.",
                            img: "/src/assets/icon3.png",
                        },
                    ].map((feature, index) => (_jsxs("div", { className: "bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300", children: [feature.img && (_jsx("img", { src: feature.img, alt: feature.title, className: "w-28 h-24 block mx-auto rounded-md mb-2" })), _jsx("h3", { className: "text-[#011632] text-center text-xl font-[Holtwood One SC]  font-normal capitalize leading-[35.2px] break-words", children: feature.title }), _jsx("p", { className: "text-[#3C4959] text-center text-[13px] leading-[27.9px] font-[IBM Plex Sans KR] font-normal leading-[20.15px] tracking-[0.2px] break-words", children: feature.description })] }, index))) }) }), _jsx("section", { className: "py-10 px-4 md:px-20", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-6 items-center", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("h1", { className: "text-[#011632] text-4xl font-mono font-semibold capitalize leading-[52.5px] break-words", children: ["Nous accueillons de nouveaux patients et avons h\u00E2te de vous rencontrer.", " "] }), _jsx("p", { className: "text-[#3C4959] text-base font-mono font-normal leading-[27.9px] tracking-[0.27px] break-words", children: "Nous s\u00E9lectionnons les meilleurs mat\u00E9riaux disponibles pour offrir \u00E0 nos patients des soins de qualit\u00E9 sup\u00E9rieure. D\u00E9tendez-vous et r\u00E9servez votre rendez-vous en toute tranquillit\u00E9" }), _jsxs("div", { className: "flex space-x-2", children: [_jsx("input", { type: "text", placeholder: "Entrez votre num\u00E9ro de t\u00E9l\u00E9phone", className: "border border-gray-300 px-4 py-2 rounded-md w-full focus:ring focus:ring-blue-300" }), _jsx("button", { className: "bg-[#1376F8] text-white px-4 py-2 rounded-md hover:bg-[#0c4d9d]", children: "Soumettre" })] })] }), _jsx("div", { className: "hidden md:block", children: _jsx("img", { src: dentalImage, alt: "Dental Care", className: "w-[50%] h-[50%] bg-gradient-to-t from-[#ECECEC] to-[#ECECEC] rounded-lg ml-52" }) })] }) }), _jsxs("section", { className: "py-10 px-4 md:px-20", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-6", children: "Rencontrez Nos Sp\u00E9cialistes" }), _jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative", children: [
                            {
                                name: "DR.Housem",
                                field: "Ophtalmologie",
                                img: image6,
                            },
                            { name: "DR.Wissem", field: "Dentisterie" },
                            { name: "DR.Shiraz", field: "Pédiatrie" },
                            { name: "DR.Mohsen", field: "Gynécologie" },
                        ].map((specialist, index) => (_jsxs("div", { className: "bg-white rounded-lg p-4 shadow hover:shadow-lg relative overflow-hidden", children: [_jsx("img", { src: specialist.img, alt: `${specialist.name}`, className: "absolute inset-0 w-full h-full object-cover z-[-1]" }), _jsx("div", { className: "relative z-10", children: _jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children: specialist.name }), _jsx("p", { className: "text-gray-600", children: specialist.field })] }), _jsx(FaLinkedin, { className: "text-[#000000] text-2xl" })] }) })] }, index))) })] }), _jsxs("section", { className: "py-10 px-4 md:px-20 bg-[#f9fbff]", children: [_jsx("h2", { className: "text-2xl font-bold text-center mb-6", children: "Nos Clients Satisfaits" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6", children: [
                            {
                                name: "Samir Jlasi",
                                review: "Un service rapide, efficace et accessible à tout moment, je recommande vivement !",
                                stars: 5,
                            },
                            {
                                name: "Montasar",
                                review: "Des professionnels compétents et un site facile à utiliser pour prendre rendez-vous.",
                                stars: 3,
                            },
                            {
                                name: "Laila",
                                review: "Excellente expérience ! J’ai pu réserver mon rendez-vous rapidement et recevoir des soins de qualité.",
                                stars: 5,
                            },
                        ].map((client, index) => (_jsxs("div", { className: "bg-white rounded-lg p-4 w-full h-[290px] shadow hover:shadow-lg", children: [_jsx("h3", { className: "font-semibold", children: client.name }), _jsx("div", { className: "mt-2 mb-2 flex justify-start", children: Array.from({ length: 5 }).map((_, starIndex) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: starIndex < client.stars ? "gold" : "gray", viewBox: "0 0 24 24", className: "w-5 h-5", children: _jsx("path", { d: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.719 1.528 8.108-7.464-3.928-7.464 3.928 1.528-8.108-6.064-5.719 8.332-1.151z" }) }, starIndex))) }), _jsx("p", { className: "text-gray-600", children: client.review })] }, index))) })] }), _jsx(Footer, {})] }));
}
export default Home;
