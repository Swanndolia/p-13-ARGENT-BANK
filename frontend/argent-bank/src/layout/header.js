import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkIfLogin, logout, setUser, getUser, getToken, login } from "../redux/userSlice";
import { useEffect } from "react";
import * as API from "../services/callAPI"

import logo from "../assets/img/argentBankLogo.png";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector(checkIfLogin);
    const user = useSelector(getUser)
    const token = useSelector(getToken)


    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("jwt");
        navigate("/");
    };
    useEffect(() => {
        if (localStorage.getItem("jwt") || isLogin) {
            dispatch(login(isLogin ? token : localStorage.getItem("jwt")))
            API.getProfile(isLogin ? token : localStorage.getItem("jwt")).then((response => dispatch(setUser(response.body))))
        }// eslint-disable-next-line, trigger refresh only when token is changed from whatever the page it's changed from
    }, [token]);

    return (

        <>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {isLogin ? (
                        <>
                            <Link className="main-nav-item" to="/profile">
                                {user.firstName + " " + user.lastName }
                            </Link>
                            <span className="main-nav-item" onClick={handleLogout}>
                                Sign out
                            </span>
                        </>
                    ) : (
                        <Link className="main-nav-item" to="/login">
                            Sign In
                        </Link>
                    )}</div>
            </nav>
            <Outlet />
        </>
    );
};

export default Header;
