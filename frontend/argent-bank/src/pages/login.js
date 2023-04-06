import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as API from "../services/callAPI"
import { useNavigate } from "react-router-dom";
import { login, checkIfLogin } from '../redux/userSlice'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const isLogin = useSelector(checkIfLogin)

    async function getProfileWithToken() {
        try {
            const jwt = localStorage.getItem("jwt");
            if (isLogin || jwt) {
                const loadProfile = await API.getProfile(jwt);
                navigate("/profile");
                console.log("Error:", loadProfile.message);
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }
    useEffect(() => {
        if (localStorage.getItem("jwt") || isLogin) {
            getProfileWithToken()
            dispatch(login(localStorage.getItem("jwt")))
        }
    }, [dispatch, isLogin]);

    async function handleSubmit(event) {
        event.preventDefault();
        const loginResult = await API.tryLogin({ email: event.target[0].value, password: event.target[1].value })
        dispatch(login(loginResult.body.token))
        localStorage.setItem("jwt", loginResult.body.token)
        getProfileWithToken()
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type='submit' className="sign-in-button">Sign In</button>

                </form>
            </section>
        </main>
    )
}



export default Login;
