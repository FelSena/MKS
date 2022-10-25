import { useEffect, useState } from "react";
import { Row } from "../../styles/globals";
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
    <Row
      wrap="wrap"
      margin="3.5% 5%"
      width="90%"
      gap="10px"
      justify="flex-start"
    >
      {mounted ? (
        <>
          {productList.map((item) => (
            <Item key={item.id} item={item} type="store" />
          ))}
        </>
      ) : (
        <>
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </>
      )}
    </Row>
  );
};

export default ProductsList;
