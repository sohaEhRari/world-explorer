
"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="navplus">
      <div className="logo">🌎World Explorer</div>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <nav className={`navi ${open ? "active" : ""}`}>
        <Link href="/">Home</Link>

        <Link href="/countries">
          Countries
        </Link>

        <Link href="/search">
          Search
        </Link>

        <Link href="/about">
          About
        </Link>
      </nav>
    </div>
  )
}
