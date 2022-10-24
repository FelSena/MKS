import { useEffect, useState } from "react";
import API from "../API";
import Item from "../Item";
import Shimmer from "../Shimmer";

export interface Product {
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
            <Item key={item.id} item={item} type="store" />
          ))}
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default ProductsList;
