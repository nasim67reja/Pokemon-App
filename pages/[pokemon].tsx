import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { addPathC } from "@/Helper/Reuse";
import { GET_POKEMON_ON_SINGLE_PAGE } from "@/queries/pokemonQueries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";

// Component
import Left from "@/components/Left";
import Right from "@/components/Right";

const PokemonImage: React.FC<any> = ({ data }) => {
  return (
    <div className="group row-start-1 lg:col-start-2  flex flex-col justify-center items-center">
      {data ? (
        <>
          <img
            src={addPathC(data.pokemon.sprites.front_default)}
            className="cus-w group-hover:scale-110 transition-all duration-300"
            alt="pokemon"
          />
          <img src="/assets/Shadow.png" alt="" />
        </>
      ) : (
        <Skeleton height={200} width={200} className="mt-20" />
      )}
    </div>
  );
};

const Pokemon = () => {
  const router = useRouter();
  const { pokemon } = router.query;

  const { loading, error, data } = useQuery(GET_POKEMON_ON_SINGLE_PAGE, {
    variables: { name: pokemon },
  });

  return (
    <>
      <section className="flex lg:min-h-screen  pb-[5rem]">
        <div className="basis-[7.26%] min-h-screen hidden 2xl:block">
          <img className="h-full" src="/assets/Left.png" alt="svg-image" />
        </div>

        <div className="flex-grow px-24 ">
          <div className="flex justify-center mt-16 mb-52">
            <img src="assets/Logo.png" alt="pokemon logo" />
          </div>

          <div className="grid gap-[10rem] lg:gap-[6rem] xl:gap-[10rem] lg:grid-cols-[28%_32%_20%] justify-items-center ">
            {error && <div>Something went wrong</div>}

            {data ? (
              <Left data={data} />
            ) : (
              <div>
                <Skeleton height={20} width={100} />
                <Skeleton height={10} width={250} className="mt-[25px]" />
                <Skeleton height={10} width={250} />
                <Skeleton height={10} width={250} className="mb-[25px]" />
                <Skeleton height={220} width={250} />
              </div>
            )}
            <PokemonImage data={data} />
            <Right data={data} />
          </div>
          <div className="flex items-center justify-center mt-[10rem]">
            <Link
              href="/"
              className="border-[4px] border-PRIMARYBL bg-PRIMARYYL flex gap-4 text-white px-[32px] py-[10px] rounded-[5px] w-fit text-[2rem]"
            >
              <img src="/assets/homeIcon.svg" alt="" />
              <span> Back to Homepage</span>
            </Link>
          </div>
        </div>

        <div className="hidden 2xl:block min-h-screen basis-[7.26%]">
          <img className="h-full" src="/assets/Left.png" alt="svg-image" />
        </div>
      </section>
    </>
  );
};

export default Pokemon;
