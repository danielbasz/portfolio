import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Daniel Porto - Developer & Multimedia Specialist",
  description: "Full Stack Software Developer & Multimedia Specialist passionate in bridging technology and art through code and creative media.",
  keywords: ["Full Stack Developer", "Software Engineer", "Multimedia", "Angular", "Java", "React", "Next.js", "Web Development"],
  authors: [{ name: "Daniel Porto", url: "https://danielbasz.github.io/portfolio-nextjs/" }],
  creator: "Daniel Porto",
  openGraph: {
    title: "Daniel Porto - Developer & Multimedia Specialist",
    description: "Full Stack Software Developer & Multimedia Specialist passionate in bridging technology and art through code and creative media.",
    url: "https://danielbasz.github.io/portfolio-nextjs/",
    siteName: "Daniel Porto Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/profile-picture.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Porto - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Porto - Developer & Multimedia Specialist",
    description: "Full Stack Software Developer & Multimedia Specialist passionate in bridging technology and art through code and creative media.",
    images: ["/assets/profile-picture.jpg"],
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
    google: "your-google-verification-code", // Add when you get it
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
