import { Outlet, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import {checkIfLogin} from '../redux/userSlice'

import logo from "../assets/img/argentBankLogo.png";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = useSelector(checkIfLogin);

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("jwt");
        navigate("/");
    };

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
                {isLogin ? (
                    <>
                        <Link className="main-nav-item" to="/profile">
                            <i className="fa fa-user-circle"></i>
                            Profile
                        </Link>
                        <button className="main-nav-item" onClick={handleLogout}>
                            <i className="fa fa-sign-out"></i>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </nav>
            <Outlet />
        </>
    );
};

export default Header;
