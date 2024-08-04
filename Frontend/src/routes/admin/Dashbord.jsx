import { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import Loader from "../../assets/loader.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { toast } from "react-toastify";
import { getProducts } from "../../utils/hooks";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    // collecter des produits
    async function collectItems() {
        try {
            const data = await getProducts();
            setTimeout(() => {
                setProducts(data);
                setLoading(false);
            }, 500);
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        collectItems();
    }, []);

    // supprimer des produits 
    async function deleteProduct(id) {
        const docRef = doc(db, "products", id);
        try {
            await deleteDoc(docRef);
            collectItems();
            setTimeout(() => {
                toast.success("Item Successfully Removed 😊");
            }, 1000);
        } catch (error) {
            toast.error(error.code);
        }
    }


    return (
        <div className="mt-[10vh]">
            {loading ? (
                <Player
                    autoplay
                    loop
                    src={Loader}
                    style={{ height: "300px", width: "300px" }}
                ></Player>
            ) : (
                <AllProducts products={products} deleteProduct={deleteProduct} />
            )}
        </div>
    );
};

export default Dashboard;
