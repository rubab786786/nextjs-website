import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  InputAdornment,
} from "@mui/material";

export default function FormExistingUserIndividual({
  handleEmailVerification,
  errors,
  formData,
  setFormData,
  isLoading,
  isVerified,
}) {
  return (
    <Box>
      {/* Email Field */}
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
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="error"
                disabled={isLoading || isVerified}
                onClick={handleEmailVerification}
                startIcon={isLoading ? <CircularProgress size={20} /> : null}
              >
                {isLoading ? "Verifying" : "Verify"}
              </Button>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />
    </Box>
  );
}
