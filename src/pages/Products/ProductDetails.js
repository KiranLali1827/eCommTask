import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const ProductDetails = () => {
  // Simulated product data
  const product = {
    name: "Sample Product",
    price: 99.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium turpis eget ligula vehicula.",
    mainImage: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    subImages: [
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    ],
  };

  const { name, price, description, mainImage, subImages } = product;

  const [currentImage, setCurrentImage] = useState(mainImage);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
      
        <div className="product-detail-container">

<div className="product-images">
  <div className="main-image">
    <img src={currentImage} alt={name} className="main-product-image" />
  </div>
  <div className="sub-images">
    {subImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={name}
        className="sub-product-image"
        onClick={() => handleImageChange(image)}
      />
    ))}
  </div>
</div>
<div className="product-info">
  <h2>{name}</h2>
  <p className="product-description">{description}</p>
  <p className="product-price">${price.toFixed(2)}</p>
</div>
</div>
      </div>
    </div>

   
  );
};

export default ProductDetails;
