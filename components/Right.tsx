import { capitalizeString } from "@/Helper/Reuse";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { Types } from "./Card";

const types = [
  "Grass",
  "Fire",
  "Water",
  "Bug",
  "Poison",
  "Flying",
  "Ice",
  "Psychic",
];

const Right: React.FC<any> = ({ data }) => {
  console.log(data);
  return (
    <div className="basis-[18.18%]">
      <div>
        <h4 className="font-medium text-[16px] lg:text-[20px] mb-4">Type</h4>
        <div className="flex gap-6">
          <Types data={data} />
        </div>
      </div>
      <div className="my-12">
        <h4 className="font-medium text-[16px] lg:text-[20px] mb-2">
          Weaknesses
        </h4>
        <div className="flex gap-4 text-[1.6rem]">
          <div
            className="rounded-[4px] px-[2rem] text-white
           bg-[#FC7C23]"
          >
            Fire
          </div>
          <div
            className="rounded-[4px] px-[2rem] text-white
           bg-[#F366B9]"
          >
            Psychic
          </div>
          <div
            className="rounded-[4px] px-[2rem] text-white
           bg-gradient-to-b from-fly to-from-fly"
          >
            Flying
          </div>
          <div
            className="rounded-[4px] px-[2rem] text-white
           bg-[#3DC7EF]"
          >
            Ice
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-medium text-[16px] lg:text-[20px] mb-4">Stats</h4>
        <ul className="flex flex-col gap-10">
          {data &&
            data.pokemon.stats.map((el: any, i: number) => (
              <li className="leading-[1.8rem] flex flex-col gap-3" key={i}>
                <div>{el.stat.name.toUpperCase()}</div>
                <div className="bg-[#D9D9D9] h-2 w-full relative">
                  <div
                    className={`h-full  bg-[#30A7D7] rounded-t rounded-b`}
                    style={{ width: `${el.base_stat}%` }}
                  ></div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Right;
