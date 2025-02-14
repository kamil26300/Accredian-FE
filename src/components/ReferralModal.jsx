import { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { submitReferral } from "../services/api";

const ReferralModal = ({ open, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      setIsLoading(true);

      const referralData = {
        referrerName: formData.get("referrerName"),
        referrerEmail: formData.get("referrerEmail"),
        refereeName: formData.get("refereeName"),
        refereeEmail: formData.get("refereeEmail"),
      };

      // Validate form data
      if (
        !referralData.referrerName ||
        !referralData.referrerEmail ||
        !referralData.refereeName ||
        !referralData.refereeEmail
      ) {
        throw new Error("All fields are required");
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !emailRegex.test(referralData.referrerEmail) ||
        !emailRegex.test(referralData.refereeEmail)
      ) {
        throw new Error("Please enter valid email addresses");
      }

      const response = await submitReferral(referralData);

      setSnackbar({
        open: true,
        message: "Referral submitted successfully!",
        severity: "success",
      });

      handleClose();
      e.target.reset();
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message || "Something went wrong. Please try again.",
        severity: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="referral-modal-title"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg w-[90%] max-w-md">
          <h2 className="text-2xl font-bold mb-6" id="referral-modal-title">
            Refer a Friend
          </h2>
          <form onSubmit={handleSubmit} className="gap-4 flex flex-col">
            <TextField
              fullWidth
              label="Your Name"
              name="referrerName"
              required
              disabled={isLoading}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Your Email"
              name="referrerEmail"
              type="email"
              required
              disabled={isLoading}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Friend's Name"
              name="refereeName"
              required
              disabled={isLoading}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Friend's Email"
              name="refereeEmail"
              type="email"
              required
              disabled={isLoading}
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isLoading}
              className="h-12"
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Submit Referral"
              )}
            </Button>
          </form>
        </Box>
      </Modal>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ReferralModal;