import React from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   Grid,
//   InputAdornment,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";

export default function FormNewUserIndividual({
  errors,
  formData,
  isLoading,
  setFormData,
  countries,
  handleCountryChange,
  handleEmailSend,
}) {
  return (
    <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {/* First Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="First Name"
            placeholder="John"
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, firstName: e.target.value }))
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
              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
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
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>

        {/* Phone */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Phone"
            type="tel"
            placeholder="0987654321"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
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

        {/* Address */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Address"
            placeholder="Enter address"
            value={formData.address.address}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                address: { ...prev.address, address: e.target.value },
              }))
            }
            error={!!errors.address}
            helperText={errors.address}
          />
        </Grid>

        {/* Country */}
        <Grid item xs={12}>
          <FormControl fullWidth required error={!!errors.country}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Country
            </Typography>
            <Select
              value={formData.address.country}
              onChange={(e) => handleCountryChange(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">
                <em>Choose...</em>
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

        {/* Annual Revenue */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Annual Revenue in USD"
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
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              endAdornment: (
                <InputAdornment position="end">.00</InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* PPM Reg D and Reg S */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Select to get:
          </Typography>
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
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Verify my email"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
