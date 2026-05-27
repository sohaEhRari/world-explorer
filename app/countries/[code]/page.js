import Link from "next/link";

export default async function CountryDetails({ params }) {
  const { code } = await params;

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}`

   
    
  );

  const data = await res.json();
  const country = data[0];

  return (
    <main className="details">
      <h1>{country?.name?.common}</h1>

      <img
        src={country?.flags?.png}
        alt={country?.name?.common}
        width={200}
      />

      <p>
        <strong>Capital:</strong>{" "}
        {country?.capital?.[0] || "No capital"}
      </p>

      <p>
        <strong>Region:</strong> {country?.region}
      </p>

      <p>
        <strong>Population:</strong>{" "}
        {country?.population?.toLocaleString()}
      </p>

      <p>
        <strong>Country Code:</strong> {country?.cca3}
      </p>
      <Link className="btna" href="/countries">
        Back to Country
      </Link>
    </main>
  );
}