const ReferralSteps = () => {
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
    <div className="py-16 mt-12 w-full items-center justify-center flex flex-col bg-blue-50 shadow-2xl rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-12 flex gap-1">
        How Do I <p className="text-blue-600">Refer</p>?
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
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
    </div>
  );
};

export default ReferralSteps;
