import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { Toaster } from "@/components/ui/toaster"
import FloatingChatbot from "@/components/floating-chatbot"

export const metadata: Metadata = {
  title: "CaféMind - AI Coffee Assistant",
  description: "Smart coffee ordering kiosk powered by multi-agent AI system",
  authors: [{ name: "Chidwipak Kuppani" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <CartProvider>
          {children}
          <FloatingChatbot />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
