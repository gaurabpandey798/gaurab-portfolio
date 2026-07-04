import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Gaurab Pandey — Full Stack Software Developer | Flutter, Spring Boot, SEO & QA",
  description: "Official portfolio of Gaurab Pandey, a Full Stack Software Developer specializing in Flutter, Spring Boot, REST APIs, SEO, and Quality Assurance based in Kathmandu, Nepal.",
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
    "Gaurab Pandey App Developer",
    "Full Stack Developer Nepal",
    "SEO Specialist Kathmandu",
    "QA Engineer Nepal",
    "Spring Boot Developer Kathmandu",
    "REST API Developer Nepal"
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
    title: "Gaurab Pandey — Full Stack Software Developer, Flutter, SEO, & QA",
    description: "Official portfolio of Gaurab Pandey — Full Stack Software Developer specializing in Flutter, Spring Boot, REST APIs, SEO, and Quality Assurance.",
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
    title: "Gaurab Pandey — Full Stack Software Developer specializing in Flutter, Spring Boot, SEO, & QA",
    description: "Full Stack Software Developer specializing in Flutter, Spring Boot, REST APIs, SEO, and Quality Assurance.",
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://gaurabpandey.com.np/#person",
        "name": "Gaurab Pandey",
        "alternateName": "Gaurab Pandey Nepal",
        "jobTitle": "Full Stack Software Developer",
        "url": "https://gaurabpandey.com.np",
        "image": "https://gaurabpandey.com.np/gaurab-pandey-about.png",
        "description": "Full Stack Software Developer from Kathmandu, Nepal specializing in Flutter, Spring Boot Backend, REST APIs, SEO, and Quality Assurance.",
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
          "https://github.com/gaurabpandey798",
          "https://www.linkedin.com/in/gaurabpandey-dev",
          "https://www.instagram.com/gaurabpandey798/"
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
          "PHP",
          "REST APIs",
          "SEO",
          "Technical SEO",
          "On-Page SEO",
          "Keyword Research",
          "Google Search Console",
          "Performance Optimization",
          "Core Web Vitals",
          "SEO Audits",
          "Quality Assurance",
          "Manual Testing",
          "Functional Testing",
          "Regression Testing",
          "API Testing",
          "Test Case Design",
          "Bug Reporting",
          "Usability Testing",
          "Git",
          "GitHub",
          "Android Studio",
          "IntelliJ IDEA",
          "Postman",
          "Figma",
          "VS Code"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://gaurabpandey.com.np/#website",
        "url": "https://gaurabpandey.com.np",
        "name": "Gaurab Pandey | Full Stack Developer & SEO Expert Portfolio",
        "description": "Enterprise-grade portfolio of Gaurab Pandey — Full Stack Software Developer, Flutter Developer, and SEO/QA Specialist from Kathmandu, Nepal.",
        "publisher": {
          "@id": "https://gaurabpandey.com.np/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://gaurabpandey.com.np/#webpage",
        "url": "https://gaurabpandey.com.np",
        "name": "Gaurab Pandey — Premium Portfolio",
        "description": "Explore the projects, skills, development journey, and professional services of Gaurab Pandey.",
        "isPartOf": {
          "@id": "https://gaurabpandey.com.np/#website"
        },
        "about": {
          "@id": "https://gaurabpandey.com.np/#person"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://gaurabpandey.com.np/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://gaurabpandey.com.np"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://gaurabpandey.com.np/blog"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Vault",
        "operatingSystem": "Android, iOS",
        "applicationCategory": "UtilitiesApplication",
        "description": "A secured password manager that helps you manage your passwords securely with your biometrics.",
        "author": {
          "@id": "https://gaurabpandey.com.np/#person"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "EV Smart Charge",
        "operatingSystem": "Android, iOS",
        "applicationCategory": "TravelApplication",
        "description": "An online charger booking app that helps you analyze the queue in real-time and find the nearest station.",
        "author": {
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
        {/* Google Tag Manager */}
        {gtmId && (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
        
        {/* Google Analytics 4 */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}

        {/* Microsoft Clarity */}
        {clarityId && (
          <Script
            id="clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
              `,
            }}
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
