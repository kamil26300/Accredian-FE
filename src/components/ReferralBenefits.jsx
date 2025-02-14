import { useState } from "react";

const ReferralBenefits = () => {
  const [selectedProgram, setSelectedProgram] = useState("PRODUCT MANAGEMENT");

  const programs = [
    {
      category: "ALL PROGRAMS",
      items: [],
    },
    {
      category: "PRODUCT MANAGEMENT",
      items: [
        {
          name: "Professional Certificate Program in Product Management",
          referrerBonus: 7000,
          refereeBonus: 9000,
        },
        {
          name: "PG Certificate Program in Strategic Product Management",
          referrerBonus: 9000,
          refereeBonus: 11000,
        },
        {
          name: "Executive Program in Data Driven Product Management",
          referrerBonus: 10000,
          refereeBonus: 10000,
        },
        {
          name: "Executive Program in Product Management and Digital Transformation",
          referrerBonus: 10000,
          refereeBonus: 10000,
        },
        {
          name: "Executive Program in Product Management",
          referrerBonus: 10000,
          refereeBonus: 10000,
        },
        {
          name: "Advanced Certification in Product Management",
          referrerBonus: 10000,
          refereeBonus: 10000,
        },
        {
          name: "Executive Program in Product Management and Project Management",
          referrerBonus: 10000,
          refereeBonus: 10000,
        },
      ],
    },
    {
      category: "STRATEGY & LEADERSHIP",
      items: [],
    },
    {
      category: "BUSINESS MANAGEMENT",
      items: [],
    },
    {
      category: "FINTECH",
      items: [],
    },
    {
      category: "SENIOR MANAGEMENT",
      items: [],
    },
    {
      category: "DATA SCIENCE",
      items: [],
    },
    {
      category: "DIGITAL TRANSFORMATION",
      items: [],
    },
    {
      category: "BUSINESS ANALYTICS",
      items: [],
    },
  ];

  return (
    <div className="py-8 flex flex-col items-center justify-center mt-12">
      <h2 className="text-2xl font-bold text-center mb-12 flex gap-1">
        What are the <p className="text-blue-600">Referral Benefits</p>?
      </h2>
      <div className="flex gap-6 w-full">
        {/* Left Sidebar */}
        <div className="w-64 bg-white rounded-lg shadow">
          {programs.map((program) => (
            <button
              key={program.category}
              className={`w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors ${
                selectedProgram === program.category
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : ""
              }`}
              onClick={() => setSelectedProgram(program.category)}
            >
              {program.category}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Programs
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">
                  Referrer Bonus
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">
                  Referee Bonus
                </th>
              </tr>
            </thead>
            <tbody>
              {programs
                .find((p) => p.category === selectedProgram)
                ?.items.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-sm text-gray-800">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">🎓</span>
                        {item.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-800">
                      ₹ {item.referrerBonus.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-800">
                      ₹ {item.refereeBonus.toLocaleString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferralBenefits;
