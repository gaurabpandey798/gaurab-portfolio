import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurab Pandey — Flutter Developer & UI/UX Designer from Nepal",
  description: "Official portfolio of Gaurab Pandey, a premium Flutter Developer, UI/UX Designer, Website & App Developer based in Kathmandu, Nepal. Building high-performance cross-platform apps and modern web solutions.",
  keywords: [
    "Gaurab Pandey",
    "Gaurab Pandey Nepal",
    "Gaurab Pandey Flutter Developer",
    "Gaurab Pandey Designer",
    "Gaurab Pandey Portfolio",
    "Flutter Developer Nepal",
    "UI/UX Designer Nepal",
    "App Developer Nepal",
    "Software Engineer Nepal",
    "Web Developer Kathmandu",
    "Spring Boot Developer Nepal",
    "Gaurab Pandey App Developer"
  ],
  authors: [{ name: "Gaurab Pandey", url: "https://gaurabpandey.com.np" }],
  creator: "Gaurab Pandey",
  publisher: "Gaurab Pandey",
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
  alternates: {
    canonical: "https://gaurabpandey.com.np",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gaurabpandey.com.np",
    title: "Gaurab Pandey — Flutter Developer, Designer, Website & App Developer",
    description: "Premium portfolio of Gaurab Pandey — Flutter Developer, UI/UX Designer, and Web Developer from Nepal. Explore projects, skills, and coding journey.",
    siteName: "Gaurab Pandey Portfolio",
    images: [
      {
        url: "https://gaurabpandey.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gaurab Pandey — Flutter Developer & UI/UX Designer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurab Pandey — Flutter Developer & UI/UX Designer from Nepal",
    description: "Premium Flutter Developer and UI/UX Designer from Nepal. Exploring web, mobile, and full-stack solutions.",
    images: ["https://gaurabpandey.com.np/og-image.png"],
    creator: "@gaurabpandey",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#152d1b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://gaurabpandey.com.np/#person",
        "name": "Gaurab Pandey",
        "jobTitle": "Flutter Developer & UI/UX Designer",
        "url": "https://gaurabpandey.com.np",
        "image": "https://gaurabpandey.com.np/gaurab-pandey-about.png",
        "description": "Gaurab Pandey is a Flutter Developer, UI/UX Designer, and Full Stack Website & App Developer from Kathmandu, Nepal.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kathmandu",
          "addressCountry": "NP"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Madan Bhandari Memorial College"
        },
        "sameAs": [
          "https://github.com/gaurabpandey",
          "https://linkedin.com/in/gaurabpandey",
          "https://twitter.com/gaurabpandey"
        ],
        "knowsAbout": [
          "Flutter",
          "Dart",
          "Android App Development",
          "iOS App Development",
          "Next.js",
          "React",
          "UI/UX Design",
          "Spring Boot",
          "Java",
          "MySQL",
          "PHP"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://gaurabpandey.com.np/#website",
        "url": "https://gaurabpandey.com.np",
        "name": "Gaurab Pandey | Portfolio",
        "description": "Premium developer portfolio of Gaurab Pandey — Flutter Developer, UI/UX Designer, and Web Developer from Nepal.",
        "publisher": {
          "@id": "https://gaurabpandey.com.np/#person"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
