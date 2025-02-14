import { useState } from "react";
import logo from "../assets/black-logo.png";
import { Button } from "@mui/material";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const programs = [
    { title: "Data Science & AI", items: [] },
    { title: "Product Management", items: [] },
    { title: "Business Analytics", items: [] },
    { title: "Digital Transformation", items: [] },
    { title: "Business Management", items: [] },
    { title: "Project Management", items: [] },
    { title: "Strategy & Leadership", items: [] },
    { title: "Senior Management", items: [] },
    { title: "Fintech", items: [] },
  ];

  const contactInfo = {
    emails: [
      { label: "For Data Science Queries", value: "admissions@accredian.com" },
      { label: "For Product Management Queries", value: "pm@accredian.com" },
    ],
    helplines: [
      {
        label: "Data Science Admission Helpline",
        value: "+91 9079653292 (9 AM - 7 PM)",
      },
      {
        label: "Product Management Admission Helpline",
        value: "+91 9625811095",
      },
      { label: "Enrolled Student Helpline", value: "+91 7969322507" },
    ],
    address:
      "Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015",
  };

  const links = {
    accredian: [
      { title: "About", href: "/about" },
      { title: "Career", href: "/career" },
      { title: "Blog", href: "/blog" },
      { title: "Admission Policy", href: "/admission-policy" },
      { title: "Referral Policy", href: "/referral-policy" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms Of Service", href: "/terms-of-service" },
      { title: "Master FAQs", href: "/faqs" },
    ],
  };

  return (
    <footer className="bg-[#333333] text-white py-8">
      <div className="container mx-auto px-4 gap-2 flex flex-col">
        <div className="border-b py-4 flex justify-between items-center">
          <img src={logo} alt="Accredian" className="h-9" />
          <div className="flex flex-col gap-1">
            <Button variant="contained" color="primary">
              Schedule 1-on-1 Call Now
            </Button>
            <p className="text-sm">Speak with our Learning Advisor</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Programs Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Programs</h3>
            <div className="space-y-2">
              {programs.map((program, index) => (
                <div key={index} className="border-b border-gray-700">
                  <button
                    className="w-full flex items-center justify-between py-2 text-left hover:text-blue-400"
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === index ? null : index
                      )
                    }
                  >
                    {program.title}
                    <span className="text-xl">
                      {expandedSection === index ? "-" : "+"}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-1">
              {contactInfo.emails.map((email, index) => (
                <div className="flex gap-1 text-sm" key={index}>
                  <p className="text-sm">{email.label}:</p>
                  <a
                    href={`mailto:${email.value}`}
                    className="hover:text-blue-400"
                  >
                    {email.value}
                  </a>
                </div>
              ))}
              {contactInfo.helplines.map((helpline, index) => (
                <div className="flex gap-1 text-sm" key={index}>
                  <p className="text-sm">{helpline.label}:</p>
                  <a
                    href={`tel:${helpline.value.replace(/\D/g, "")}`}
                    className="hover:text-blue-400"
                  >
                    {helpline.value}
                  </a>
                </div>
              ))}
              <p className="text-sm">{contactInfo.address}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Why Accredian</h3>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Accredian Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Accredian</h3>
            <div className="space-y-2">
              {links.accredian.map((link, index) => (
                <div key={index}>
                  <a href={link.href} className="hover:text-blue-400">
                    {link.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4 pt-4 border-t border-gray-500 text-sm text-gray-400">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
