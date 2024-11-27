import React, { useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  TextField,
  Grid,
  Paper,
} from "@mui/material";

// Step 3 Products
const products = [
  { id: 1, name: "MacBook" },
  { id: 2, name: "Apple Watch" },
  { id: 3, name: "iPhone" },
  { id: 4, name: "iPad" },
];

// Step 4 Service Options
const services = [
  { id: 1, name: "Service" },
  { id: 2, name: "Repair" },
  { id: 3, name: "Buy New" },
];

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [feedback, setFeedback] = useState("");

  const steps = [
    "Enter Phone Number",
    "Verify OTP",
    "Select Product",
    "Select Service",
    "Feedback",
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    const formData = {
      phoneNumber,
      otp: otp.join(""),
      product: selectedProduct,
      service: selectedService,
      feedback,
    };
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted! Check console for details.");
  };

  const handleOtpChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <TextField
              
              type="tel"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              inputProps={{ maxLength: 10 }}
              helperText="Enter a 10-digit phone number"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={phoneNumber.length !== 10}
              sx={{ mt: 2 }}
            >
              Send OTP
            </Button>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography>Enter the 4-digit OTP sent to your number</Typography>
            <Box display="flex" gap={2} mt={2}>
              {otp.map((digit, index) => (
                <TextField
                  key={index}
                  id={`otp-${index}`}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  inputProps={{
                    maxLength: 1,
                    style: { textAlign: "center", fontSize: "1.5rem" },
                  }}
                />
              ))}
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              sx={{ mt: 2 }}
              disabled={otp.join("").length !== 4}
            >
              Verify
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography>Select a Product</Typography>
            <Grid container spacing={2} mt={2}>
              {products.map((product) => (
                <Grid item xs={6} sm={3} key={product.id}>
                  <Paper
                    elevation={selectedProduct === product.name ? 6 : 1}
                    sx={{
                      padding: 2,
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor:
                        selectedProduct === product.name
                          ? "#1976d2"
                          : "white",
                      color: selectedProduct === product.name ? "white" : "black",
                    }}
                    onClick={() => setSelectedProduct(product.name)}
                  >
                    {product.name}
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              sx={{ mt: 2 }}
              disabled={!selectedProduct}
            >
              Next
            </Button>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography>Select a Service Option</Typography>
            <Grid container spacing={2} mt={2}>
              {services.map((service) => (
                <Grid item xs={6} sm={4} key={service.id}>
                  <Paper
                    elevation={selectedService === service.name ? 6 : 1}
                    sx={{
                      padding: 2,
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor:
                        selectedService === service.name
                          ? "#1976d2"
                          : "white",
                      color: selectedService === service.name ? "white" : "black",
                    }}
                    onClick={() => setSelectedService(service.name)}
                  >
                    {service.name}
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              sx={{ mt: 2 }}
              disabled={!selectedService}
            >
              Next
            </Button>
          </Box>
        );
      case 4:
        return (
          <Box>
            <Typography>Feedback</Typography>
            <TextField
              label="Enter your feedback"
              multiline
              rows={4}
              fullWidth
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        );
      default:
        return <Typography>Unknown Step</Typography>;
    }
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", mt: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          mt: 4,
        }}
      >
        {renderStepContent(activeStep)}
      </Box>
      {activeStep > 0 && (
        <Button onClick={handleBack} sx={{ mt: 2 }}>
          Back
        </Button>
      )}
    </Box>
  );
};

export default StepperForm;
