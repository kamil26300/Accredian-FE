import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const faqs = [
    {
      question:
        "Do I need to have prior Product Management experience to enroll in the program?",
      answer:
        "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    },
  ];

  return (
    <div className="py-16 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-center mb-8 flex gap-1">
        What are the <p className="text-blue-600">Referral Benefits</p>?
      </h2>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
