import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Footer from '../../components/Footer';
import CreateTheme from './createTheme';
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
        <CreateTheme lang={params.lang}>
          {children}
          <Footer lang={params.lang} />
        </CreateTheme>
      </body>
    </html>
  );
}
