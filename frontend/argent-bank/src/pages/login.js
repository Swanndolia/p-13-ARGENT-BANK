import {  useDispatch } from "react-redux";
import * as API from "../services/callAPI"
import { useNavigate } from "react-router-dom";
import { login } from '../redux/userSlice'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const loginResult = await API.tryLogin({ email: event.target[0].value, password: event.target[1].value })
        dispatch(login(loginResult.body.token))
        if(document.getElementById("remember-me").checked){
            localStorage.setItem("jwt", loginResult.body.token)
        }
        navigate("/profile");
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
