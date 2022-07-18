import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head><link rel="preconnect" href="https://fonts.googleapis.com" />
        <title>Strijp Spark</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet"/></Head>Y
      <body className="p-1">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
