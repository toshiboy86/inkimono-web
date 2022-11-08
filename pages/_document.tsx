import Document, { Html, Head, Main, NextScript } from 'next/document'
import Box from '@mui/material/Box';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
				</Head>
        <body>
          <Box id="background"/>
            <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
