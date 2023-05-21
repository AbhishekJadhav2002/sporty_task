import './globals.css'
import localFont from 'next/font/local'

const untitledSansWeb = localFont({
  src: [
    {
      path: '../public/UntitledSansWeb-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/UntitledSansWeb-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Sporty Task',
  description: 'Internship task for Sporty',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={untitledSansWeb.className}>{children}</body>
    </html>
  )
}