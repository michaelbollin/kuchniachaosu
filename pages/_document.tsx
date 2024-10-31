import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-black">
        <Main />
        <NextScript />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" /> 
      </body>
    </Html>
  )
}
