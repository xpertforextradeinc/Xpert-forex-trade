import type React from "react"
import "../basehub.config"
import "../styles/globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { basehub } from "basehub"
import { Providers } from "./providers"
import { footerFragment, headerFragment } from "../lib/basehub/fragments"
import { Newsletter } from "./_sections/newsletter"
import { themeFragment } from "../context/basehub-theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
})

export const dynamic = "force-static"
export const revalidate = 30

export const metadata = {
  generator: "v0.dev",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const hasToken = !!process.env.BASEHUB_TOKEN

  if (hasToken) {
    // Normal path: fetch content from Basehub
    try {
      const [
        {
          site: { footer, settings, header },
        },
      ] = await Promise.all([
        basehub().query({
          site: {
            settings: {
              theme: themeFragment,
              logo: {
                dark: {
                  url: true,
                  alt: true,
                  width: true,
                  height: true,
                  aspectRatio: true,
                  blurDataURL: true,
                },
                light: {
                  url: true,
                  alt: true,
                  width: true,
                  height: true,
                  aspectRatio: true,
                  blurDataURL: true,
                },
              },
              showUseTemplate: true,
            },
            header: headerFragment,
            footer: footerFragment,
          },
        }),
      ])

      return (
        <html suppressHydrationWarning lang="en">
          <body
            className={`min-h-svh max-w-[100vw] bg-[--surface-primary] text-[--text-primary] dark:bg-[--dark-surface-primary] dark:text-[--dark-text-primary] ${geistMono.variable} ${geist.variable} font-sans`}
          >
            <Providers theme={settings.theme}>
              <Header logo={settings.logo} header={header} />
              <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
              <Newsletter newsletter={footer.newsletter} />
              <Footer footer={footer} logo={settings.logo} />
            </Providers>
          </body>
        </html>
      )
    } catch (err) {
      // If Basehub query fails for any reason, fall back to static UI
      console.error("Basehub query failed, rendering static layout:", err)
    }
  }

  // Fallback path: simple static layout so the app builds and deploys without BASEHUB_TOKEN
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <StaticHeader />
        <main className="min-h-[calc(100svh-64px)]">{children}</main>
        <StaticFooter />
      </body>
    </html>
  )
}

function StaticHeader() {
  return (
    <header
      className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-950/60"
      role="banner"
    >
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gray-200 dark:bg-gray-800" aria-hidden />
          <span className="font-semibold">Marketing Website</span>
        </div>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <li>
              <a href="/" className="hover:text-gray-900 dark:hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-900 dark:hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/changelog" className="hover:text-gray-900 dark:hover:text-white">
                Changelog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function StaticFooter() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Marketing Website. All rights reserved.
          </p>
          <ul className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="/privacy" className="hover:text-gray-900 dark:hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-900 dark:hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-900 dark:hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
