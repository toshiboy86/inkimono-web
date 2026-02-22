import '../../styles/globals.css';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from '../../components/Footer';
import { TLocale } from '../../src/entities';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: TLocale;
  };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <ResponsiveAppBar lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
