import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkIfLogin, getIfEditing, toggleEditing, getUser, setUser, getToken } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import * as API from "../services/callAPI"

const Profile = () => {
    const isLogin = useSelector(checkIfLogin);
    const isEditingName = useSelector(getIfEditing);
    const user = useSelector(getUser)
    const token = useSelector(getToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!localStorage.getItem("jwt") && !isLogin) {
            navigate("/login")
        }
    });

    const UserName = () => {
        if (isEditingName) {
            return (
                <div className="header">
                    <input id="firstname"></input>
                    <input id="lastname"></input>
                    <br />
                    <button onClick={async () => {
                        const updatedProfile = await API.editName({firstName: document.getElementById("firstname").value, lastName: document.getElementById("lastname").value}, token)
                        dispatch(toggleEditing())
                        dispatch(setUser(updatedProfile.body))
                    }} className="edit-button">Save
                    </button>
                    <button onClick={() => dispatch(toggleEditing())} className="edit-button">Cancel</button>
                </div>
            )
        }
        else {
            return (
                <div className="header">
                    <h1>Welcome back<br />{user.firstName +  " " + user.lastName}!</h1>
                    <button onClick={() => dispatch(toggleEditing())} className="edit-button">Edit Name</button>
                </div>
            )
        }
    }

    return (
        <main className="main bg-dark">

            <UserName />

            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
};

export default Profile;
