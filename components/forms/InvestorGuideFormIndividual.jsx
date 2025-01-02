import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { ValidateEmail } from "../../lib/utils";
import countries from "data/countries";
import { useInvestorGuideFormForIndividual } from "hooks";

export function InvestorGuideFormIndividual({
  guideName,
  authToken,
  isNewUser,
  setFormProgress,
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState(isNewUser);
  const [isVerified, setVerified] = useState(false);
  const [isEmailSent, setEmailSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [isRevealUUIDField, setIsRevealUUIDFields] = useState(false);
  const [isAllowDownload, setAllowDownload] = useState(false);

  const [formData, setFormData] = useInvestorGuideFormForIndividual(guideName);
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
    await axios.post(
      "/api/v1/investor-guide/verify-email",
      JSON.stringify(user)
    );
  }, []);

  const handleCountryChange = (country) => {
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, country },
    }));
  };

  const handleEmailSend = async (e) => {
    e.preventDefault();

    if (
      guideName === "regulation-d" &&
      formData.address.country !== "United States"
    ) {
      setRegulationCheck((prev) => ({ ...prev, "regulation-d": true }));
      return;
    }

    if (
      guideName === "regulation-s" &&
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
      setAllowDownload(true);
      setFormProgress(100);
      setLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      if (error.response.status === 400) {
        setFormError(error.response.data.message);
        setLoading(false);
      }
    }
  };

  const findFormErrors = () => {
    const { firstName, lastName, email, phone, annualRevenue } = formData;
    const { city, country, countryCode, state, address } = formData.address;

    const newErrors = {};
    if (!firstName) newErrors.firstName = "First Name is required!";
    if (!lastName) newErrors.lastName = "Last Name is required!";
    if (!email) newErrors.email = "Email is required!";
    else if (!ValidateEmail(email)) newErrors.email = "Invalid Email!";
    if (!phone) newErrors.phone = "Phone is required!";
    if (!address) newErrors.address = "Address is required!";
    if (!city) newErrors.city = "City is required!";
    if (!country) newErrors.country = "Country is required!";
    if (!countryCode) newErrors.countryCode = "Country Code is required!";
    if (!state) newErrors.state = "State is required!";
    if (!annualRevenue || annualRevenue <= 0)
      newErrors.annualRevenue = "Valid Annual Revenue is required!";

    return newErrors;
  };

  useEffect(() => {
    if (isAllowDownload) {
      document.getElementById("guide-download-button").click();
    }
  }, [isAllowDownload]);

  if (regulationCheck["regulation-d"] || regulationCheck["regulation-s"]) {
    return (
      <Box sx={{ mt: 4 }}>
        {regulationCheck["regulation-d"] && (
          <Typography>
            Access to Reg D is limited to USA users. Please apply for Reg S if
            outside the USA.
          </Typography>
        )}
        {regulationCheck["regulation-s"] && (
          <Typography>
            Reg S is for users outside the USA. USA users can apply for Reg D.
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
    <Box sx={{ mt: 4, maxWidth: 600, mx: "auto" }}>
      {newUser && !isEmailSent && (
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
                label="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={formData.address.address}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      address: e.target.value,
                    },
                  }))
                }
                error={!!errors.address}
                helperText={errors.address}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                fullWidth
                value={formData.address.country}
                onChange={(e) => handleCountryChange(e.target.value)}
                displayEmpty
                error={!!errors.country}
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
              <TextField
                fullWidth
                label="Annual Revenue (USD)"
                type="number"
                value={formData.annualRevenue}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    annualRevenue: e.target.value,
                  }))
                }
                error={!!errors.annualRevenue}
                helperText={errors.annualRevenue}
              />
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
      )}

      {isEmailSent && !isSubmitted && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography>
            Please input your UUID sent to your email:{" "}
            <strong>{formData.email}</strong>.
          </Typography>
          <TextField
            fullWidth
            label="UUID"
            value={formData.uuid}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, uuid: e.target.value }))
            }
            sx={{ mt: 2 }}
          />
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={isLoading || formData.uuid.trim().length !== 36}
          >
            {isLoading ? <CircularProgress size={24} /> : "Verify and Download"}
          </Button>
        </Box>
      )}

      {isSubmitted && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h6" color="success.main">
            Thank you for downloading the Investor's Handbook!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={`https://cdn.ufbs.io/${
              guideName === "regulation-d" ? "Reg+D" : "Reg+S"
            }.pdf`}
            download
            target="_blank"
          >
            Download
          </Button>
        </Box>
      )}
    </Box>
  );
}
