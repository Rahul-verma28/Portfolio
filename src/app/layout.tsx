import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulverma.dev"),
  title: {
    default: "Rahul Verma — Full Stack Developer | MERN Stack Expert",
    template: "%s | Rahul Verma",
  },
  description:
    "Full Stack Developer specializing in MERN stack, React.js, Next.js, Node.js, and modern web technologies. Building scalable, high-performance web applications with clean, maintainable code.",
  keywords: [
    "Rahul Verma",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
  ],
  authors: [{ name: "Rahul Verma" }],
  creator: "Rahul Verma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahulverma.dev",
    title: "Rahul Verma — Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, React.js, Next.js, and modern web technologies. Building high-performance web applications.",
    siteName: "Rahul Verma Portfolio",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Rahul Verma - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Verma — Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, React.js, Next.js, and modern web technologies.",
    images: ["/hero.png"],
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rahul Verma",
              url: "https://rahulverma.dev",
              image: "https://rahulverma.dev/hero.png",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Makunai Global",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Greater Noida",
                addressCountry: "IN",
              },
              email: "rahulverma281202@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/rahul-verma-09227a263/",
                "https://github.com/Rahul-verma28",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Galgotias University",
              },
              knowsAbout: [
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "TypeScript",
                "JavaScript",
                "Full Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
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
