"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { InvestorGuideFormCompany } from "./InvestorGuideFormCompany";
import { InvestorGuideFormIndividual } from "./InvestorGuideFormIndividual";

const emailVerification = {
  INIT: false,
  VERIFYING: "verifying",
  VERIFIED: true,
};

const CrossMarkIcon = () => {
  return (
    <Image
      src={"/assets/icons/cross-mark.png"}
      style={{ opacity: 0.2 }}
      width={80}
      height={80}
      alt="cross-mark-icon"
    />
  );
};

const FormLabel = ({ isRequired, children }) => {
  return (
    <Typography
      component="label"
      sx={{ color: "#000", display: "block", marginBottom: 1 }}
    >
      {children}
      {isRequired && <span style={{ color: "red" }}>*</span>}
    </Typography>
  );
};

const FormControl = ({ placeholder, value, name, type = "text" }) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      style={{
        padding: "20px",
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    />
  );
};

export default function InvestorGuideForm({ setFormProgress, guideName }) {
  const [key, setKey] = useState("home");
  const [isCompany, setIsCompany] = useState(null);
  const [isNewUser, setIsNewUser] = useState(null);

  const handleNewUserButtonClick = (value) => {
    setIsNewUser(value);
    setFormProgress(20);
  };

  const handleIsCompanyButtonClick = (value) => {
    setIsCompany(value);
    setFormProgress(40);
  };

  if (isNewUser == null) {
    return (
      <Box sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={() => handleNewUserButtonClick(true)}
            >
              New User
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={() => handleNewUserButtonClick(false)}
            >
              Existing User
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }

  if (isCompany == null) {
    return (
      <Box sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={() => handleIsCompanyButtonClick(true)}
            >
              For Company
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={() => handleIsCompanyButtonClick(false)}
            >
              For Individual
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }

  if (isCompany) {
    return (
      <InvestorGuideFormCompany
        guideName={guideName}
        setFormProgress={setFormProgress}
        isNewUser={isNewUser}
      />
    );
  } else {
    return (
      <InvestorGuideFormIndividual
        guideName={guideName}
        setFormProgress={setFormProgress}
        isNewUser={isNewUser}
      />
    );
  }
}

