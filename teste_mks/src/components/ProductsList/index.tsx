import { useEffect, useState } from "react";
import API from "../API";
import Shimmer from "../Shimmer";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

const ProductsList = () => {
  const [mounted, setMounted] = useState(false);
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    API.get("")
      .then((res) => {
        setProductList(res.data.products);
        setMounted(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {mounted ? (
        <div>
          {productList.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default ProductsList;
