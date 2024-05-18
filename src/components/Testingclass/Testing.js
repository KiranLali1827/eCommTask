// import React from "react";
// import { useState } from "react";

//Usecall back : From Parent to Child

// // Parent component
// const Parent = () => {
//     const [data, setData] = useState('');

//     const handleDataChange = (newData) => {
//       setData(newData);
//     };

//     return (
//       <div>
//         <Child handleDataChange={handleDataChange} />
//         <p>Data from child: {data}</p>
//       </div>
//     );
//   };

//   // Child component
//   const Child = ({ handleDataChange }) => {
//     const [inputValue, setInputValue] = useState('');

//     const handleChange = (event) => {
//       setInputValue(event.target.value);
//     };

//     const handleSubmit = () => {
//       handleDataChange(inputValue);
//     };

//     return (
//       <div>
//         <input type="text" value={inputValue} onChange={handleChange} />
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     );
//   };

//   export default Parent;




/*
//Form Validation
import React, { useState } from "react";
import "../Testingclass/Testing.scss";

function Testing() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length == 0 || lastName.length == 0) {
      setError(true);
    }
    if (firstName && lastName) {
      console.log("First Name: ", firstName, "\nLast Name: ", lastName);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {error && firstName.length <= 0 ? (
          <label className="Errorlabel">First Name can't be Empty</label>
        ) : (
          ""
        )}
        <div>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {error && lastName.length <= 0 ? (
          <label className="Errorlabel">Last Name can't be Empty</label>
        ) : (
          ""
        )}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
export default Testing;
*/

//Fetch data from server and set to useState 

import React, { useEffect, useState } from 'react';

const Testing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummy.restapiexample.com/api/v1/employees'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

 return (
  <div>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    )}
  </div>
);
};

export default Testing;