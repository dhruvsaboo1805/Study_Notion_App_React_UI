import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";

const Navbar = (props) => {
    const isLoggedIn  = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1160px] mx-auto px-4 md:px-0 py-4">
            <div className="flex items-center">
                <Link to="/">
                    <img src={logo} alt="study notion img" width={160} height={32} loading="lazy" />
                </Link>
            </div>

            <nav className="md:ml-[0.5rem]">
                <ul className="flex flex-col md:flex-row justify-evenly md:justify-start text-richblack-100 gap-x-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#">About</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* buttons */}
            <div className="flex justify-center md:justify-evenly items-center mt-4 md:mt-0">
                {!isLoggedIn && (
                    <>
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="btn">SignUp</button>
                        </Link>
                    </>
                )}

                {isLoggedIn && (
                    <>
                        <Link to="/" onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}>
                            <button className="btn">LogOut</button>
                        </Link>
                        <Link to="/dashboard">
                            <button className="btn">DashBoard</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
