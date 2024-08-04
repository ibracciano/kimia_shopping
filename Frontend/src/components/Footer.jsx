import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-100 ">
      <div className="w-[90%] md:w-[80%] mx-auto py-10 flex flex-col justify-between md:flex-row items-center gap-5">
        {/* partie 1 du footer */}
        <div className="w-full md:w-[30%]">
          {/* logo */}
          <Link to="" className="flex items-center mb-5">
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

          {/* les informations */}
          {/* <div className="my-3">
            <p>
              <span className="font-semibold">Location : </span>
              <span>Abidjan, Yopougon Gesco</span>
            </p>
            <p>
              <span className="font-semibold">Contact : </span>
              <span>+2250747850762</span>
            </p>
            <p>
              <span className="font-semibold">Email : </span>
              <span>kimia@gmail.com</span>
            </p>
          </div> */}

          {/* la localisation */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3972.3549277289426!2d-4.100076326344879!3d5.362705094616075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sci!4v1721668199698!5m2!1sfr!2sci"
              //   width="400"
              //   height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* partie 2 du footer */}

        {/* les liens */}
        <div className="flex flex-col md:items-center gap-5 w-full md:w-[30%] border-y py-3 md:py-0 border-pink-500 md:border-none">
          <h2 className="font-bold">Utils Links</h2>
          <ul className="grid grid-cols-2 gap-3 font-semibold md:grid-cols-1 lg:gap-7">
            <li className="liHover">
              <NavLink
                to=""
                className={({ isActive }) => (isActive ? "text-pink-500" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="liHover">
              <NavLink
                to="shop"
                className={({ isActive }) => (isActive ? "text-pink-500" : "")}
              >
                Shop
              </NavLink>
            </li>
            <li className="liHover">
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
              </NavLink>
            </li>
            <li className="liHover">
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
              </NavLink>
            </li>
          </ul>
        </div>

        {/* partie 3 du footer */}
        <div className="w-full md:w-[30%]">
          <h2 className="mb-5 font-bold">Contact Us</h2>
          <form>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Name
                <input
                  type="text"
                  name="name"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Your Name"
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Email
                <input
                  type="email"
                  name="email"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-50"
                  placeholder="Your Email"
                />
              </label>
            </div>
            <button
              type="submit"
              className="px-2 py-1 font-semibold text-white bg-pink-600 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
