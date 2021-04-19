import React, { useContext, useEffect } from 'react'
import UserContext from "../context/userContext";

import { Hero } from "../components/layout/Hero";

export default function Home() {

    const { userData } = useContext(UserContext);

    console.log("HOMEEEEEEEEEE   =====    >>>>>   ", userData)

    // const history = useHistory();

    // useEffect(() => {

    //     if (!userData.user) {
    //         history.push('/login')
    //     }

    // }, [userData])

    return (
        <div>

            <Hero />


            {/* {userData.user ? ( */}




            {/* ) : (
            <div className="container">
                <h2>You are not logged in</h2>
                <Link to="/login">Log in</Link>
            </div>
                )} */}

        </div>
    )
}
