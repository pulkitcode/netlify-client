import React, { useContext, useEffect } from 'react'
import UserContext from "../context/userContext";
import { Link, useHistory } from "react-router-dom";

export default function Protected() {

    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {

        console.log("PROTECTEDDDDDDDDDD   =====    >>>>>   ", userData.user)

        if (!userData.user) {
            history.push('/login')
        }

    }, [userData])


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
