import React from "react"
import { Link } from "gatsby"

export default ({ pageContext: { pokemon } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <h1>{JSON.stringify(pokemon)}</h1>
    {/* <img src={pokemon.sprites.front_default} alt={pokemon.nmae} />
    <h2>Abilities</h2>
    <ul>
      {pokemon.abilities.map(ability => (
        <li key={ability.name}>
          <Link to={`./pokemon/${pokemon.name}/ability/${ability.name}`}>
            {ability.name}
          </Link>
        </li>
      ))}
    </ul> */}
    <Link to="/">Back to all Pokémon</Link>
  </div>
)
