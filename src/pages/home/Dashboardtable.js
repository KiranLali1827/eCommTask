import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { BlockUI } from 'primereact/blockui'; // Import BlockUI
import { SelectButton } from 'primereact/selectbutton';
import data from './customer.json'; // Adjust path if needed
import './home.scss';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination state
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [totalRecords, setTotalRecords] = useState(0);

  // Sorting state
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState(1);

  useEffect(() => {
    // Hardcoded years from 2025 to 2030
    const availableYears = ['2023','2024','2025', '2026', '2027', '2028', '2029'];
    setYears(availableYears);
  }, []);

  useEffect(() => {
    if (selectedYear) {
      setFirst(0); // Reset pagination to the first page
      loadPageData(0, rows, sortField, sortOrder, searchTerm); // Load the first page of the selected year
    }
  }, [selectedYear]);

  const loadPageData = (start, pageSize, field, order, search) => {
    setLoading(true);

    setTimeout(() => {
      if (data[selectedYear]) {
        // Flatten the data for the selected year
        const yearData = Object.values(data[selectedYear]).flatMap((month) =>
          Object.values(month)
        );

        // Apply search filter
        const filteredData = yearData.filter((item) => {
          const searchInFields = ['name', 'mobile', 'Brand', 'purpose', 'date'];
          return searchInFields.some((field) =>
            item[field]?.toLowerCase().includes(search.toLowerCase())
          );
        });

        // Sort the data if a sort field is specified
        if (field) {
          filteredData.sort((a, b) => {
            const valueA = a[field] || '';
            const valueB = b[field] || '';
            return order * valueA.localeCompare(valueB, undefined, { numeric: true });
          });
        }

        // Calculate and set total records after filtering
        setTotalRecords(filteredData.length);

        // Slice the data for the current page
        const pageData = filteredData.slice(start, start + pageSize);
        setCustomers(pageData);
      } else {
        setCustomers([]);
        setTotalRecords(0);
      }
      setLoading(false);
    }, 1000); // Simulate network delay
  };

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    loadPageData(event.first, event.rows, sortField, sortOrder, searchTerm); // Load the new page data
  };

  const onSort = (event) => {
    const { sortField, sortOrder } = event;
    setSortField(sortField);
    setSortOrder(sortOrder);

    // Reload data with the new sort parameters
    loadPageData(first, rows, sortField, sortOrder, searchTerm);
  };

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setFirst(0); // Reset pagination to the first page when search changes
    loadPageData(0, rows, sortField, sortOrder, e.target.value); // Reload the data with the search term
  };

  return (
    <div className="datatable-container">
      <div className="table-card">
        {/* Year Dropdown styled like a button */}
        <div className="select-year-container">
          <label>Select Year</label>
          <SelectButton
            value={selectedYear}
            options={years}
            onChange={(e) => setSelectedYear(e.value)}
            placeholder="Select Year"
            className="year-dropdown"
          />
        </div>

        {/* Search Box with Icon */}
        <div className="search-box">
          <input
            type="text"
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search"
            className="search-input"
          />
        </div>

        {/* BlockUI Loader */}
        <BlockUI blocked={loading} className="blockui-loader">
          {/* Loader with message */}
          {loading && (
            <div className="loader-container">
              <h3>Loading...</h3>
            </div>
          )}

          {/* DataTable */}
          {!loading && (
            <DataTable
              value={customers}
              paginator
              rows={rows}
              first={first}
              totalRecords={totalRecords}
              onPage={onPageChange}
              onSort={onSort}
              lazy
              sortField={sortField}
              sortOrder={sortOrder}
              className="p-datatable-gridlines"
            >
              <Column field="name" header="Name" sortable />
              <Column field="mobile" header="Mobile" sortable />
              <Column field="Brand" header="Brand" sortable />
              <Column field="purpose" header="Purpose" sortable />
              <Column field="date" header="Date" sortable />
            </DataTable>
          )}
        </BlockUI>
      </div>
    </div>
  );
};

export default App;




