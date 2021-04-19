import React, { useContext, useEffect } from 'react'
import UserContext from "../context/userContext";
import { Link, useHistory } from "react-router-dom";

export default function Protected() {

    const { userData } = useContext(UserContext);
    let history = useHistory();

    useEffect(() => {

        console.log("PROTECTEDDDDDDDDDD   =====    >>>>>   ", userData.user)

        let returnToLogin = () => {
            if (!userData.user) {
                history.push('/login')
            }
        }

        returnToLogin()

    }, [userData, history])


    return (
        <div>
            {userData.user ? (

                <div className="container" style={{ marginTop: "10%" }}>
                    <h1>Welcome {userData.user.displayName}</h1>
                </div>

            ) : (
                <div className="container">
                    <h2>You are not logged in</h2>
                    <Link to="/login">Log in</Link>
                </div>
            )}


        </div>
    )
}
