import { useEffect } from "react";
import Confetti from "react-confetti";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../toolkit/slices/cartSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";


const PaymentDone = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const { products, userInfo } = useSelector(state => state.cart);

    const height = window.screen.height;
    const width = window.screen.width;

    // fonction pour mettre les achats dans la base de données
    async function sentPurchases() {
        // référence de la collection purchases
        const purchasesCollectionRef = collection(db, "purchases");

        try {
            if (products.length > 0) {
                await addDoc(purchasesCollectionRef, {
                    products: products,
                    buyer: userInfo,
                    timestamp: serverTimestamp(),
                });
                toast.success("Your purchases have been recorded successfully!");
            } else {
                return;
            }
        } catch (error) {
            toast.error(error);
        }

    }




    // vider le panier après achat
    useEffect(() => {
        if (location.search.includes("session_id")) {
            sentPurchases();
            dispatch(resetCart());
        } else {
            navigate("/")
        }
    }, [dispatch, location.search]);

    return (
        <>
            <div className='h-[700px] flex items-center justify-center'>
                <h1 className='text-[40px] font-[600] text-red-400 animate-bounce'>
                    Thank You for your purchases !! 🙏😊
                </h1>
                <Confetti width={width} height={height} />
            </div>
        </>
    );
};

export default PaymentDone;
