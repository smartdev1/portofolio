import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aristide-adouko.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aristide Adouko — Solutions Architect & Lead Developer",
  description:
    "Portfolio professionnel de Aristide  Adouko, Solutions Architect & Lead Développeur Full-Stack basé à Abidjan. 8+ ans d'expérience en conception de systèmes critiques, Laravel, Vue.js, Angular, Node.js et architectures d'entreprise.",
  keywords: [
    "Aristide Adouko",
    "Solutions Architect",
    "Lead Developer",
    "Abidjan",
    "Côte d'Ivoire",
    "Full-Stack Developer",
    "Laravel",
    "Angular",
    "Vue.js",
    "NestJS",
    "Epitech",
  ],
  authors: [{ name: "Aristide  Adouko" }],
  openGraph: {
    title: "Aristide Adouko — Solutions Architect & Lead Developer",
    description:
      "8+ ans d'expérience · Solutions Architect & Lead Dev basé à Abidjan. Découvrez ses projets phares, sa stack technique et son parcours professionnel.",
    type: "website",
    locale: "fr_FR",
    siteName: "Aristide Adouko Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aristide Adouko — Solutions Architect & Lead Dev",
    description:
      "Portfolio & Dossier d'Ingénierie de Aristide Adouko, Développeur Full-Stack & UI Architect basé à Abidjan.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    var d = (!t || t === 'system')
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : t;
    document.documentElement.setAttribute('data-theme', d);
    document.documentElement.style.colorScheme = d;
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="h-full bg-[var(--bg-surface)] text-[var(--text-primary)] font-sans overflow-x-hidden transition-colors duration-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--bg-pill-active)] focus:text-[var(--text-inverted)] focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
