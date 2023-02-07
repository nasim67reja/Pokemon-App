import { GET_POKEMON } from "@/queries/pokemonQueries";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

//  reuse func
import { capitalizeString } from "@/Helper/Reuse";
import { padWithZeros } from "@/Helper/Reuse";
import { addPathC } from "@/Helper/Reuse";

export const Types: React.FC<any> = ({ data }) => {
  return (
    <>
      {data ? (
        data.pokemon.types.map((el: any, i: number) => (
          <div
            className={`text-[14px] rounded-[4px]  px-[20px] text-white ${
              el.type.name === "poison"
                ? "bg-SECONDARYPO"
                : el.type.name === "fire"
                ? "bg-SECONDARYFR"
                : el.type.name === "grass"
                ? "bg-SECONDARYBL"
                : el.type.name === "water"
                ? "bg-SECONDARYWA"
                : el.type.name === "bug"
                ? "bg-SECONDARYWA"
                : "bg-gradient-to-b from-fly to-from-fly"
            }`}
            key={i}
          >
            {capitalizeString(el.type.name)}
          </div>
        ))
      ) : (
        <Skeleton />
      )}
    </>
  );
};

const Card: React.FC<any> = ({ pokemon }) => {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: pokemon.name },
  });

  return (
    <Link
      href={`/${pokemon.name}`}
      className="card custom-clip-path p-[10px] bg-[#FFFFFF] rounded inline-block w-[235px] h-[307px]   md:h-fit cursor-pointer group hover:bg-[#257BC4] transition-all duration-300 "
    >
      <div className="card-img-box bg-[#F2F2F2] rounded flex justify-center items-center w-full h-[215px] relative p-8">
        <span className="absolute top-4 left-4   tracking-wider">
          #{data && padWithZeros(data.pokemon.id)}
        </span>
        <img
          src={data && addPathC(data.pokemon.sprites.front_default)}
          className="group-hover:scale-110 transition-all duration-300 h-full w-full"
          alt="pokemon"
        />
      </div>
      <h3 className="font-medium px-3 mt-4 mb-2 group-hover:text-white transition-all duration-300">
        {capitalizeString(pokemon.name)}
      </h3>
      <div className="flex gap-2 px-3">
        <Types data={data} />
      </div>
    </Link>
  );
};

export default Card;
