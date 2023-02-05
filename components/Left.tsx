import { capitalizeString, padWithZeros } from "@/Helper/Reuse";
import Skeleton from "react-loading-skeleton";

const Left: React.FC<any> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h3 className="leading-[5.5rem] text-[#257BC4] text-[4.8rem] flex gap-4 font-medium">
        {data ? (
          <>
            <span>{capitalizeString(data.pokemon.name)}</span>
            <span>#{padWithZeros(data.pokemon.id)}</span>
          </>
        ) : (
          <Skeleton />
        )}
      </h3>

      <div className="leading-[1.8rem] my-16">
        There is a plant seed on its back right from the day this Pokémon is
        born. The seed slowly grows larger.
      </div>

      <div className=" custom-clip-path relative p-[3.5px]  bg-gradient-to-r from-[#F366B9] to-[#FC7C23]">
        <div className="custom-clip-path bg-white p-16 ">
          <div className="flex justify-between">
            <div>
              <h4 className="font-medium text-[2rem] leading-[2.3rem] mb-2">
                Height
              </h4>
              {data ? (
                <p>
                  {(data.pokemon.height / 3.431).toFixed(2).replace(".", "'")}''
                </p>
              ) : (
                <Skeleton />
              )}
            </div>
            <div>
              <h4 className="font-medium text-[2rem] leading-[2.3rem] mb-2">
                Category
              </h4>
              <p>Seed</p>
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <div>
              <h4 className="font-medium text-[2rem] leading-[2.3rem] mb-2">
                Weight
              </h4>
              {data ? (
                <p>{(data.pokemon.weight / 4.5394).toFixed(1)}lbs</p>
              ) : (
                <Skeleton />
              )}
            </div>
            <div>
              <h4 className="font-medium text-[2rem] leading-[2.3rem] mb-2">
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
  );
};

export default Left;
