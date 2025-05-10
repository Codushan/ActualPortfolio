// app/layout.tsx
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/app/Main/compoMain/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'My App',
    description: 'Streaming platform dashboard',
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
