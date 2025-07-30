
import { ThemeProvider } from "@/components/contexts/theme/theme-provider";
import "@/styles/globals.css";


import { PATH_HOME } from '@/constants/paths.constant'

export default function NotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
        suppressHydrationWarning 
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-destructive">404</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">Page not found</h1>
              <p className="mt-6 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href={PATH_HOME} className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-accent shadow-xs hover:bg-primary/90">Go back home</a>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}