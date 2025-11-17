import { type PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export default function App({ Component, url }: PageProps) {
  return (
    <html lang="en" class="h-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Airisa Green — ESG & Carbon Markets</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="canonical" href={url?.href ?? "/"} />
        <meta
          name="description"
          content="Airisa Green — climate strategy, carbon projects, and ESG implementation."
        />
        {/* Open Graph */}
        <meta property="og:site_name" content="Airisa Green Consulting" />
        <meta
          property="og:title"
          content="Airisa Green — ESG & Carbon Markets"
        />
        <meta
          property="og:description"
          content="Climate strategy, carbon markets, and ESG implementation across African markets."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta property="og:image:alt" content="Airisa Green logo" />
        <meta property="og:url" content={url?.href ?? "/"} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Airisa Green — ESG & Carbon Markets"
        />
        <meta
          name="twitter:description"
          content="Climate strategy, carbon markets, and ESG implementation across African markets."
        />
        <meta name="twitter:image" content="/images/agc-logo.png" />
      </head>
      <body class="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main class="flex-1">
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
}
