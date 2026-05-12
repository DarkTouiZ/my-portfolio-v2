import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Adisorn Parama | Computer Engineering Portfolio",
  description:
    "Portfolio of Adisorn Parama, a computer engineering student focused on embedded systems, FPGA/HDL, applied machine learning, GIS, dashboards, and practical software systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
