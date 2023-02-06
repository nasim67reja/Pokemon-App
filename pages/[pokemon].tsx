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

        <div className="flex justify-between ">
          <Left data={data} />
          <div className="basis-[20%] group  bg-bottom">
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
          <Right data={data} />
        </div>

        <div className="flex justify-center mt-[10rem]">
          <Link
            href="/"
            className="border-[4px] border-[#2B73B9] bg-[#FFCB05] flex gap-4 text-white px-[3.2rem] py-[1.4rem] rounded-[5px] w-fit text-[2rem]"
          >
            <img src="/assets/homeIcon.svg" alt="" />
            <span> Back to Homepage</span>
          </Link>
        </div>
      </div>

      <div className="basis-[7.26%]">
        <img src="/assets/Left.png" alt="svg-image" />
      </div>
    </section>
  );
};

export default Pokemon;
