import { BsPlus } from "react-icons/bs";
// import { CiHeart } from "react-icons/ci";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../toolkit/slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // naviguer vers les détails du produit après click
  // -- pour recuperer le state est d'utiliser le hook useLocation
  const goToProduct = (doc) => {
    const slug = doc.title.toLowerCase().split(" ").join("-");
    navigate(`/product/${slug}`, { state: { item: doc } });
    // console.log(item)

  };

  // console.log(item);

  return (
    <div>
      <div className="relative px-2 py-4 transition-all duration-700 shadow hover:shadow-pink-100 hover:scale-105 group">
        <img src={item.thumbnail} alt={item.name} />
        <h3>{item.title.substring(0, 15)}</h3>
        <div className="flex justify-between">
          <span className="font-bold text-pink-500">{item.price}$</span>
          <div className="flex gap-2 transition-all duration-700 opacity-0 group-hover:opacity-100">
            <button
              className="p-1 text-white transition-all duration-700 bg-pink-500 rounded-full hover:bg-pink-600 hover:rotate-180"
              onClick={() => goToProduct(item)}
            >
              <IoEyeSharp />
            </button>
            <button
              className="p-1 text-white transition-all duration-700 bg-pink-500 rounded-full hover:bg-pink-600 hover:rotate-180"
              onClick={() =>
                dispatch(addToCart({ ...item, quantity: 1 })) &
                toast.success(`${item.title} is added to cart`)
              }
            >
              <BsPlus />
            </button>
            {/* <button className="p-1 text-white transition-all duration-700 bg-pink-500 rounded-full hover:bg-pink-600 hover:rotate-[360deg]">
              <CiHeart />
            </button> */}
          </div>
        </div>
        <div className="absolute flex gap-2 transition-all duration-700 opacity-0 top-2 group-hover:opacity-100">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="px-1 text-sm font-medium text-white bg-pink-200 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
