import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, LinearProgress, Typography } from '@mui/material';
import InvestorGuideForm from '../forms/InvestorGuideForm';

export default function RegulationDModal({ isVisible, handleClose, modalName, guideName }) {
  const [progress, setProgress] = useState(0);

  return (
    <Dialog
      open={isVisible}
      onClose={() => handleClose(modalName)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <DialogTitle id="modal-title" sx={{ backgroundColor: 'white', color: 'black',fontWeight:700 }}>
        Request to Get Regulation D
      </DialogTitle>

      <DialogContent>
        {/* <Typography variant="body1" color="textSecondary" gutterBottom>
          Fill in the details below to request the Regulation D document.
        </Typography> */}
        <LinearProgress variant="determinate" value={progress} color="error" sx={{height:"10px",borderRadius:"5px",marginTop:"15px" }} />
        <InvestorGuideForm setFormProgress={setProgress} guideName="regulation-d" />
      </DialogContent>

      <DialogActions>
        <Button onClick={() => handleClose(modalName)} color="black">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
