import { Link, NavLink } from "react-router-dom";
import User from '../../assets/user.png'
import '../Styles/Styles.css'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const HandleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/offer'>Offer</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <Link to='/'><h1>TownHouse</h1></Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    user ?
                        <button onClick={HandleSignOut} className="btn">Sign Out</button>
                        : <Link to='/register'><button className="btn">Login</button></Link>
                }


                {
                    user ? <div className="w-12 rounded-full">
                        <img className="rounded-3xl"
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL
                            } />
                    </div>
                        : <div className="w-12 rounded-full">
                            <img className="rounded-3xl"
                                alt="Tailwind CSS Navbar component"
                                src={User}/>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;