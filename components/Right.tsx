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
    <div>
      <div>
        <h4 className="font-medium text-[1.8rem] mb-2">Type</h4>
        <div className="flex gap-6">
          <Types data={data} />
        </div>
      </div>
      <div>
        <h4 className="font-medium text-[1.8rem] mb-2">Weaknesses</h4>
        <div className="flex gap-3 text-[1.4rem]">
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
        <h4 className="font-medium text-[1.8rem] mb-[2rem]">Stats</h4>
        <ul>
          {data.pokemon.stats.map((el: any, i: number) => (
            <li key={i}>{el.stat.name.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Right;
