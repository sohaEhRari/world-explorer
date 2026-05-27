"use client"

import Link from "next/link"
import { useState } from "react"

export default function CountrySearch({ countries }) {
  const [search, setSearch] = useState("")

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <main className="search">
      <h1>Welcome To the Country Search</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search country"
      />

      <div className="country-search">
        {filteredCountries.map((country) => (
          <div key={country.cca3} className="country-key">
            <img
              src={country.flags.png}
              alt={country.name.common}
            />

            <h2>{country.name.common}</h2>

            <p>
              Capital:{" "}
              {country.capital?.[0] || "N/A"}
            </p>

            <Link href={`/countries/${country.cca3}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}