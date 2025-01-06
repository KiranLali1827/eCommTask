// import React, { useState } from "react";
// import "./home.scss"; // Custom CSS for styles

// const DashboardCards = () => {
//   const [selectedSection, setSelectedSection] = useState("myMVPs"); // Default selected section

//   const renderCard = (title, value, background) => (
//     <div className="card-container" style={{ background }}>
//       <span className="card-title">{title}</span>
//       <h2 className="card-value">{value}</h2>
//     </div>
//   );

//   return (
//     <div className="dashboard-container">
//       {/* My MVPs Section */}
//       <div
//         className={`section ${selectedSection === "myMVPs" ? "active" : ""}`}
//         onClick={() => setSelectedSection("myMVPs")}
//       >
//         <h3>My MVPs</h3>
//         <div className="card-row">
//           {renderCard("In Progress", 0, "#E8F4FC")}
//           {renderCard("Completed", 0, "#D4F5D3")}
//           {renderCard("Need Clarification", 0, "#FCE8E8")}
//         </div>
//         {selectedSection === "myMVPs" && <div className="arrow"></div>}
//       </div>

//       {/* Group MVPs Section */}
//       <div
//         className={`section ${selectedSection === "groupMVPs" ? "active" : ""}`}
//         onClick={() => setSelectedSection("groupMVPs")}
//       >
//         <h3>Group MVPs</h3>
//         <div className="card-row">
//           {renderCard("Open", 180, "#F3F3F3")}
//           {renderCard("In Progress", 77, "#E8F4FC")}
//           {renderCard("Completed", 7, "#D4F5D3")}
//         </div>
//         {selectedSection === "groupMVPs" && <div className="arrow"></div>}
//       </div>
//     </div>
//   );
// };

// export default DashboardCards;



import React, { useState } from "react";
import "./home.scss"; // Custom CSS for styles

const DashboardCards = () => {
  const [selectedSection, setSelectedSection] = useState("myMVPs"); // Default selected section

  const renderCard = (title, value, background) => (
    <div className="card-container" style={{ background }}>
      <span className="card-title">{title}</span>
      <h2 className="card-value">{value}</h2>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* My MVPs Section */}
      <div
        className={`section ${selectedSection === "myMVPs" ? "active" : ""}`}
        onClick={() => setSelectedSection("myMVPs")}
      >
        <h3>Bussiness Section</h3>
        <div className="card-row">
          {renderCard("In Progress", 0, "#E8F4FC")}
          {renderCard("Completed", 0, "#D4F5D3")}
          {renderCard("Need Clarification", 0, "#FCE8E8")}
        </div>
        {selectedSection === "myMVPs" && <div className="arrow"></div>}
      </div>

      {/* Group MVPs Section */}
      <div
        className={`section ${selectedSection === "groupMVPs" ? "active" : ""}`}
        onClick={() => setSelectedSection("groupMVPs")}
      >
        <h3>Customer Section</h3>
        <div className="card-row">
          {renderCard("In Progress", 120, "#E8F4FC")}
          {renderCard("Completed", 20, "#D4F5D3")}
          {renderCard("Need Clarification", 10, "#FCE8E8")}
        </div>
        {selectedSection === "groupMVPs" && <div className="arrow"></div>}
      </div>
    </div>
  );
};

export default DashboardCards;
