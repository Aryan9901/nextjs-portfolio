import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Aryan's Portfolio",
//   description: "Modern & Minimal Portfolio",
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://aryang.xyz"),
  title: {
    default: "Aryan Gupta - Software Developer",
    template: "%s | Aryan Gupta",
  },
  description:
    "Software Developer from Bhopal specializing in React, Node.js, and full-stack web development. View my projects and get in touch for collaboration.",
  keywords: [
    "Software Developer",
    "React Developer",
    "Full Stack Developer",
    "Web Developer",
    "Bhopal",
    "India",
  ],
  authors: [{ name: "Aryan Gupta" }],
  creator: "Aryan Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryang.xyz",
    title: "Aryan Gupta - Software Developer",
    description:
      "Software Developer from Bhopal specializing in React, Node.js, and full-stack web development.",
    siteName: "Aryan Gupta Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aryan Gupta - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Gupta - Software Developer",
    description:
      "Software Developer from Bhopal specializing in React, Node.js, and full-stack web development.",
    images: ["/og-image.jpg"],
    creator: "@YourTwitterHandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
