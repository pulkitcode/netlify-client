import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import axios from "axios";
import { useForm } from "react-hook-form";

import { BASE_URL } from "../../api/Api";

export default function Login() {

    const history = useHistory();

    const { setUserData } = useContext(UserContext);
    const [error, setError] = useState("");
    const [signInBtnClicked, SetsignIpBtnClicked] = useState(false);

    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        try {

            SetsignIpBtnClicked(true)

            const loginRes = await axios.post(`${BASE_URL}/login`, {
                email: data.email,
                password: data.password
            });

            console.log(loginRes.msg)

            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });

            console.log(loginRes.data.token)
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/protected");

        } catch (err) {

            console.log("entered the Error Block")

            //err.response.data.msg && setError(err.response.data.msg);
            setError(err.response.data.msg);
            console.log(err.response.data.msg)
            SetsignIpBtnClicked(false)
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-6 mx-auto">
                    <div className="card mt-7">
                        <div className="card-body p-4 p-lg-7">
                            <h1 className="text-center mb-4">Sign in</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* Email  */}
                                <div className="form-group">
                                    <label>Email</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <input type="email" className="form-control" placeholder="Email"
                                            name="email" ref={register} />
                                    </div>
                                </div>
                                {/* End Email  */}

                                {/* Password  */}
                                <div className="form-group">
                                    <label >Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <i className="fas fa-lock"></i>
                                        </div>
                                        <input type="password" className="form-control" placeholder="password"
                                            name="password" ref={register} />
                                    </div>
                                </div>
                                {/* End Password  */}

                                {/* Submit Button */}
                                {/* <button type="submit" className="btn btn-block btn-wide btn-primary text-uppercase">Sign In</button> */}
                                {/* End Submit Button  */}

                                {/* Submit Button */}
                                <button type="submit" className="btn btn-block btn-wide btn-primary text-uppercase"
                                    disabled={signInBtnClicked}
                                >
                                    {signInBtnClicked ?
                                        <>
                                            Signing In Please Wait ...   <span className="spinner-border spinner-border-sm" role="status" aria-hidden="false"></span>
                                        </>
                                        :
                                        <>
                                            Sign In
                                        </>}

                                </button>
                                {/* End Submit Button  */}

                                {error &&

                                    < div className="alert alert-danger alert-dismissible fade show my-4">
                                        <i className="fas fa-thumbs-up mr-2"></i>
                                        <button type="button" className="close" onClick={() => { setError("") }} >
                                            <i className="fas fa-times"></i>
                                        </button>
                                        <b>{error}</b>
                                        <br />
                                    </div>

                                }

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
