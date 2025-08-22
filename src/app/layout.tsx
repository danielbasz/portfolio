import "./globals.scss";
import { generateMetadata, siteConfig } from "../config";

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
              background-image: url('${assetPrefix}/assets/white-space-addition.jpg') !important;
            }
          `
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
