import "app/(web)/globals.css";
import { Inter } from "next/font/google";
import Theme from "components/Layout/Theme";
export const metadata = {
  title: "Post In",
};
export const dynamic = "force-static";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
