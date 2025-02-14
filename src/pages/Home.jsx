import { useState } from "react";
import ReferralModal from "../components/ReferralModal";
import hero from "../assets/Anniversary.png";
import ReferralSteps from "../components/ReferralSteps";
import ReferralBenefits from "../components/ReferralBenefits";
import FAQ from "../components/FAQ";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onReferClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-blue-50 rounded-lg flex flex-col md:flex-row items-center justify-between shadow-2xl">
        <div className="p-8 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-6xl font-bold mb-4">Let's Learn & Earn</h1>
          <p className="text-2xl mb-6">
            Get a chance to win up-to
            <p className="text-5xl font-bold text-blue-600">Rs. 15,000</p>
          </p>
          <button onClick={onReferClick} className="btn-primary">
            Refer Now
          </button>
        </div>
        <div className="relative w-1/2">
          <img src={hero} alt="hero" />
        </div>
      </div>

      <ReferralSteps onClick={onReferClick} />
      <ReferralBenefits onClick={onReferClick} />
      <FAQ />

      <ReferralModal open={modalOpen} handleClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;
