// In _document.js
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://cdn.pagesense.io/js/movingnyc/83cdbe19c41e4e268124716adf71582b.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  )
}