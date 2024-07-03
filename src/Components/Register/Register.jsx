import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, signInWithGoogle, SignInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success('Register Successful')
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const GitHublogin = () => {
    SignInWithGithub()
    .then(result => {
        console.log(result)
        .catch((error)=>{
            console.log(error)
        })
    })
  }

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp)",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold text-sky-500">
                    Register Now
                  </h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                </div>
                <div className="card bg-sky-500 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        type="text"
                        placeholder="PHOTO-URL"
                        name="photo"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        name="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        name="password"
                        className="input input-bordered"
                        required
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <p>
                      Already have an account?{" "}
                      <span className="text-red-700">
                        <Link to="/login">Login</Link>
                      </span>
                    </p>
                    <div className="form-control mt-6">
                      <button type="submit" className="btn btn-outline text-white">
                        Register
                      </button>
                    </div>
                    <div className="form-control mt-4">
                      <button
                        type="button"
                        onClick={googleLogin}
                        className="btn btn-outline text-white"
                      >
                        Register with Google
                      </button>
                      <button
                        type="button"
                        onClick={GitHublogin}
                        className="btn btn-outline mt-4 text-white"
                      >
                        Register with GitHub
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
