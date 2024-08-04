import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { getProducts } from "../utils/hooks";
import Products from "../components/Products";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(data);

  // recuperation des données
  const getData = async () => {
    try {
      const items = await getProducts()
      setData(items)

      setTimeout(() => {
        setLoading(false)
      }, 2000);
    } catch (error) {
      throw new Error(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <div>
      <div>
        <Banner />
        <div className="mt-20">
          <Products items={data} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Home;
