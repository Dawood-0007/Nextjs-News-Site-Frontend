import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Kalyptica",
  description: "Kalyptica - Your Source for Articles",
  icons: {
    icon: './icon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
      
      <body>
        {children}
      </body>
    </html>
  );
}
