import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

export default function FormExistingUser({
  formData,
  errors,
  handleEmailVerification,
  isVerified,
  setFormData,
  isLoading,
}) {
  return (
    <Box sx={{ mb: 3 }}>
      {/* Email Input */}
      <TextField
        fullWidth
        required
        label="Email"
        type="email"
        disabled={isVerified}
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        placeholder="example@email.com"
        error={!!errors.email}
        helperText={errors.email}
        InputProps={{
          style: { color: isVerified ? "gray" : "black" },
        }}
      />

      {/* Verify Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          variant="contained"
          color="error"
          disabled={isLoading || isVerified}
          onClick={handleEmailVerification}
          startIcon={isLoading ? <CircularProgress size={20} /> : null}
        >
          {isLoading ? "Verifying" : "Verify"}
        </Button>
      </Box>

      {/* Verified Message */}
      {isVerified && (
        <Typography sx={{ mt: 2 }} color="success.main">
          Your email has been verified. Please select your PPM:
        </Typography>
      )}
    </Box>
  );
}
