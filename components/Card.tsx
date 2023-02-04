import React from "react";
import { GET_POKEMON } from "@/queries/pokemonQueries";
import { useQuery } from "@apollo/client";
import { capitalizeString } from "@/Helper/Reuse";

const Card: React.FC<any> = ({ pokemon }) => {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: pokemon.name },
  });
  console.log(data);

  return (
    <div className="custom-clip-path p-5 bg-[#FFFFFF] rounded  h-[307px]">
      <div className="bg-[#F2F2F2] rounded flex justify-center items-center h-[215px] ">
        <img src={pokemon.image} className="h-full w-full" alt="" />
      </div>
      <h3 className="text-[2rem] font-medium mt-4 mb-2">
        {capitalizeString(pokemon.name)}
      </h3>
      <div className="flex gap-2">
        {data.pokemon.types.map((el: any, i: number) => (
          <div
            className={`text-[1.4rem] rounded-[4px] py-1 px-8 text-white ${
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
        ))}
      </div>
    </div>
  );
};

export default Card;
