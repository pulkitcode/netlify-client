import React from 'react'

import {
    Link
} from "react-router-dom";

import LogOutButton from './misc/LogOutButton'
import LogInOrRegisterButton from './misc/LogInOrRegisterButton'

export default function Header() {

    return (
        <div style={{ marginBottom: "4rem" }}>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
                <div className="container">

                    <Link className="navbar-brand" to="/"><i className="fa fa-home"></i> Home</Link>

                    <div class="collapse navbar-collapse" id="navbarCollapse-2">
                        <ul className="navbar-nav ml-auto mr-sm-2 mt-2 mt-lg-0">
                            <li class="nav-item active mr-3">
                                <Link className="navbar-brand" to="/protected"><i className="fa fa-home"></i> protected</Link>
                            </li>
                            <LogInOrRegisterButton />
                            <LogOutButton />
                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    )
}
