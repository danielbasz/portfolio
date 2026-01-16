import "./globals.scss";
import { generateMetadata, siteConfig } from "../config";
import ParticleBackground from "../components/ParticleBackground";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === 'production';
  const assetPrefix = isProd ? siteConfig.deployment.assetPrefix : '';

  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --asset-prefix: '${assetPrefix}';
            }
            body {
              background: #000 !important;
            }
          `
        }} />
      </head>
      <body>
        {/* Interactive particle background with "Hi!" text */}
        <ParticleBackground
          text="Hi!"
          particleCount={800}
          textParticleCount={2000}
          mouseRadius={120}
        />
        {children}
      </body>
    </html>
  );
}
