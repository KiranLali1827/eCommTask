/* eslint-disable react/jsx-no-comment-textnodes */
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

/*
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

export default Testing;*/


/*
//Pop up model for edit screen
URL : https://codesandbox.io/p/sandbox/awesome-lamarr-hy8hu?file=%2Fsrc%2Fstyles.css%3A14%2C1
import React, { useState } from "react";
import "../Testingclass/Testing.scss";

const data = [
  {
    id: 1001,
    firstname: "Mark",
    lastname: "Otto",
    age: 34,
    location: "London",
    address: "10 Downing Street",
  },
  {
    id: 1002,
    firstname: "Jacob",
    lastname: "Jacob",
    age: 34,
    location: "India",
    address: "#110 broad Street",
  },
];

export default function Testing() {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Location</th>
            <th scope="col">Show More</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v) => (
            <tr>
              <td>{v.id}</td>
              <td>{v.firstname}</td>
              <td>{v.lastname}</td>
              <td>@{v.location}</td>
              <td>
                <a href="#" onClick={() => hanldeClick(v)}>
                  More details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {show && <Modal details={selectedData} handleClose={hideModal} />}
    </div>
  );
}

const Modal = ({ handleClose, details }) => {
  return (
    <div className="modal display-block">
      <section className="modal-main">
        <div className="App">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Age</th>
                <th scope="col">Location</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{details?.id}</td>
                <td>{details?.firstname}</td>
                <td>{details?.lastname}</td>
                <td>{details?.age}</td>
                <td>{details?.location}</td>
                <td>{details?.address}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleClose}>close</button>
        </div>
      </section>
    </div>
  );
};
*/





//Form
/*
import { React, useState } from "react";
import "../Testingclass/Testing.scss";

function Testing() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
    // Add your form submission logic here
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label for="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label for="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label for="email">Enter Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <label for="tel">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />
          <label for="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label for="lang">Your best Subject</label>
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subjects.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Physics
          <label for="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Enter Upload File"
            required
          />
          <label for="url">Enter URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter url"
            required
          />
          <label>Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled selected={selectedOption === ""}>
              Select your Ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>
          </select>
          <label for="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About your self"
            required
          ></textarea>
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Testing;
*/





/*
//navbar 
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Testing() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}*/



//Product Upload form
/*import React, { useState } from 'react';
import './Testing.scss'; // Import CSS for styling


const Testing = () => {
  const [images, setImages] = useState([]);
  const [heading, setHeading] = useState('');
  const [specifications, setSpecifications] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleAddImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = handleImageChange;
    input.click();
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: Send data to backend or perform further actions
    const formData = {
      images: images,
      heading: heading,
      specifications: specifications,
      description: description
    };
    console.log('Form Data:', formData);
    // Reset form fields or redirect upon successful submission
    setImages([]);
    setHeading('');
    setSpecifications('');
    setDescription('');
    setSelectedImage(null);
  };

  return (
    <div className="product-upload-container">
      <h1 className="page-title">Product Upload Page</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="images" className="form-label">Upload Images:</label>
          <div className="image-upload-container">
            <button type="button" className="add-image-button" onClick={handleAddImage}>Choose Image</button>
            <div className="image-preview-container">
              {images.map((image, index) => (
                <div key={index} className="image-preview">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index + 1}`}
                    className="preview-image"
                    onClick={() => handleImageClick(index)}
                  />
                  <button
                    type="button"
                    className="delete-image-button"
                    onClick={() => handleDeleteImage(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedImage && (
          <div className="selected-image-container">
            <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" className="selected-image" />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="heading" className="form-label">Heading:</label>
          <input
            type="text"
            id="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="specifications" className="form-label">Specifications:</label>
          <textarea
            id="specifications"
            value={specifications}
            onChange={(e) => setSpecifications(e.target.value)}
            className="form-textarea"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Testing;
*/



/*
//Product create Page
import React, { useState } from 'react';
import './Testing.scss'; // Import CSS for styling



const Testing = () => {
  const [images, setImages] = useState([]);
  const [heading, setHeading] = useState('');
  const [specifications, setSpecifications] = useState('');
  const [sku, setSku] = useState('');
  const [modelNumber, setModelNumber] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleAddImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = handleImageChange;
    input.click();
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    setSelectedImage(null); // Clear selected image if deleted
  };

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example: Send data to backend or perform further actions
    const formData = {
      images: images,
      heading: heading,
      specifications: specifications,
      sku: sku,
      modelNumber: modelNumber,
      serialNumber: serialNumber,
      description: description
    };
    console.log('Form Data:', formData);
    // Reset form fields or redirect upon successful submission
    setImages([]);
    setHeading('');
    setSpecifications('');
    setSku('');
    setModelNumber('');
    setSerialNumber('');
    setDescription('');
    setSelectedImage(null);
  };

  return (
    <div className="product-upload-container">
      <h1 className="page-title">Add Product Page</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="images" className="form-label">Upload Product Images:</label>
          <div className="image-upload-container">
            <button type="button" className="add-image-button" onClick={handleAddImage}>Choose Image</button>
            <div className="image-preview-container">
              {images.map((image, index) => (
                <div key={index} className="image-preview">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index + 1}`}
                    className="preview-image"
                    onClick={() => handleImageClick(index)}
                  />
                  <button
                    type="button"
                    className="delete-image-button"
                    onClick={() => handleDeleteImage(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedImage && (
          <div className="selected-image-container">
            <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" className="selected-image" />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="heading" className="form-label">Heading:</label>
          <input
            type="text"
            id="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specifications" className="form-label">Specifications:</label>
          <textarea
            id="specifications"
            value={specifications}
            onChange={(e) => setSpecifications(e.target.value)}
            className="form-textarea"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sku" className="form-label">SKU:</label>
          <input
            type="text"
            id="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="modelNumber" className="form-label">Model Number:</label>
          <input
            type="text"
            id="modelNumber"
            value={modelNumber}
            onChange={(e) => setModelNumber(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="serialNumber" className="form-label">Serial Number:</label>
          <input
            type="text"
            id="serialNumber"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Testing;
*/






//Producut Listing Page



// src/ProductDetail.js

import React, { useState } from "react";
import '../Testingclass/Testing.scss'

const Testing = () => {
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
  );
};

export default Testing;
