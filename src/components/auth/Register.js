import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

import { BASE_URL } from "../../api/Api";

export default function Register() {

    const history = useHistory();

    // const [password, setPassword] = useState();
    // const [passwordCheck, setPasswordCheck] = useState();
    const [error, setError] = useState("");

    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {

        try {

            await axios.post(`${BASE_URL}/register`,
                {
                    email: data.email,
                    password: data.password,
                    passwordCheck: data.passwordCheck,
                    displayName: data.displayName
                }
            )

            console.log(`
            
            User Registred 
            
            values= > ,
                ${data.email},
                ${data.password},
                ${data.passwordCheck},
                ${data.displayName}
                `
            )

            console.log("DATA  FOR LOGIN ", data.email, data.password)

            const loginRes = await axios.post(`${BASE_URL}/login`, {
                email: data.email,
                password: data.password
            });

            console.log(`
            Log In Success Full
            
            Value => 
            
            ${data.email},
            ${data.password},
            ${loginRes.data.token}
            `
            )

            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");

        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
            console.log("EROOR FROM SERVER ===>>    ", err.response.data.msg)
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-6 mx-auto">
                    <div className="card mt-7">
                        <div className="card-body p-4 p-lg-7">
                            <h1 className="text-center mb-4">Sign up</h1>
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                                {/* Name  */}
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <i className="far fa-address-card"></i>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Full Name"
                                            name="displayName" ref={register} />
                                    </div>
                                </div>
                                {/* Name  */}

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
                                    <label>Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <i className="fas fa-lock"></i>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Re Enter Password"
                                            name="password" ref={register} />
                                    </div>
                                </div>
                                {/* End Password  */}

                                {/* Password  */}
                                <div className="form-group">
                                    <label>Re Enter Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <i className="fas fa-lock"></i>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Re Enter assword"
                                            name="passwordCheck" ref={register} />
                                    </div>
                                </div>
                                {/* End Password  */}

                                {/* Submit Button */}
                                <button type="submit" className="btn btn-block btn-wide btn-primary text-uppercase">Sign Up</button>
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
