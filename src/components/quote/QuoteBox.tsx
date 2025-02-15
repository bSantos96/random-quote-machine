import React from "react"

export default function QuoteBox({ children }: { children: React.ReactNode }) {
  return <div id="quote-box" className="quote-box">
    {children}
  </div>
}