import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "The Gennie Lab",
  description: "Research Laboratory Website",
  icons: {
    icon: "/icons/LogoBlue.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
