import React, { useContext } from 'react'

import {
    Link
} from "react-router-dom";

import UserContext from "../../../context/userContext";

export default function LogInOrRegisterButton() {

    const { userData } = useContext(UserContext);

    return (
        <>

            {userData.user ? <>

            </>
                :
                <>
                    <li className="nav-item active mr-3">
                        <Link to="/login" className="btn btn-primary btn-rose btn-round btn-block">Login</Link>
                    </li>
                    <li className="nav-item active mr-3">
                        <Link to="/register" className="btn btn-primary btn-success btn-round btn-block">Register</Link>
                    </li>
                </>

            }

        </>
    )
}
