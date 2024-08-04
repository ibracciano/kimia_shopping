import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  removeTocart,
  resetCart,
} from "../toolkit/slices/cartSlice";
import { RxCrossCircled } from "react-icons/rx";
// import Banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

// Importer la librairie de Stripe
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  // recuperation des elements du tableau products
  const { products, userInfo } = useSelector((state) => state.cart);
  // console.log(products);
  // console.log(userInfo);

  const dispatch = useDispatch();

  // function pour le payement du tableau products
  async function handleCheckOut() {
    if (userInfo) {
      const stripe = await loadStripe(
        "pk_test_51Mjm9UAfv3OviZVXB8r0oNRX0cT0Xkxt5MSlfv6YTGrdKV2SpTDwA3DaqtRa1qEdopEtDlWZxXjBmFd8EFteiUU500d4nvgIWL"
      );
      const response = await axios.post(
        "http://localhost:8000/api/create-checkout-session",
        {
          products,
        }
      );
      const result = stripe.redirectToCheckout({
        sessionId: response.data.id,
      });
      if (result.error) {
        console.log(result.error);
      }
    } else {
      toast.error("Please sign in to Checkout");
    }
  }

  return (
    <main className="mt-20">
      <div>
        <h1 className="h-[100px] w-full bg-pink-700 flex items-center justify-center text-2xl font-bold text-white">
          My Cart
        </h1>
        {/* <img src={Banner} alt="" className="h-[100px] w-full object-cover" /> */}
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-24">
            <p>Your cart is Empty</p>
            <p className="mt-10">
              <Link to="/" className="italic text-pink-500 ">
                &larr; Go to Shopping
              </Link>
            </p>
          </div>
        ) : (
          <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row justify-between mx-auto gap-10">
            {/* produits dans un tableau */}
            <div className="w-full md:w-[70%] bg-gray-50 mt-10 md:px-10 px-2 py-5 rounded-md space-y-5 text-[9px] md:text-base">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-start justify-start text-center w-[20%] h-[20%] bg-white">
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-full h-full mx-auto border border-gray-200"
                    />
                  </div>

                  <p className="text-center">
                    {`${product.title.substring(0, 8)}...`}
                  </p>

                  <p className="text-center">{product.price.toFixed(2)}</p>
                  <p className="flex items-center gap-2 text-center">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 p-1 bg-gray-300 rounded-full cursor-pointer"
                      onClick={() => dispatch(decrement(product))}
                    >
                      -
                    </span>
                    <span>{product.quantity}</span>
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 p-1 bg-gray-300 rounded-full cursor-pointer"
                      onClick={() => dispatch(increment(product))}
                    >
                      +
                    </span>
                  </p>
                  <p className="text-center">
                    {product.price * product.quantity}
                  </p>
                  <p className="text-center">
                    <button
                      onClick={() =>
                        dispatch(removeTocart(product.id)) &
                        toast.error(`${product.title} removed successfully`)
                      }
                      className="text-xl text-pink-500"
                    >
                      <RxCrossCircled />
                    </button>
                  </p>
                </div>
              ))}
            </div>

            {/* proceder au paiement */}
            <div className="w-full md:w-[30%] bg-white p-2 md:mt-10 shadow-sm shadow-pink-100 justify-self-start ">
              <h2 className="mb-5 font-bold text-pink-500">Cart Total</h2>

              <p>Articles : {products.length} </p>

              <div className="font-bold text-pink-500 ">
                Sub-total: $
                {products
                  .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                  .toFixed(2)}{" "}
              </div>

              {/* promo code */}
              <div className="my-5">
                <h3>Code promo</h3>
                <form className="flex flex-col gap-5 md:flex-row">
                  <input
                    type="text"
                    placeholder="Enter your code"
                    className="border border-gray-200 outline-none"
                  />
                  <button className="w-full h-10 font-bold text-white bg-black">
                    Apply
                  </button>
                </form>
              </div>

              <button
                className="w-full h-10 mb-5 font-bold text-white bg-pink-500 rounded-md"
                onClick={handleCheckOut}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
        {products.length > 0 && (
          <div className="flex flex-row-reverse items-center justify-between px-5 mt-5 md:justify-end md:px-36 ">
            <button
              className="ml-[5%] md:ml-[10%] bg-pink-500  py-1 px-2 text-white"
              onClick={() =>
                dispatch(resetCart()) &
                toast.error("Oups ! Your cart is empty!")
              }
            >
              reset cart
            </button>{" "}
            <p>
              <Link to="/" className="italic text-pink-500 ">
                &larr; Go to Shopping{" "}
              </Link>
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
