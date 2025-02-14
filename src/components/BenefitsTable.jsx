import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const BenefitsTable = () => {
  const programs = [
    {
      name: "Professional Certificate Program in Product Management",
      referrerBonus: 7000,
      refereeBonus: 5000,
    },
    {
      name: "PG Certificate Program in Strategic Product Management",
      referrerBonus: 9000,
      refereeBonus: 11000,
    },
    // Add more programs...
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Programs</TableCell>
            <TableCell align="right">Referrer Bonus</TableCell>
            <TableCell align="right">Referee Bonus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {programs.map((program, index) => (
            <TableRow key={index}>
              <TableCell>{program.name}</TableCell>
              <TableCell align="right">₹{program.referrerBonus}</TableCell>
              <TableCell align="right">₹{program.refereeBonus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BenefitsTable;
