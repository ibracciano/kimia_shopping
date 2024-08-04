// import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { auth, db, googleProvider } from "../config/firebase";
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../toolkit/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fonction pour connexion avec google
  const loginGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(async (res) => {
        // récupération des données utilisateur connecté
        const user = res.user;

        // affiche des données utilisateur dans la console
        // console.log(user);

        // envoi du user dans un document de la collection "users" dont l'ID = user.uid
        // 1- referencer le document de la collection "users"
        const userRef = doc(db, "users", user.uid); // le mot doc est pour referencer un document


        // 2- écrire les données dans ce document
        // 2 - 1 / rechercher si le document
        const userSnap = await getDoc(userRef)
        // console.log(userSnap)

        // 2 - 2 / si le document n'existe pas, il est créé
        if (userSnap.exists()) {
          // console.log('Il existe')
          // récupérer les données du user
          const userExist = { id: userSnap.id, ...userSnap.data() };
          // console.log(userExist);

          // le dispatcher 
          dispatch(loginUser(userExist));

          toast.success("Welcome Back to Kimia Shopping 😍");
          // ensuite le rediriger si tout est okay
          setTimeout(() => {
            navigate("/");
          }, 1000);

          // 2 - 3 / si le document existe, il est mis à jour avec les nouvelles données


        } else {
          // console.log("il n'existe pas")
          // s'il n'existe pas alors on le crée 
          const newUser = {
            // id: user.uid, // pas le id car celui-ci est utilisé pour l'id du document
            name: user.displayName,
            image: user.photoURL,
            email: user.email,
            isAdmin: false, // pour le moment, je considère qu'un utilisateur non admin est un admin
          }

          // l'envoyer dans la collection user
          await setDoc(userRef, newUser);

          // le dispatch dans le store
          dispatch(
            loginUser({
              id: user.uid,
              ...newUser
            })
          );
          toast.success("Welcome to Kimia Shopping 👏");
          // ensuite le rediriger si tout est okay
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }


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
          <h2 className="text-2xl font-bold">Login</h2>
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
          <p className="text-center">Don't have an account yet?</p>
          <button
            className="flex items-center gap-2 p-1 border-2 border-white rounded-full"
            onClick={() => navigate("/register")}
          >
            <span className="italic text-pink-500">Create an account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
