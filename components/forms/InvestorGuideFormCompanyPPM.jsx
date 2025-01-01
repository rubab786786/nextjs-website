import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import Image from "next/image";

export function InvestorGuideFormCompany({ authToken, isNewUser, setFormProgress }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyAddress: "",
    companyName: "",
    bankName: "",
    uuid: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isEmailSent, setEmailSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  const findFormErrors = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name cannot be blank!";
    if (!formData.lastName) newErrors.lastName = "Last name cannot be blank!";
    if (!formData.email) newErrors.email = "Email is required!";
    if (!formData.phone) newErrors.phone = "Phone number is required!";
    if (!formData.companyAddress) newErrors.companyAddress = "Company address is required!";
    if (!formData.companyName) newErrors.companyName = "Company name is required!";
    if (!formData.bankName) newErrors.bankName = "Bank name is required!";
    return newErrors;
  };

  const handleEmailSend = async (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true);
      try {
        await axios.post("/api/v1/investor-guide/create-user-and-verify", formData);
        setFormProgress(80);
        setLoading(false);
        setEmailSent(true);
      } catch (error) {
        setFormError(error.response?.data?.message || "An error occurred");
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/v1/investor-guide/verify-email", formData);
      setFormProgress(100);
      setIsSubmitted(true);
      setLoading(false);
    } catch (error) {
      setFormError(error.response?.data?.message || "An error occurred");
      setLoading(false);
    }
  };

  return (
    <Box mt={4} maxHeight="55vh" overflow="scroll">
      {!isEmailSent ? (
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            {[
              { id: "firstName", label: "First Name" },
              { id: "lastName", label: "Last Name" },
              { id: "email", label: "Email", type: "email" },
              { id: "phone", label: "Phone", type: "tel" },
              { id: "companyAddress", label: "Company Address" },
              { id: "companyName", label: "Company Name" },
              { id: "bankName", label: "Bank Name" },
            ].map(({ id, label, type = "text" }) => (
              <Grid item xs={12} key={id}>
                <TextField
                  fullWidth
                  label={label}
                  variant="outlined"
                  error={!!errors[id]}
                  helperText={errors[id]}
                  type={type}
                  value={formData[id] || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, [id]: e.target.value }))
                  }
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEmailSend}
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24} /> : "Verify my email"}
              </Button>
              {formError && <Typography color="error">{formError}</Typography>}
            </Grid>
          </Grid>
        </form>
      ) : isSubmitted ? (
        <Box textAlign="center">
          <Image
            src="/assets/images/success-email.png"
            alt="Success"
            width={100}
            height={100}
          />
          <Typography mt={2}>
            Your application has been submitted. You will be notified upon
            approval.
          </Typography>
        </Box>
      ) : (
        <Box textAlign="center">
          <Typography variant="h6">
            Please enter the UUID sent to your email:
          </Typography>
          <TextField
            fullWidth
            label="UUID"
            variant="outlined"
            value={formData.uuid || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, uuid: e.target.value }))
            }
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            disabled={!formData.uuid?.trim()}
            onClick={handleSubmit}
          >
            Verify and Download
          </Button>
        </Box>
      )}
    </Box>
  );
}
