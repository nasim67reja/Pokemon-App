import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { addPathC } from "@/Helper/Reuse";
import { GET_POKEMON_ON_SINGLE_PAGE } from "@/queries/pokemonQueries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// Component
import Left from "@/components/Left";
import Right from "@/components/Right";

const Pokemon = () => {
  const router = useRouter();
  const { pokemon } = router.query;

  const { loading, error, data } = useQuery(GET_POKEMON_ON_SINGLE_PAGE, {
    variables: { name: pokemon },
  });

  console.log(data);

  return (
    <section className="flex h-screen">
      <div className="basis-[7.26%]">
        <img src="/assets/Left.png" alt="svg-image" />
      </div>

      <div className="basis-[85.26%] px-20 ">
        <div className="flex justify-center mt-16 mb-52">
          <img src="assets/Logo.png" alt="pokemon logo" />
        </div>

        <div className="flex justify-between">
          <Left data={data} />
          <div className="border-2 border-black">
            {data ? (
              <img
                src={addPathC(data.pokemon.sprites.front_default)}
                className="group-hover:scale-110 transition-all duration-300"
                alt="pokemon"
              />
            ) : (
              <Skeleton height={200} width={200} className="mt-20" />
            )}
          </div>
          <Right data={data} />
        </div>
      </div>

      <div className="basis-[7.26%]">
        <img src="/assets/Left.png" alt="svg-image" />
      </div>
    </section>
  );
};

export default Pokemon;
