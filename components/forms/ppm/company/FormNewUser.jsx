import React from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";

export default function FormNewUser({
  errors,
  formData,
  handleEmailSend,
  setFormData,
  handleCountryChange,
  countries,
}) {
  return (
    <Box component="form" onSubmit={(e) => e.preventDefault()}>
      {/* First Name */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="First Name"
            placeholder="John"
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

        {/* Last Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Last Name"
            placeholder="Doe"
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

        {/* Email */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            error={!!errors.email}
            helperText={errors.email || "We'll never share your email with anyone else."}
          />
        </Grid>

        {/* Company Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Company Name"
            placeholder="Enter company name"
            value={formData.company.companyName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                company: { ...prev.company, companyName: e.target.value },
              }))
            }
            error={!!errors.companyName}
            helperText={errors.companyName}
          />
        </Grid>

        {/* Phone */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Phone"
            type="number"
            placeholder="0987654321"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Grid>

        {/* Country Code */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Country Code"
            type="number"
            value={formData.address.countryCode}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                address: { ...prev.address, countryCode: e.target.value },
              }))
            }
            error={!!errors.countryCode}
            helperText={errors.countryCode}
          />
        </Grid>

        {/* Company Address */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Company Address"
            placeholder="Enter address"
            value={formData.company.companyAddress}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                company: { ...prev.company, companyAddress: e.target.value },
              }))
            }
            error={!!errors.companyAddress}
            helperText={errors.companyAddress}
          />
        </Grid>

        {/* Country */}
        <Grid item xs={12}>
          <FormControl fullWidth required error={!!errors.country}>
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              labelId="country-label"
              value={formData.address.country}
              onChange={(e) => handleCountryChange(e.target.value)}
            >
              <MenuItem value="">
                <em>...</em>
              </MenuItem>
              {countries.map((country, index) => (
                <MenuItem key={index} value={country.name}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
            <Typography variant="caption" color="error">
              {errors.country}
            </Typography>
          </FormControl>
        </Grid>

        {/* State */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="State"
            value={formData.address.state}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                address: { ...prev.address, state: e.target.value },
              }))
            }
            error={!!errors.state}
            helperText={errors.state}
          />
        </Grid>

        {/* City */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="City"
            value={formData.address.city}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                address: { ...prev.address, city: e.target.value },
              }))
            }
            error={!!errors.city}
            helperText={errors.city}
          />
        </Grid>

        {/* Bank Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Bank Name"
            placeholder="Bank of America"
            value={formData.bankName}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                bankName: e.target.value,
              }))
            }
            error={!!errors.bankName}
            helperText={errors.bankName}
          />
        </Grid>

        {/* PPM Reg D & Reg S */}
        <Grid item xs={12}>
          <Typography variant="subtitle1">Select to get:</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.requiredGuides["ppm-reg-d"]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    requiredGuides: {
                      ...prev.requiredGuides,
                      "ppm-reg-d": e.target.checked,
                    },
                  }))
                }
              />
            }
            label="PPM Reg D"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.requiredGuides["ppm-reg-s"]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    requiredGuides: {
                      ...prev.requiredGuides,
                      "ppm-reg-s": e.target.checked,
                    },
                  }))
                }
              />
            }
            label="PPM Reg S"
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={handleEmailSend}
          >
            Verify my email
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
