import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import Swal from "sweetalert2";



const Login = () => {
    const { signInWithGoogle, SignInWithGithub } = useContext(AuthContext);
    const googleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                if (result.user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    };
    const GitHublogin = () => {
        SignInWithGithub()
            .then(result => {
                console.log(result)
                    .catch((error) => {
                        console.log(error)
                    })
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p>dont have a account? <Link className="text-bold text-red-600 " to='/register'>Register</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <div className="form-control mt-4">
                                    <button
                                        type="button"
                                        onClick={googleLogin}
                                        className="btn btn-outline text-white"
                                    >
                                        Login with Google
                                    </button>
                                    <button
                                        type="button"
                                        onClick={GitHublogin}
                                        className="btn btn-outline mt-4 text-white"
                                    >
                                        Login with GitHub
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;