import React, { useState } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);

  // Handle input change
  const handleChange = (value, index) => {
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

  // Handle backspace key
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (otp.join("").length === 4) {
      console.log("OTP Submitted:", otp.join(""));
      setError(false);
      alert("OTP Verified!");
    } else {
      setError(true);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      p={2}
    >
      <Typography variant="h5" gutterBottom>
        Verify OTP
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enter the 4-digit code sent to your mobile number
      </Typography>
      <Box display="flex" gap={2} mt={2}>
        {otp.map((digit, index) => (
          <TextField
            key={index}
            id={`otp-${index}`}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputProps={{
              maxLength: 1,
              style: { textAlign: "center", fontSize: "1.5rem" },
            }}
            error={error && otp[index] === ""}
          />
        ))}
      </Box>
      {error && (
        <Typography color="error" mt={1}>
          Please fill all 4 digits of the OTP.
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 3 }}
      >
        Verify
      </Button>
    </Box>
  );
};

export default VerifyOtp;
