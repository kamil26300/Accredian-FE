import { useState } from "react";
import ReferralModal from "../components/ReferralModal";
import hero from "../assets/Anniversary.png";
import ReferralSteps from "../components/ReferralSteps";
import ReferralBenefits from "../components/ReferralBenefits";
import FAQ from "../components/FAQ";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      // Show loading state
      setIsLoading(true);

      const referralData = {
        referrerName: formData.get("referrerName"),
        referrerEmail: formData.get("referrerEmail"),
        refereeName: formData.get("refereeName"),
        refereeEmail: formData.get("refereeEmail"),
      };

      // Call the API
      const response = await submitReferral(referralData);

      // Show success message
      setSnackbar({
        open: true,
        message: "Referral submitted successfully!",
        severity: "success",
      });

      // Close the modal
      handleClose();

      // Reset form
      e.target.reset();
    } catch (error) {
      // Show error message
      setSnackbar({
        open: true,
        message: error.message || "Something went wrong. Please try again.",
        severity: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-blue-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-6xl font-bold mb-4">Let's Learn & Earn</h1>
          <p className="text-2xl mb-6">
            Get a chance to win up-to
            <p className="text-5xl font-bold text-blue-600">Rs. 15,000</p>
          </p>
          <button onClick={() => setModalOpen(true)} className="btn-primary">
            Refer Now
          </button>
        </div>
        <div className="relative w-1/2">
          <img src={hero} alt="hero" />
        </div>
      </div>

      <ReferralSteps />
      <ReferralBenefits />
      <FAQ />

      <ReferralModal open={modalOpen} handleClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;
