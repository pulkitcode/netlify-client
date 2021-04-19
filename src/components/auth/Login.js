import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Login() {

    const history = useHistory();

    const { setUserData } = useContext(UserContext);
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        try {
            const loginRes = await axios.post("https://optimistic-heisenberg-819a2a.netlify.app/login", {
                email: data.email,
                password: data.password
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            console.log(loginRes.data.token)
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/protected");
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
                            <h1 class="text-center mb-4">Sign in</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>

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
                                        <input type="password" className="form-control" placeholder="password"
                                            name="password" ref={register} />
                                    </div>
                                </div>
                                {/* End Password  */}

                                {/* Submit Button */}
                                <button type="submit" class="btn btn-block btn-wide btn-primary text-uppercase">Sign In</button>
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
