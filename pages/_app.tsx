import type { AppProps } from "next/app";
import "../src/app/globals.css";
import { Roboto_Mono, Raleway } from "next/font/google";

export const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto_Mono({
  variable: "--font-roboto_mono",
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${raleway.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
