import Link from "next/link";

export default function CountryCard({ country }) {
  console.log("CCA3 CODE:", country?.cca3);

    return (
      <div className="country-card">
  
        <img
          src={country?.flags?.png}
          alt={country?.name?.common}
        />
  
        <h2>{country?.name?.common}</h2>
  
        <p>
          Capital: {country?.capital?.[0] || "No capital"}
        </p>
  
        <p>
          Region: {country?.region}
        </p>
  
        <p>
          Population: {country?.population?.toLocaleString()}
        </p>
  
        <Link href={`/countries/${country.cca3}`}>
  View Details
</Link>
  
      </div>
    );
  }