"use client";
import './globals.css'
//import { Inter } from 'next/font/google'
import { darkTheme } from './theme/themes'
import { ThemeProvider, CssBaseline } from '@mui/material'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next13+MaterialUI',
  description: 'zdarova',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body /*className={inter.className}*/>{children}</body>
      </ThemeProvider>
    </html>
  )
}
