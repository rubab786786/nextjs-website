import { useInvestorGuideFormForCompany } from "hooks";
import { useCallback, useEffect, useState } from "react";
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
import { ValidateEmail } from "@lib/utils";
import axios from "axios";
import countries from "data/countries";

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
  const [isAllowDownload, setAllowDownload] = useState(false);
  const [formData, setFormData] = useInvestorGuideFormForCompany(guideName);

  const createUser = useCallback(async (user) => {
    return await axios.post(
      "/api/v1/investor-guide/create-user-and-verify",
      JSON.stringify(user),
      {}
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
  const handleDownload = (url) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "InvestorGuide.pdf"; // or any desired file name
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      const response = await verifyEmail(formData);
    const downloadUrl = response.data.downloadUrl;

    if (downloadUrl) {
      handleDownload(downloadUrl); // Trigger file download
      setAllowDownload(true);
      setFormProgress(100);
    }
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
    if (!firstName || firstName === "") newErrors.firstName = "First Name is required!";
    if (!lastName || lastName === "") newErrors.lastName = "Last Name is required!";
    if (!email || email === "") newErrors.email = "Email is required!";
    else if (!ValidateEmail(email)) newErrors.email = "Invalid Email Address!";
    if (!phone || phone === "") newErrors.phone = "Phone Number is required!";
    if (!companyName || companyName === "") newErrors.companyName = "Company Name is required!";
    if (!companyAddress || companyAddress === "") newErrors.companyAddress = "Company Address is required!";
    if (!city || city === "") newErrors.city = "City is required!";
    if (!country || country === "") newErrors.country = "Country is required!";
    if (!state || state === "") newErrors.state = "State is required!";
    return newErrors;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCompanyInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      company: { ...prev.company, [field]: value },
    }));
  };

  const handleAddressInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  return (
    <Box sx={{ mt: 4, maxWidth: "600px", mx: "auto" }}>
      {newUser && !isEmailSent && (
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                value={formData.company.companyName}
                onChange={(e) =>
                  handleCompanyInputChange("companyName", e.target.value)
                }
                error={!!errors.companyName}
                helperText={errors.companyName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Country Code"
                value={formData.address.countryCode}
                onChange={(e) =>
                  handleAddressInputChange("countryCode", e.target.value)
                }
                error={!!errors.countryCode}
                helperText={errors.countryCode}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                fullWidth
                value={formData.address.country}
                onChange={(e) =>
                  handleAddressInputChange("country", e.target.value)
                }
                error={!!errors.country}
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
              <TextField
                fullWidth
                label="State"
                value={formData.address.state}
                onChange={(e) => handleAddressInputChange("state", e.target.value)}
                error={!!errors.state}
                helperText={errors.state}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="City"
                value={formData.address.city}
                onChange={(e) => handleAddressInputChange("city", e.target.value)}
                error={!!errors.city}
                helperText={errors.city}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Address"
                value={formData.company.companyAddress}
                onChange={(e) =>
                  handleCompanyInputChange("companyAddress", e.target.value)
                }
                error={!!errors.companyAddress}
                helperText={errors.companyAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="error"
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
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography>
            Please check your email and provide the UUID sent to your address.
          </Typography>
          <TextField
            fullWidth
            label="UUID"
            value={formData.uuid}
            onChange={(e) => handleInputChange("uuid", e.target.value)}
          />
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            color="error"
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
            Thank you for submitting your form!
          </Typography>
        </Box>
      )}
    </Box>
  );
}
