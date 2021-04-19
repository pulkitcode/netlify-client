import React, { useContext } from 'react'

import {
    Link
} from "react-router-dom";

import UserContext from "../../../context/userContext";


export default function LogOutButton() {

    const { userData } = useContext(UserContext);
    const { setUserData } = useContext(UserContext);

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "");
    }

    return (
        <div>
            {userData.user ? <>

                <li className="nav-item">
                    <Link onClick={logout} className="btn btn-danger btn-success btn-round btn-block">Log Out</Link>
                </li>
            </>
                :
                <>
                </>

            }

        </div>
    )
}
