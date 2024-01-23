import { useState, useEffect } from "react";
import paginate from "../../pages/Products/Uitils";

const url = "http://localhost:3000/products";

export const Fetchapi = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
