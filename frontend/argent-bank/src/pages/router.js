import '../assets/css/main.css'

import { Routes, Route } from "react-router-dom";

import Home from "./home.js";
import Login from "./login.js";
import Profile from "./profile.js";
import Header from "../layout/header.js"
import Footer from "../layout/footer.js"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<><Header /><Footer /></>}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    )
};

export default Router;
