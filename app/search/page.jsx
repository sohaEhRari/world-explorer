import CountrySearch from "../../components/countrySearch"

export default async function Search() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3",
    {
      next: { revalidate: 3600 },
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch countries")
  }

  const countries = await res.json()

  return <CountrySearch countries={countries} />
}