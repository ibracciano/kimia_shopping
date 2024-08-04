// import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { auth, googleProvider } from "../config/firebase";
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../toolkit/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // fonction pour connexion avec google
    const loginGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
            .then((res) => {
                // récupération des données utilisateur
                const user = res.user;

                // affiche des données utilisateur dans la console
                // console.log(user);

                // envoi du user dans le store redux
                dispatch(
                    loginUser({
                        id: user.uid,
                        name: user.displayName,
                        image: user.photoURL,
                        email: user.email,
                        isAdmin: false, // pour le moment, je considère qu'un utilisateur non admin est un admin
                    })
                );
                toast.success("Welcome to Kimia Shopping 🤚");
                // ensuite le rediriger si tout est okay
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    return (
        <div className="flex items-center justify-center pt-32">
            {/* formulaire de connexion avec Google */}
            <div className=" w-[90%] md:w-[30%]">
                <div className="flex flex-col items-center justify-center py-5 text-white bg-gray-200 rounded-lg">
                    <h2 className="text-2xl font-bold">Register</h2>
                    <form className="pb-5 border-b border-black">
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full p-2 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor="pass">Your password</label>
                            <input
                                type="password"
                                id="pass"
                                placeholder="Password"
                                className="w-full p-2 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor="passConf">Confirm password</label>
                            <input
                                type="password"
                                id="passConf"
                                placeholder="Password"
                                className="w-full p-2 rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full p-2 mt-5 text-white bg-pink-500 rounded-md hover:bg-pink-600"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-3 italic">Connect in one click with Google</p>
                    {/* Login form */}
                    <button
                        className="flex items-center gap-2 p-1 mt-5 border-2 border-white rounded-full"
                        onClick={loginGoogle}
                    >
                        <FaGoogle />
                        <span>Login with Google</span>
                    </button>
                </div>

                <div className="flex items-center">
                    <p className="text-center">Do you have an account?</p>
                    <button
                        className="flex items-center gap-2 p-1 border-2 border-white rounded-full"
                        onClick={() => navigate("/login")}
                    >
                        <span className="italic text-pink-500">log in</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register