import type { Metadata } from "next";
import { Geologica} from "next/font/google";
import "./globals.css";


const geologicaSans = Geologica({
  variable: "--font-geologica-sans",
  subsets: ["latin"],
});

// const geologicaMono = Geologica_Mono({
//   variable: "--font-geologica-mono",
//   subsets: ["latin"],
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



export const metadata: Metadata = {
  title: "Sinister Field",
  description: "Inspired by left-field creativity, we deliver innovative solutions tailored to your unique needs.",
  icons: {
    icon: [
      {url: 'favicon.ico', sizes: '32x32'},
      {url: '/icon-16.png', sizes: '16x16', type: 'image/png'},
      {url: '/icon-32.png', sizes: '32x32', type: 'image/png'},
      {url: '/icon-48.png', sizes: '48x48', type: 'image/png'},
      {url: '/icon-192.svg', type: 'image/svg+xml'},
    ],
    apple: [{url: '/apple-touch-icon.png', sizes: '180x180'}],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geologicaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
