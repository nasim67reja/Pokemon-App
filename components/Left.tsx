import { capitalizeString, padWithZeros } from "@/Helper/Reuse";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Left: React.FC<any> = ({ data }) => {
  // I think the pokemon's description data is not in the graphql schema that is why i can't get the data by query

  // pokemon=>species=>flavor_text_entries[9].flavor_text (flavor_text_entries not exist may be it's not exist in graphql api schema)

  // but pokemon=>species generates a link for species. by hiting a get request with the help of fetchApi on this link I get the necessary data

  // Maybe it's not a good approach but i can't find any other solution for doing that
  const [pokemon, setPokemon] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${data.pokemon.species.url}`);
        const data1 = await res.json();
        setPokemon(data1);
      } catch (err: any) {}
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h3 className="leading-[5.5rem] text-[#257BC4] text-[24px] lg:text-[4.8rem]  gap-4 font-medium lg:self-start">
        {data ? (
          <>
            <span>{capitalizeString(data.pokemon.name)}</span>
            <span>#{padWithZeros(data.pokemon.id)}</span>
          </>
        ) : (
          <Skeleton />
        )}
      </h3>

      <div className=" text-[16px] leading-[23px] lg:leading-[22px] my-16  pr-[22px]">
        {pokemon && pokemon.flavor_text_entries[9].flavor_text}
      </div>

      <div className=" custom-clip-path relative p-[4px]  bg-gradient-to-r from-[#F366B9] to-[#FC7C23] w-[350px] h-[245px] md:w-[310px] md:h-[240px] xl:w-[365px] xl:h-[253px]">
        <div className="custom-clip-path bg-white p-32  h-full flex justify-center items-center">
          <div>
            <div className="flex gap-[70px]">
              <div>
                <h4 className="font-medium text-[16px] lg:text-[18px] xl:text-[20px] leading-[2.3rem] mb-[8px]">
                  Height
                </h4>
                {data ? (
                  <p>
                    {(data.pokemon.height / 3.431).toFixed(2).replace(".", "'")}
                    ''
                  </p>
                ) : (
                  <Skeleton />
                )}
              </div>
              <div>
                <h4 className="font-medium text-[16px] lg:text-[18px] xl:text-[20px]  leading-[2.3rem] mb-[8px]">
                  Category
                </h4>
                <p>Seed</p>
              </div>
            </div>
            <div className="flex gap-[70px] mt-[25px]">
              <div>
                <h4 className="font-medium text-[16px] lg:text-[18px] xl:text-[20px] leading-[2.3rem] mb-[8px]">
                  Weight
                </h4>
                {data ? (
                  <p>{(data.pokemon.weight / 4.5394).toFixed(1)}lbs</p>
                ) : (
                  <Skeleton />
                )}
              </div>
              <div>
                <h4 className="font-medium text-[16px] lg:text-[18px] xl:text-[20px] leading-[2.3rem] mb-[8px]">
                  Abilities
                </h4>
                <div>
                  {data ? (
                    <>
                      {data.pokemon.abilities.map((el: any, i: number) => (
                        <p key={i}>{capitalizeString(el.ability.name)} </p>
                      ))}
                    </>
                  ) : (
                    <Skeleton />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
