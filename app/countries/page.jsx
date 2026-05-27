import CountryCard from "@/components/CountryCard";

export default async function Countries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3",
    { cache: "force-cache" }
  );

  const countries = await res.json();

  return (
    <main>
      <h1>Explore Country</h1>

      <div className="country-grid">
        {countries.slice(0, 20).map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </main>
  );
}