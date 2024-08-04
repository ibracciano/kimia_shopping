import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { auth, db } from "../config/firebase"
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

export const getProducts = async () => {
    // reference de la collection products
    const productsRef = collection(db, "products"); // le collection est pour referencer une collection
    // console.log(productsRef);
    try {

        // récupération des données de la collection products
        const products = await getDocs(productsRef)
        // console.log(products);

        // filtrage des données de la collection products
        const productsFilter = products.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        // console.log(productsFilter);

        // renvoi des données de la collection products
        return productsFilter
    } catch (error) {
        throw new Error(error.message)
    }
}

export const isAdmin = async () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
            toast.warning("Please sign in first")
            setTimeout(() => {
                // rediriger vers la page login mais pas de navigate car nous n'avons pas de JSX
                window.location.href = "/";
            }, 300);
        } else {
            getRole(user.uid)
        }
    });

    const getRole = async (id) => {
        // récupérer le rôle du user
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef)
        const role = docSnap.data().isAdmin;
        // console.log(role)
        if (!role) {
            toast.error("Page reserved for admin")
            setTimeout(() => {
                // rediriger vers la page login mais pas de navigate car nous n'avons pas de JSX
                window.location.href = "/";
            }, 500);
        }
        unsubscribe()
    }
    return null;

}