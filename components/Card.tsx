import { GET_POKEMON } from "@/queries/pokemonQueries";
import { useQuery } from "@apollo/client";
import Link from "next/link";

//  reuse func
import { capitalizeString } from "@/Helper/Reuse";
import { padWithZeros } from "@/Helper/Reuse";
import { addPathC } from "@/Helper/Reuse";
import Skeleton from "react-loading-skeleton";

export const Types: React.FC<any> = ({ data }) => {
  return (
    <>
      {data ? (
        data.pokemon.types.map((el: any, i: number) => (
          <div
            className={`text-[1.4rem] rounded-[4px] pt-1 px-[2rem] text-white ${
              el.type.name === "poison"
                ? "bg-[#B97FC9] "
                : el.type.name === "fire"
                ? "bg-[#FC7C23]"
                : el.type.name === "grass"
                ? "bg-[#9BCC50]"
                : el.type.name === "water"
                ? "bg-[#4592C4]"
                : el.type.name === "bug"
                ? "bg-[#729F3F]"
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
  //   console.log(data);

  return (
    <Link
      href={`/${pokemon.name}`}
      className="custom-clip-path p-5 bg-[#FFFFFF] rounded   h-fit cursor-pointer group hover:bg-[#257BC4] transition-all duration-300"
    >
      <div className="bg-[#F2F2F2] rounded flex justify-center items-center h-[215px] relative p-8">
        <span className="absolute top-4 left-4   tracking-wider">
          #{data && padWithZeros(data.pokemon.id)}
        </span>
        <img
          src={data && addPathC(data.pokemon.sprites.front_default)}
          //   className="h-full w-full"
          className="group-hover:scale-110 transition-all duration-300"
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
