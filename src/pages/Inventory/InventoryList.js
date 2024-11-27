import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/primereact.min.css";
import './InventoryList.scss'

const InventoryList = () => {
  const [globalFilter, setGlobalFilter] = useState(""); // State for global search
  const [products] = useState([
    {
      id: "C19801",
      description: "10 oz. mug",
      name: "Tea Mug",
      price: "$8.00",
      location: "Main Storage",
      locationClass: "orange-badge",
    },
    {
      id: "R85929",
      description: "5 oz. mug",
      name: "Small Tea Mug",
      price: "$7.00",
      location: "Storage A",
      locationClass: "pink-badge",
    },
    {
      id: "R293984",
      description: "11 inch round plate",
      name: "Grey Porcelain Plate",
      price: "$5.50",
      location: "Storage C",
      locationClass: "purple-badge",
    },
    // Add more data as needed
  ]);

  // Badge Template for Stock Location
  const locationTemplate = (rowData) => {
    return (
      <span className={`badge ${rowData.locationClass}`}>
        {rowData.location}
      </span>
    );
  };

  return (
    <div className="inventory-list">
      <div className="header">
        <h2>Inventory List</h2>
        <div className="search-bar">
          <InputText
            type="search"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search"
          />
          <Button icon="pi pi-filter" label="Filter" className="p-button-outlined" />
        </div>
      </div>

      <DataTable
        value={products}
        paginator
        rows={5}
        globalFilter={globalFilter}
        header=""
        stripedRows
      >
        <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
        <Column field="id" header="ID" sortable />
        <Column field="description" header="Product Description" sortable />
        <Column field="name" header="Product Name" sortable />
        <Column field="price" header="Unit Price" sortable />
        <Column
          field="location"
          header="Stock Location"
          body={locationTemplate}
          sortable
        />
      </DataTable>
    </div>
  );
};

export default InventoryList;
