import React, { useState, useEffect } from "react";
import { Fetchapi } from "../Network/Fetchapi";
import Viewdetails from "./Viewdetails";
import './Dashboard.scss'
import { Button } from "@material-ui/core";
import filterimg from '../Filter_Img.png'
import filter_Clear from '../Filter_Clear.png'

function Dashboard() {
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

        <div className="Filter_Button_Style">
        <Button onClick={FilterButtonClick}><img className="Clear_Button_Img" src={filterimg} width="50" height= "50px" /></Button> 
        <Button className="btn" onClick={FilterClearButtonClick}><img className="Filter_Button_Img" src={filter_Clear} width="50" height= "50px" /></Button>
        
        </div>
       
      </div>
      <section className="DashboardSection">
        {console.log("handleFilterStyle", handleFilterStyle)}
        <div className={handleFilterStyle}>
          {details.map((details) => {
            return <Viewdetails key={details.id} {...details} Obj={details} filterBoolValue={filterBool}/>;
          })}
        </div>
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

export default Dashboard;
