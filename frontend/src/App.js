import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/navBar/Navbar";
import Navbar1 from "./components/navBar/Navbar1";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import Services from "./components/services/services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
function App() {
    return (_jsx(GoogleOAuthProvider, { clientId: "YOUR_GOOGLE_CLIENT_ID", children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Navbar1, {}), _jsx(Login, {})] }) }), _jsx(Route, { path: "/login", element: _jsxs(_Fragment, { children: [_jsx(Navbar1, {}), _jsx(Login, {})] }) }), _jsx(Route, { path: "/signup", element: _jsxs(_Fragment, { children: [_jsx(Navbar1, {}), _jsx(Signup, {})] }) }), _jsx(Route, { path: "/home", element: _jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Home, {})] }) }), _jsx(Route, { path: "/services", element: _jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Services, {})] }) }), _jsx(Route, { path: "/about", element: _jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(About, {})] }) }), _jsx(Route, { path: "/contact", element: _jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Contact, {})] }) })] }) }) }));
}
export default App;
