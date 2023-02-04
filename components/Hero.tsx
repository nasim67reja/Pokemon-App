import { GET_POKEMONS } from "@/queries/pokemonQueries";
import { useQuery } from "@apollo/client";

// components
import Card from "./Card";

const Hero = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: 10, offset: 0 },
  });

  return (
    <div>
      <div
        className="my-element min-h-screen  bg-cover bg-top"
        style={{ backgroundImage: `url(/assets/Background.png)` }}
      >
        <div className="my-container flex flex-col gap-40 ">
          <div
            className="flex justify-center mt-20
          "
          >
            <img src="/assets/logo.png" alt="pokemon-logo" />
          </div>
          <div className="grid grid-cols-5 gap-x-32 gap-y-16 border-2 border-black ">
            {!loading &&
              !error &&
              data.pokemons.results.map((el: any, i: any) => (
                <Card key={i} pokemon={el} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
