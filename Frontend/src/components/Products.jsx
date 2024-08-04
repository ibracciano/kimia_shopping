import { AiFillProduct } from "react-icons/ai";
import ProductCard from "./ProductCard";
import { Player } from "@lottiefiles/react-lottie-player";
import Loader from "../assets/loader.json";

const Products = ({ items, loading }) => {
  // console.log(items)
  return (
    <section>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <h1 className="flex items-center gap-1 mb-10 text-3xl">
          <AiFillProduct style={{ color: "pink" }} />
          <span style={{ color: "pink" }}>Our Products</span>
        </h1>

        {loading && (
          <Player
            autoplay
            loop
            src={Loader}
            style={{ height: "300px", width: "300px" }}
          />
        )}

        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {!loading &&
            items.map((item) => <ProductCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
