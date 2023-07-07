import { TableCell } from "@mui/material";

const HeadCell = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <TableCell sx={{ fontWeight: "bold" }} component="th" {...props}>
      {children}
    </TableCell>
  );
};
export default HeadCell;
