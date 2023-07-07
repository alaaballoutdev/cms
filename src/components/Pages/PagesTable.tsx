"use client";
import { Add, Edit, Visibility } from "@mui/icons-material";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Button,
} from "@mui/material";
import CustomRow from "components/Globals/ui/Table/CustomRow";
import HeadCell from "components/Globals/ui/Table/HeadCell";
import { useRouter } from "next/navigation";

export type PageType = {
  pagename: string;
  url: string;
  created: string;
};

const PagesTable = ({ pages }: { pages: PageType[] }) => {
  const router = useRouter();
  const tableStyle = {
    width: "75%",
    margin: "auto",
    mt: 3,
    mb: 7,
    height: 400,
  };
  return (
    <>
      <TableContainer component={Paper} sx={tableStyle}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <HeadCell>Page name</HeadCell>
              <HeadCell>URL</HeadCell>
              <HeadCell>Created</HeadCell>
              <HeadCell> </HeadCell>
              <HeadCell> </HeadCell>
              <HeadCell>
                <Button
                  variant="outlined"
                  endIcon={<Add />}
                  onClick={() => {
                    router.push("/createpage");
                  }}
                >
                  Create
                </Button>
              </HeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pages.map((page) => (
              <CustomRow key={page.url}>
                <TableCell scope="row">{page.pagename}</TableCell>
                <TableCell scope="row">{page.url}</TableCell>
                <TableCell scope="row">
                  {new Date(page.created).toString()}
                </TableCell>
                <TableCell scope="row">
                  <Button
                    variant="outlined"
                    endIcon={<Visibility />}
                    onClick={() => {
                      router.push(`page/en/${page.url}`);
                    }}
                  >
                    en
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    endIcon={<Visibility />}
                    onClick={() => {
                      router.push(`page/ar/${page.url}`);
                    }}
                  >
                    ar
                  </Button>
                </TableCell>

                <TableCell scope="row">
                  <Button
                    variant="outlined"
                    endIcon={<Edit />}
                    onClick={() => {
                      router.push(`/editpage${page.url}`);
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </CustomRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PagesTable;
