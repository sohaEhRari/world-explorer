import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1><strong>World Explorer</strong></h1>

        <p>
          Explore countries, flags, capitals, populations, languages, and cultures
          around the world.
        </p>

        <div className="hero-buttons">
          <Link href="/countries" className="btn primary">
            Explore Countries
          </Link>

          <Link href="/about" className="btn secondary">
            About Project
          </Link>
        </div>
      </div>
    </main>
  );
}