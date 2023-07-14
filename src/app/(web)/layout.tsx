import GlobalLayout from "components/Layout/GloablLayout";
import "./globals.css";
import { Inter } from "next/font/google";
import Theme from "components/Layout/Theme";
import RecoilRootWrapper from "components/Recoil/RecoilRoot";

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
        <RecoilRootWrapper>
          <Theme>
            <GlobalLayout>{children}</GlobalLayout>
          </Theme>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
