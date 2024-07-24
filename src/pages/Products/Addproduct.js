// import React from "react";
// import "./Addproduct.scss";
// import Createproductsection from "./Createproductsection";

// function Addproduct() {
//   const filtdata = [
//     {
//       id: 1,
//       name: "iPhone",
//       color: "Black",
//       price: 5000,
//       category: "Mobile",
//       brand: "iPhone X",
//       photo:
//         "https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/b727f3856579b833286cc2bb29b29df9.png",
//     },
//   ];
//   return (
//     <div className="ProductCard_Dashboard">
//     <div >
//       <article className="Product_card_Create_Product_Section">
//         {filtdata.map((item, index) => {
//           return (
//             <>
//               <h3>Upload Product Image</h3>
//               <img src={item.photo} alt={"photo"} />
//               <br></br>
//               <div>
//                 <a style={{ marginRight: "10px" }} className="btn">
//                   {" "}
//                   Remove{" "}
//                 </a>
//                 <a className="btn"> Upload </a>
//               </div>
//             </>
//           );
//         })}
//       </article>

//       <article className="Product_card_Create_Product_Section">
//         <>
//           <h3>Add Specification</h3>
//           <Createproductsection />
//           <br></br>
//           <a className="btn"> Add to Cart </a>
//         </>
//       </article>

     
      
//     </div>
//     <br></br>
//     <article className="Product_card_Create_Product_Section">
//         <>
//           <h3>Add Product Details</h3>
//           <Createproductsection />
//           <br></br>
//           <a className="btn"> Add to Cart </a>
//         </>
//       </article>
//     </div>

//     /* <div>
// <div className="Image_Textfields_Parameter_Section">
//   <Paper className="ImageSection">
//     <Imageupload />
//   </Paper>
//   <Paper className="Products_Paramter_Section">
//     <Createproductsection />
//   </Paper>
// </div>

// <div className="Products_Submit_Button_Section">
//   <Button>Preview and Save</Button>
// </div>
// </div> */
//   );
// }

// export default Addproduct;





import React, { useState } from 'react';
import "./Addproduct.scss";



const Addproduct = () => {
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
            <div className="image-preview-container" >
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

export default Addproduct;