import { raleway } from "../../pages/_app";
import "./globals.css";

export const metadata = {
  title: "Enkindle",
  description: "Quote Recommendation App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}

