"use client";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";
import { useRouter } from "next/navigation";

type user = {
  username: string;
  created: string;
};

const UsersTable = ({ users }: { users: user[] }) => {
  const router = useRouter();
  return (
    <TableContainer
      component={Paper}
      sx={{ width: 600, margin: "auto", mt: 7, mb: 7, height: 400 }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Joined</TableCell>
            <TableCell align="right">Last Signed In</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              onClick={() => {
                router.push(`/userprofile/${user.username}`);
              }}
              hover
              key={user.username}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
            >
              <TableCell component="th" scope="row">
                {user.username}
              </TableCell>
              <TableCell align="right">
                {new Date(user.created).toDateString()}
              </TableCell>
              <TableCell align="right">Last Tuesday at 12:30pm</TableCell>
              {/*cannot find */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
