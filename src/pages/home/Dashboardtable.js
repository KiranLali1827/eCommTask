// import React, { useState } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { InputText } from 'primereact/inputtext';
// import { Paginator } from 'primereact/paginator';
// import './home.scss';

// const App = () => {
//   const [customers, setCustomers] = useState([
//     {
//       customer: 'Ralph Edwards',
//       phone: '(405) 555-0128',
//       status: 'Open',
//       rate: '$78.00',
//       balance: '-$105.55',
//       deposit: '$293.01',
//     },
//     {
//       customer: 'Floyd Miles',
//       phone: '(480) 555-0103',
//       status: 'Paid',
//       rate: '$40.00',
//       balance: '$275.43',
//       deposit: '$710.68',
//     },
//     {
//       customer: 'Darlene Robertson',
//       phone: '(808) 555-0111',
//       status: 'Open',
//       rate: '$77.00',
//       balance: '-$778.35',
//       deposit: '$169.43',
//     },
//     {
//       customer: 'Albert Flores',
//       phone: '(316) 555-0116',
//       status: 'Inactive',
//       rate: '$85.00',
//       balance: '$928.41',
//       deposit: '$779.58',
//     },
//   ]);

//   const [searchValue, setSearchValue] = useState('');
//   const [first, setFirst] = useState(0);
//   const [rows, setRows] = useState(3);

//   const filteredData = customers.filter((customer) =>
//     Object.values(customer).some((value) =>
//       value.toLowerCase().includes(searchValue.toLowerCase())
//     )
//   );

//   return (
//     <div className="datatable-container">
//       <div className="table-card">
//         {/* <div className="table-header">Customer Data Table</div> */}

//         {/* Search Input */}
//         <div className="p-inputgroup search-box">
//           <span className="p-inputgroup-addon">
//             <i className="pi pi-search"></i>
//           </span>
//           <InputText
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             placeholder="Search..."
//           />
//         </div>

//         {/* DataTable */}
//         <DataTable
//           value={filteredData.slice(first, first + rows)}
//           paginator
//           rows={rows}
//           resizableColumns
//           className="p-datatable-gridlines"
//         >
//           <Column
//             field="customer"
//             header="Customer"
//             sortable
//             body={(data) => (
//               <>
//                 <div>{data.customer}</div>
//                 <small>{data.phone}</small>
//               </>
//             )}
//           ></Column>

//           <Column
//             field="status"
//             header="Status"
//             sortable
//             body={(data) => (
//               <span className={`status-badge status-${data.status.toLowerCase()}`}>
//                 {data.status}
//               </span>
//             )}
//           ></Column>

//           <Column field="rate" header="Rate" sortable></Column>
//           <Column field="balance" header="Balance" sortable></Column>
//           <Column field="deposit" header="Deposit" sortable></Column>
//         </DataTable>

//         {/* Pagination */}
//         {/* <Paginator
//           first={first}
//           rows={rows}
//           totalRecords={filteredData.length}
//           onPageChange={(e) => setFirst(e.first)}
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default App;






// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Dropdown } from 'primereact/dropdown';
// import { ProgressSpinner } from 'primereact/progressspinner';
// import { InputText } from 'primereact/inputtext';
// import { FaSearch } from 'react-icons/fa';  // Import search icon from react-icons
// import data from './customer.json'; // Adjust path if needed
// import './home.scss';

// const App = () => {
//   const [customers, setCustomers] = useState([]);
//   const [years, setYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Pagination state
//   const [first, setFirst] = useState(0);
//   const [rows, setRows] = useState(5);
//   const [totalRecords, setTotalRecords] = useState(0);

//   // Sorting state
//   const [sortField, setSortField] = useState('');
//   const [sortOrder, setSortOrder] = useState(1);

//   useEffect(() => {
//     // Extract available years from the JSON keys
//     const availableYears = Object.keys(data);
//     setYears(availableYears);
//   }, []);

//   useEffect(() => {
//     if (selectedYear) {
//       setFirst(0); // Reset pagination to the first page
//       loadPageData(0, rows, sortField, sortOrder, searchTerm); // Load the first page of the selected year
//     }
//   }, [selectedYear]);

//   const loadPageData = (start, pageSize, field, order, search) => {
//     setLoading(true);

//     setTimeout(() => {
//       if (data[selectedYear]) {
//         // Flatten the data for the selected year
//         const yearData = Object.values(data[selectedYear]).flatMap((month) =>
//           Object.values(month)
//         );

//         // Apply search filter
//         const filteredData = yearData.filter((item) => {
//           const searchInFields = ['name', 'mobile', 'Brand', 'purpose', 'date'];
//           return searchInFields.some((field) =>
//             item[field]?.toLowerCase().includes(search.toLowerCase())
//           );
//         });

//         // Sort the data if a sort field is specified
//         if (field) {
//           filteredData.sort((a, b) => {
//             const valueA = a[field] || '';
//             const valueB = b[field] || '';
//             return order * valueA.localeCompare(valueB, undefined, { numeric: true });
//           });
//         }

//         // Calculate and set total records after filtering
//         setTotalRecords(filteredData.length);

//         // Slice the data for the current page
//         const pageData = filteredData.slice(start, start + pageSize);
//         setCustomers(pageData);
//       } else {
//         setCustomers([]);
//         setTotalRecords(0);
//       }
//       setLoading(false);
//     }, 1000); // Simulate network delay
//   };

//   const onPageChange = (event) => {
//     setFirst(event.first);
//     setRows(event.rows);
//     loadPageData(event.first, event.rows, sortField, sortOrder, searchTerm); // Load the new page data
//   };

//   const onSort = (event) => {
//     const { sortField, sortOrder } = event;
//     setSortField(sortField);
//     setSortOrder(sortOrder);

//     // Reload data with the new sort parameters
//     loadPageData(first, rows, sortField, sortOrder, searchTerm);
//   };

//   const onSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setFirst(0); // Reset pagination to the first page when search changes
//     loadPageData(0, rows, sortField, sortOrder, e.target.value); // Reload the data with the search term
//   };

//   return (
//     <div className="datatable-container">
//       <div className="table-card">
//         {/* Year Dropdown */}
//         <Dropdown
//           value={selectedYear}
//           options={years.map((year) => ({ label: year, value: year }))}
//           onChange={(e) => setSelectedYear(e.value)}
//           placeholder="Select Year"
//           className="year-dropdown"
//         />

//         {/* Search Box with Icon */}
//         <div className="search-box">
//           <FaSearch className="search-icon" />
//           <InputText
//             value={searchTerm}
//             onChange={onSearchChange}
//             placeholder="Search"
//             className="search-input"
//           />
//         </div>

//         {/* Loader or DataTable */}
//         {loading ? (
//           <div className="loader-container">
//             <ProgressSpinner />
//           </div>
//         ) : (
//           <DataTable
//             value={customers}
//             paginator
//             rows={rows}
//             first={first}
//             totalRecords={totalRecords}
//             onPage={onPageChange}
//             onSort={onSort}
//             lazy
//             sortField={sortField}
//             sortOrder={sortOrder}
//             className="p-datatable-gridlines"
//           >
//             <Column field="name" header="Name" sortable />
//             <Column field="mobile" header="Mobile" sortable />
//             <Column field="Brand" header="Brand" sortable />
//             <Column field="purpose" header="Purpose" sortable />
//             <Column field="date" header="Date" sortable />
//           </DataTable>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;





// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { Dropdown } from 'primereact/dropdown';
// import { ProgressSpinner } from 'primereact/progressspinner';
// import { Button } from 'primereact/button'; // Import Button from PrimeReact
// import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons
// import data from './customer.json'; // Adjust path if needed
// import './home.scss';
// import { InputText } from 'primereact/inputtext';


// const App = () => {
//   const [customers, setCustomers] = useState([]);
//   const [years, setYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Pagination state
//   const [first, setFirst] = useState(0);
//   const [rows, setRows] = useState(5);
//   const [totalRecords, setTotalRecords] = useState(0);

//   // Sorting state
//   const [sortField, setSortField] = useState('');
//   const [sortOrder, setSortOrder] = useState(1);

//   useEffect(() => {
//     // Hardcoded years from 2025 to 2030
//     const availableYears = ['2023','2024','2025', '2026', '2027', '2028', '2029', '2030'];
//     setYears(availableYears);
//   }, []);

//   useEffect(() => {
//     if (selectedYear) {
//       setFirst(0); // Reset pagination to the first page
//       loadPageData(0, rows, sortField, sortOrder, searchTerm); // Load the first page of the selected year
//     }
//   }, [selectedYear]);

//   const loadPageData = (start, pageSize, field, order, search) => {
//     setLoading(true);

//     setTimeout(() => {
//       if (data[selectedYear]) {
//         // Flatten the data for the selected year
//         const yearData = Object.values(data[selectedYear]).flatMap((month) =>
//           Object.values(month)
//         );

//         // Apply search filter
//         const filteredData = yearData.filter((item) => {
//           const searchInFields = ['name', 'mobile', 'Brand', 'purpose', 'date'];
//           return searchInFields.some((field) =>
//             item[field]?.toLowerCase().includes(search.toLowerCase())
//           );
//         });

//         // Sort the data if a sort field is specified
//         if (field) {
//           filteredData.sort((a, b) => {
//             const valueA = a[field] || '';
//             const valueB = b[field] || '';
//             return order * valueA.localeCompare(valueB, undefined, { numeric: true });
//           });
//         }

//         // Calculate and set total records after filtering
//         setTotalRecords(filteredData.length);

//         // Slice the data for the current page
//         const pageData = filteredData.slice(start, start + pageSize);
//         setCustomers(pageData);
//       } else {
//         setCustomers([]);
//         setTotalRecords(0);
//       }
//       setLoading(false);
//     }, 1000); // Simulate network delay
//   };

//   const onPageChange = (event) => {
//     setFirst(event.first);
//     setRows(event.rows);
//     loadPageData(event.first, event.rows, sortField, sortOrder, searchTerm); // Load the new page data
//   };

//   const onSort = (event) => {
//     const { sortField, sortOrder } = event;
//     setSortField(sortField);
//     setSortOrder(sortOrder);

//     // Reload data with the new sort parameters
//     loadPageData(first, rows, sortField, sortOrder, searchTerm);
//   };

//   const onSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setFirst(0); // Reset pagination to the first page when search changes
//     loadPageData(0, rows, sortField, sortOrder, e.target.value); // Reload the data with the search term
//   };

//   return (
//     <div className="datatable-container">
//       <div className="table-card">
//         {/* Year Dropdown with Preventing Keyboard */}
//         <Dropdown
//           value={selectedYear}
//           options={years.map((year) => ({ label: year, value: year }))}
//           onChange={(e) => setSelectedYear(e.value)}
//           placeholder="Select Year"
//           className="year-dropdown"
//           showClear
//           editable={false} // Prevent keyboard by disabling input field
//           itemTemplate={(option) => (
//             <Button label={option.label} className="p-button-text" />
//           )}
//         />

//         {/* Search Box with Icon */}
//         <div className="search-box">
//           <FaSearch className="search-icon" />
//           <InputText
//             value={searchTerm}
//             onChange={onSearchChange}
//             placeholder="Search"
//             className="search-input"
//           />
//         </div>

//         {/* Loader or DataTable */}
//         {loading ? (
//           <div className="loader-container">
//             <ProgressSpinner />
//           </div>
//         ) : (
//           <DataTable
//             value={customers}
//             paginator
//             rows={rows}
//             first={first}
//             totalRecords={totalRecords}
//             onPage={onPageChange}
//             onSort={onSort}
//             lazy
//             sortField={sortField}
//             sortOrder={sortOrder}
//             className="p-datatable-gridlines"
//           >
//             <Column field="name" header="Name" sortable />
//             <Column field="mobile" header="Mobile" sortable />
//             <Column field="Brand" header="Brand" sortable />
//             <Column field="purpose" header="Purpose" sortable />
//             <Column field="date" header="Date" sortable />
//           </DataTable>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { ProgressSpinner } from 'primereact/progressspinner';
// import { SelectButton } from 'primereact/selectbutton'; // Using SelectButton for dropdown-like behavior
// import data from './customer.json'; // Adjust path if needed
// import './home.scss';

// const App = () => {
//   const [customers, setCustomers] = useState([]);
//   const [years, setYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   // Pagination state
//   const [first, setFirst] = useState(0);
//   const [rows, setRows] = useState(5);
//   const [totalRecords, setTotalRecords] = useState(0);

//   // Sorting state
//   const [sortField, setSortField] = useState('');
//   const [sortOrder, setSortOrder] = useState(1);

//   useEffect(() => {
//     // Hardcoded years from 2025 to 2030
//     const availableYears = ['2023','2024','2025', '2026', '2027', '2028', '2029'];
//     setYears(availableYears);
//   }, []);

//   useEffect(() => {
//     if (selectedYear) {
//       setFirst(0); // Reset pagination to the first page
//       loadPageData(0, rows, sortField, sortOrder, searchTerm); // Load the first page of the selected year
//     }
//   }, [selectedYear]);

//   const loadPageData = (start, pageSize, field, order, search) => {
//     setLoading(true);

//     setTimeout(() => {
//       if (data[selectedYear]) {
//         // Flatten the data for the selected year
//         const yearData = Object.values(data[selectedYear]).flatMap((month) =>
//           Object.values(month)
//         );

//         // Apply search filter
//         const filteredData = yearData.filter((item) => {
//           const searchInFields = ['name', 'mobile', 'Brand', 'purpose', 'date'];
//           return searchInFields.some((field) =>
//             item[field]?.toLowerCase().includes(search.toLowerCase())
//           );
//         });

//         // Sort the data if a sort field is specified
//         if (field) {
//           filteredData.sort((a, b) => {
//             const valueA = a[field] || '';
//             const valueB = b[field] || '';
//             return order * valueA.localeCompare(valueB, undefined, { numeric: true });
//           });
//         }

//         // Calculate and set total records after filtering
//         setTotalRecords(filteredData.length);

//         // Slice the data for the current page
//         const pageData = filteredData.slice(start, start + pageSize);
//         setCustomers(pageData);
//       } else {
//         setCustomers([]);
//         setTotalRecords(0);
//       }
//       setLoading(false);
//     }, 1000); // Simulate network delay
//   };

//   const onPageChange = (event) => {
//     setFirst(event.first);
//     setRows(event.rows);
//     loadPageData(event.first, event.rows, sortField, sortOrder, searchTerm); // Load the new page data
//   };

//   const onSort = (event) => {
//     const { sortField, sortOrder } = event;
//     setSortField(sortField);
//     setSortOrder(sortOrder);

//     // Reload data with the new sort parameters
//     loadPageData(first, rows, sortField, sortOrder, searchTerm);
//   };

//   const onSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setFirst(0); // Reset pagination to the first page when search changes
//     loadPageData(0, rows, sortField, sortOrder, e.target.value); // Reload the data with the search term
//   };

//   return (
//     <div className="datatable-container">
//       <div className="table-card">
//         {/* Year Dropdown styled like a button */}
//         <div className="select-year-container">
//           <label>Select Year</label>
//           <SelectButton
//             value={selectedYear}
//             options={years}
//             onChange={(e) => setSelectedYear(e.value)}
//             placeholder="Select Year"
//             className="year-dropdown"
//           />
//         </div>

//         {/* Search Box with Icon */}
//         <div className="search-box">
//           {/* <i className="pi pi-search search-icon" /> */}
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={onSearchChange}
//             placeholder="Search"
//             className="search-input"
//           />
//         </div>

//         {/* Loader or DataTable */}
//         {loading ? (
//           <div className="loader-container">
//             <ProgressSpinner />
//           </div>
//         ) : (
//           <DataTable
//             value={customers}
//             paginator
//             rows={rows}
//             first={first}
//             totalRecords={totalRecords}
//             onPage={onPageChange}
//             onSort={onSort}
//             lazy
//             sortField={sortField}
//             sortOrder={sortOrder}
//             className="p-datatable-gridlines"
//           >
//             <Column field="name" header="Name" sortable />
//             <Column field="mobile" header="Mobile" sortable />
//             <Column field="Brand" header="Brand" sortable />
//             <Column field="purpose" header="Purpose" sortable />
//             <Column field="date" header="Date" sortable />
//           </DataTable>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;





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




