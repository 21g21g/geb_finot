import "./CountryCard.css"
 const CountryCard = ({countryData}) => {
   
  return (
    <div className="country-card-container">
    {countryData.map((country) => (
      <div key={country.cca3} className="country-card">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="country-flag"
        />
        <div className="country-info">
          <h2 className="country-name">{country.name.common}</h2>
          <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p>
            <strong>Languages:</strong>{" "}
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default CountryCard;
