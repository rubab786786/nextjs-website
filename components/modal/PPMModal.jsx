import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, LinearProgress, Typography } from '@mui/material';
import InvestorGuideForm from '../forms/InvestorGuideForm';

export default function PPMModal({ isVisible, handleClose, modalName, authToken }) {
  const [progress, setProgress] = useState(0);

  return (
    <Dialog
      open={isVisible}
      onClose={() => handleClose(modalName)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <DialogTitle id="modal-title" sx={{  backgroundColor: 'white', color: 'black',fontWeight:700 }}>
        Request to Get the Private Placement Memorandum (PPM)
      </DialogTitle>

      <DialogContent>
        {/* <Typography variant="body1" color="textSecondary" gutterBottom>
          You can request access to the Private Placement Memorandum (PPM) by filling out the form below.
        </Typography> */}
        <LinearProgress variant="determinate" value={progress} color="error" sx={{height:"10px",borderRadius:"5px",marginTop:"15px" }} />
        <InvestorGuideForm setFormProgress={setProgress} authToken={authToken} guideName="ppm" />
      </DialogContent>

      <DialogActions>
        <Button onClick={() => handleClose(modalName)} color="black">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
