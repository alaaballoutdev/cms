import "./globals.css";
import { Inter } from "next/font/google";
import Bars from "components/Globals/Bars/Bars";
export const metadata = {
  title: "Post In",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Bars />
        {children}
      </body>
    </html>
  );
}
