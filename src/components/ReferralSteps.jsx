const ReferralSteps = ({ onClick }) => {
  const steps = [
    {
      icon: "👥",
      title: "Submit referrals easily",
      description:
        "Submit referrals easily via our website’s referral section.",
    },
    {
      icon: "💰",
      title: "Earn rewards",
      description:
        "Earn rewards once your referral joins an Accredian program.",
    },
    {
      icon: "🎁",
      title: "Receive bonus",
      description:
        "Referrer receives a bonus 30 days after program enrollment.",
    },
  ];

  return (
    <div className="p-8 mt-12 w-full gap-12 items-center justify-center flex flex-col bg-blue-50 shadow-2xl rounded-lg">
      <h2 className="text-2xl font-bold text-center flex gap-1">
        How Do I <p className="text-blue-600">Refer</p>?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-2xl">{step.icon}</span>
            </div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
      <button onClick={onClick} className="btn-primary">
        Refer Now
      </button>
    </div>
  );
};

export default ReferralSteps;
