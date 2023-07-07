import { TableRow } from "@mui/material";

const CustomRow = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <TableRow
      hover
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </TableRow>
  );
};

export default CustomRow;
