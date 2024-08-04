import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
// import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Profil from "../assets/profile.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";
import { logoutUser, resetCart } from "../toolkit/slices/cartSlice";
import { FaUserCircle, FaUserSlash } from "react-icons/fa";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  // fermer le menu icon quand on change de route
  const location = useLocation();
  // console.log(location);
  useEffect(() => {
    setIsOpenLogin(false);
  }, [location]);

  const { products, userInfo } = useSelector((state) => state.cart);
  // console.log(userInfo);

  const dispatch = useDispatch();

  // console.log(products);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Toggle Login function
  const toggleLogin = () => {
    setIsOpenLogin(!isOpenLogin);
  };

  // se deconnecter
  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logoutUser());
        dispatch(resetCart());
        toast.error("Bye 🤚");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-black">
      <div className="py-3 w-[90%] lg:w-[80%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="" className="flex items-center">
          <p className="flex items-center justify-center w-12 h-12 p-1 mr-1 text-4xl font-bold text-white bg-pink-500 rounded-full">
            K
          </p>
          <p className="text-2xl font-bold md:text-lg">
            <span className="text-pink-500">i</span>
            <span className="dark:text-white">m</span>
            <span className="text-pink-500">i</span>
            <span className="dark:text-white">a</span>
          </p>
        </Link>

        {/* links and forms for destop*/}
        <div className="hidden md:flex lg:gap-14 md:gap-5">
          <ul className="flex items-center font-semibold lg:gap-10 md:gap-3 dark:text-white">
            <li className="liHover">
              <NavLink
                to=""
                className={({ isActive }) => (isActive ? "text-pink-500" : "")}
              >
                Home
              </NavLink>
            </li>

            {/* <li className="relative liHover">
              <NavLink
                to="favorite"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 text-pink-500"
                    : "flex items-center gap-1"
                }
              >
                <HiOutlineShoppingBag />
                <span>favorite</span>
                <span className="absolute flex items-center justify-center w-5 h-5 text-white bg-pink-700 rounded-full -top-3 -right-3">
                  0
                </span>
              </NavLink>
            </li> */}
            <li className="relative liHover">
              <NavLink
                to="cart"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 text-pink-500"
                    : "flex items-center gap-1"
                }
              >
                <IoCartOutline />
                <span>Cart</span>
                <span className="absolute flex items-center justify-center w-5 h-5 text-white bg-pink-700 rounded-full -top-3 -right-3">
                  {products.length}
                </span>
              </NavLink>
            </li>
          </ul>

        </div>

        {/* links and forms for mobile */}
        {isOpenMenu && (
          <div className="flex flex-col items-center gap-5 lg:hidden absolute bg-white top-[72px] right-0 w-full py-2 dark:bg-black ">
            <ul className="flex flex-col items-center gap-5 py-2 font-semibold dark:text-white ">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? "text-pink-500" : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* <li className="relative">
                <NavLink
                  to="favorite"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 text-pink-500"
                      : "flex items-center gap-1"
                  }
                >
                  <HiOutlineShoppingBag />
                  <span>favorite</span>
                  <span className="absolute flex items-center justify-center w-5 h-5 text-white bg-pink-700 rounded-full -top-3 -right-3">
                    0
                  </span>
                </NavLink>
              </li> */}
              <li className="relative">
                <NavLink
                  to="cart"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 text-pink-500"
                      : "flex items-center gap-1"
                  }
                >
                  <IoCartOutline />
                  <span>Cart</span>
                  <span className="absolute flex items-center justify-center w-5 h-5 text-white bg-pink-700 rounded-full -top-3 -right-3">
                    {products.length}
                  </span>
                </NavLink>
              </li>
            </ul>

          </div>
        )}

        <div className="flex gap-5">
          {/* login*/}
          <button
            className="relative flex items-center gap-1"
            onClick={toggleLogin}
          >
            <span>{userInfo ? userInfo.name : ""}</span>
            <img
              src={userInfo ? userInfo.image : Profil}
              alt=""
              className="w-8 h-8 border-2 border-pink-500 rounded-full"
            />
            {isOpenLogin && (
              <div className="absolute right-0 flex flex-col items-start px-2 py-1 bg-white shadow-md top-12">
                <Link
                  to="/register"
                  className="inline-flex items-center w-full gap-2 font-medium text-pink-500 rounded-sm hover:bg-pink-100 text-start"
                >
                  <FaUserSlash />
                  <span>Register</span>
                </Link>

                <Link
                  to="/login"
                  className="inline-flex items-center w-full gap-2 font-medium text-pink-500 rounded-sm hover:bg-pink-100 text-start"
                >
                  <FaUserCircle />
                  <span>Login</span>
                </Link>
                <span
                  className="inline-block w-full font-medium text-pink-500 rounded-sm hover:bg-pink-100 text-start"
                  onClick={handleLogout}
                >
                  Logout
                </span>
                {/* Affichage du dashboard si Admin */}
                {userInfo && userInfo.isAdmin && (
                  <Link
                    to="/dashboard"
                    className="inline-block w-full font-medium text-pink-500 rounded-sm hover:bg-pink-100 text-start"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            )}
          </button>

          {/* burger menu */}
          <button className="text-black md:hidden" onClick={toggleMenu}>
            {isOpenMenu ? <RxCross1 size={30} /> : <CiMenuFries size={30} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
