// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { tier } = req.query;
  const myFetch = fetch(
    `https://www.smogon.com/stats/${tier[0]}/${tier[1]}.txt`
  );

  myFetch.then(function (response) {
    return response.text().then((text) => {
      const data = text;

      const words = data.split("\n");

      const pokemons = words.splice(5, words.length - 7);

      const splitPokemon = pokemons.map((pokemon) => {
        const pokemonSplit = pokemon.split("|");

        const pokemonObject = pokemonSplit.splice(1, 3);

        return pokemonObject;
      });

      res.status(200).send(splitPokemon);
    });
  });
};
