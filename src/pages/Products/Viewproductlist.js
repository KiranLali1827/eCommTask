// import React, { useState, useEffect } from "react";

// import './Viewproductlist.scss'

// import { Button } from "@material-ui/core";

// import Productviewdeatils from "./Productviewdeatils";
// import { Fetchapi } from "../../components/Network/Fetchapi";


// function Viewproductlist() {
//   const { loading, data } = Fetchapi();
//   const [page, setPage] = useState(0);
//   const [details, setDetails] = useState([]);
//   const [filterBool, setFilterBool] = useState(false);
//   const [handleFilterStyle, setHandleFilterStyle] = useState("Without_Filter_container");

//   useEffect(() => {
//     if (loading) return;
//     setDetails(data[page]);
//   }, [loading, page]);

//   const handlePage = (index) => {
//     setPage(index);
//   };

//   const FilterButtonClick = () => {
//    // alert('Hello Filter Button')
//     if (window.confirm('Condtion is product price is price > "6000"'))
//     {
//       setFilterBool(true)
//       setHandleFilterStyle("With_Filter_container")
//     } else { }
//   };

//   const FilterClearButtonClick = () => {
//     //alert('Hello Clear_Filter Button')
//     setFilterBool(false)
//     setHandleFilterStyle("Without_Filter_container")
    
//   };

//   return (
    
//     <main>
//       <div className="section-title">
//         <h1>{loading ? "loading..." : ""}</h1>

       
//       </div>
//       <section className="DashboardSection">
//         {console.log("handleFilterStyle", details)}
//         {/* <div className={handleFilterStyle}>
//           {details.map((details) => {
//             return <Productviewdeatils key={details.id} {...details} Obj={details} filterBoolValue={filterBool}/>;
//           })}
//         </div> */}
//         {/* Filter */}
//         <div className="btn-container">
         
//           {loading
//             ? null
//             : data.map((item, index) => {
//                 return (
//                   <button
//                     key={index}
//                     className={`page-btn ${
//                       index === page ? "active-btn" : null
//                     }`}
//                     onClick={() => {
//                       handlePage(index);
//                     }}
//                   >
//                     {index + 1}
//                   </button>
//                 );
//               })}
         
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Viewproductlist;



// src/ProductList.js

import React, { useState, useEffect } from "react";
import "../Products/Viewproductlist.scss"; // Import CSS for styling
import productsData from "../Products/products.json";


const Viewproductlist = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 8; // Number of products per page

  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);
      // Simulate fetching data from API
      setTimeout(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedProducts = productsData.slice(
          startIndex,
          startIndex + itemsPerPage
        );
        setProducts(paginatedProducts);
        setTotalPages(Math.ceil(productsData.length / itemsPerPage));
        setLoading(false);
      }, 500); // Simulating delay
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-list-container">
      <div className="product-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="product-description">{`Product Name : ${"Apple Macbook Pro"}`}</p>
                <p className="product-price">{`Price : ${product.price.toFixed(2)}`}</p>
                <button>View Details</button>
              </div>
            </div>
          ))
        )}
      </div>
      {!loading && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            {currentPage} of {totalPages}
          </span>
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Viewproductlist;
