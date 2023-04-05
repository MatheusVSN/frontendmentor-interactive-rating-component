import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body className="bg-very-dark-blue h-screen grid place-content-center p-8">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
