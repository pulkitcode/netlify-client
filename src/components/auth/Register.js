import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Register() {

    const history = useHistory();

    // const [password, setPassword] = useState();
    // const [passwordCheck, setPasswordCheck] = useState();
    const [error, setError] = useState("");

    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {

        try {
            await axios.post('https://optimistic-heisenberg-819a2a.netlify.app/register',
                {
                    email: data.email,
                    password: data.password,
                    passwordCheck: data.passwordCheck,
                    displayName: data.displayName
                }
            )
            const loginRes = await axios.post("https://optimistic-heisenberg-819a2a.netlify.app/login", {
                email: data.email,
                password: data.password
            });
            console.log(loginRes.data.token)
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
            console.log(err)
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-6 mx-auto">
                    <div class="card mt-7">
                        <div class="card-body p-4 p-lg-7">
                            <h1 class="text-center mb-4">Sign up</h1>
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                                {/* Name  */}
                                <div class="form-group">
                                    <label for="fullname">Full Name</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <i class="far fa-address-card"></i>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Full Name"
                                            name="displayName" ref={register} />
                                    </div>
                                </div>
                                {/* Name  */}

                                {/* Email  */}
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        <input type="email" className="form-control" placeholder="Email"
                                            name="email" ref={register} />
                                    </div>
                                </div>
                                {/* End Email  */}

                                {/* Password  */}
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <i class="fas fa-lock"></i>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Re Enter Password"
                                            name="password" ref={register} />
                                    </div>
                                </div>
                                {/* End Password  */}

                                {/* Password  */}
                                <div class="form-group">
                                    <label for="password">Re Enter Password</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <i class="fas fa-lock"></i>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Re Enter assword"
                                            name="passwordCheck" ref={register} />
                                    </div>
                                </div>
                                {/* End Password  */}

                                {/* Submit Button */}
                                <button type="submit" class="btn btn-block btn-wide btn-primary text-uppercase">Sign Up</button>
                                {/* End Submit Button  */}

                                {error &&
                                    < div className="alert alert-danger alert-dismissible fade show my-4">
                                        <i class="fas fa-thumbs-up mr-2"></i>
                                        <button type="button" className="close" onClick={() => { setError("") }} >
                                            <i class="fas fa-times"></i>
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
