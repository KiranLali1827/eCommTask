import React, { useState, useEffect } from "react";

import './Viewproductlist.scss'

import { Button } from "@material-ui/core";

import Productviewdeatils from "./Productviewdeatils";
import { Fetchapi } from "../../components/Network/Fetchapi";


function Viewproductlist() {
  const { loading, data } = Fetchapi();
  const [page, setPage] = useState(0);
  const [details, setDetails] = useState([]);
  const [filterBool, setFilterBool] = useState(false);
  const [handleFilterStyle, setHandleFilterStyle] = useState("Without_Filter_container");

  useEffect(() => {
    if (loading) return;
    setDetails(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const FilterButtonClick = () => {
   // alert('Hello Filter Button')
    if (window.confirm('Condtion is product price is price > "6000"'))
    {
      setFilterBool(true)
      setHandleFilterStyle("With_Filter_container")
    } else { }
  };

  const FilterClearButtonClick = () => {
    //alert('Hello Clear_Filter Button')
    setFilterBool(false)
    setHandleFilterStyle("Without_Filter_container")
    
  };

  return (
    
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : ""}</h1>

       
      </div>
      <section className="DashboardSection">
        {console.log("handleFilterStyle", handleFilterStyle)}
        <div className={handleFilterStyle}>
          {details.map((details) => {
            return <Productviewdeatils key={details.id} {...details} Obj={details} filterBoolValue={filterBool}/>;
          })}
        </div>
        {/* Filter */}
        <div className="btn-container">
         
          {loading
            ? null
            : data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`page-btn ${
                      index === page ? "active-btn" : null
                    }`}
                    onClick={() => {
                      handlePage(index);
                    }}
                  >
                    {index + 1}
                  </button>
                );
              })}
         
        </div>
      </section>
    </main>
  );
}

export default Viewproductlist;
