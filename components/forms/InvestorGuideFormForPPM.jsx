"use client";

import React, { useCallback, useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   CircularProgress,
//   Grid,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
//   Checkbox,
//   FormControlLabel,
// } from "@mui/material";
import axios from "axios";
import countries from "data/countries";
import { ValidateEmail } from "@lib/utils";
import useInvestorGuideFormForCompanyPPM from "hooks/useInvestorGuideFormForCompanyPPM";
import useInvestorGuideFormForIndividualPPM from "hooks/useInvestorGuideFormForIndividualPPM";

export const UUIDInput = ({ formData, setFormData, handleSubmit, isVerified }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography>
        Please input your UUID, which has been sent to your provided email{" "}
        <span style={{ textDecoration: "underline" }}>{formData.email}</span>.
      </Typography>
      <TextField
        fullWidth
        label="Your UUID"
        type="text"
        disabled={isVerified}
        value={formData.uuid}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, uuid: e.target.value }))
        }
        sx={{ mt: 2 }}
      />
      <Button
        sx={{ mt: 2 }}
        fullWidth
        variant="contained"
        color="primary"
        disabled={formData.uuid.trim().length !== 36}
        onClick={handleSubmit}
      >
        Verify and Download
      </Button>
    </Box>
  );
};

export const SuccessMessage = () => {
  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <img
        src={"/assets/images/success-email.png"}
        alt="Email Sent Successfully"
        width={100}
        height={100}
      />
      <Typography sx={{ mt: 2 }}>
        We will carefully evaluate your application, and upon approval, you
        will be provided with a download link for PPM.
      </Typography>
    </Box>
  );
};

export function InvestorGuideFormCompany({
  authToken,
  isNewUser,
  setFormProgress,
  guideName,
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState(isNewUser);
  const [isVerified, setVerified] = useState(false);
  const [isEmailSent, setEmailSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [isRevealUUIDField, setIsRevealUUIDFields] = useState(false);

  const [formData, setFormData] = useInvestorGuideFormForCompanyPPM();
  const [regulationCheck, setRegulationCheck] = useState({
    "regulation-d": false,
    "regulation-s": false,
  });

  const createUser = useCallback(async (user) => {
    await axios.post(
      "/api/v1/investor-guide/create-user-and-verify",
      JSON.stringify(user)
    );
  }, []);

  const verifyEmail = useCallback(async (user) => {
    return await axios.post(
      "/api/v1/investor-guide/verify-email",
      JSON.stringify(user)
    );
  }, []);

  const handleEmailSend = async (e) => {
    e.preventDefault();

    if (
      formData.requiredGuides["ppm-reg-d"] &&
      formData.address.country !== "United States"
    ) {
      setRegulationCheck((prev) => ({ ...prev, "regulation-d": true }));
      return;
    }

    if (
      formData.requiredGuides["ppm-reg-s"] &&
      formData.address.country === "United States"
    ) {
      setRegulationCheck((prev) => ({ ...prev, "regulation-s": true }));
      return;
    }

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true);
      try {
        await createUser(formData);
        setFormProgress(80);
        setLoading(false);
        setEmailSent(true);
      } catch (error) {
        if (error.response.status === 400) {
          setFormError(error.response.data.message);
          setLoading(false);
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      await verifyEmail(formData);
      setFormProgress(100);
      setLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      if (error.response.status === 400) {
        setFormError(JSON.parse(error.response.data).message);
        setLoading(false);
      }
    }
  };

  const findFormErrors = () => {
    const { firstName, lastName, email, phone } = formData;
    const { companyAddress, companyName } = formData.company;
    const { city, country, countryCode, state } = formData.address;

    const newErrors = {};
    if (!firstName) newErrors.firstName = "First Name is required!";
    if (!lastName) newErrors.lastName = "Last Name is required!";
    if (!email) newErrors.email = "Email is required!";
    else if (!ValidateEmail(email)) newErrors.email = "Invalid Email!";
    if (!phone) newErrors.phone = "Phone Number is required!";
    if (!companyAddress) newErrors.companyAddress = "Company Address is required!";
    if (!companyName) newErrors.companyName = "Company Name is required!";
    if (!city) newErrors.city = "City is required!";
    if (!country) newErrors.country = "Country is required!";
    if (!state) newErrors.state = "State is required!";

    return newErrors;
  };

  if (regulationCheck["regulation-d"] || regulationCheck["regulation-s"]) {
    return (
      <Box sx={{ mt: 4 }}>
        {regulationCheck["regulation-d"] && (
          <Typography>
            Thank you for your interest. Reg D is limited to users in the USA.
            Please apply for Reg S if outside the USA.
          </Typography>
        )}
        {regulationCheck["regulation-s"] && (
          <Typography>
            Reg S is designed for users outside the USA. Please apply for Reg D
            if you are in the USA.
          </Typography>
        )}
      </Box>
    );
  }

  if (formError) {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography color="error" align="center">
          {formError}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      {!isEmailSent ? (
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                fullWidth
                value={formData.address.country || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    address: { ...prev.address, country: e.target.value },
                  }))
                }
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select Country
                </MenuItem>
                {countries.map((country, index) => (
                  <MenuItem key={index} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.country && (
                <Typography color="error" variant="caption">
                  {errors.country}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleEmailSend}
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24} /> : "Verify Email"}
              </Button>
            </Grid>
          </Grid>
        </form>
      ) : !isSubmitted ? (
        <UUIDInput
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      ) : (
        <SuccessMessage />
      )}
    </Box>
  );
}
