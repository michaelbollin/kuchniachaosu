import 'tailwindcss/tailwind.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" /> 
      </body>
    </html>
  )
}
