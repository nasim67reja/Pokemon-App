import { GET_POKEMONS } from "@/queries/pokemonQueries";
import { useQuery } from "@apollo/client";
import { Fragment, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// components
import Card from "./Card";

const Hero = () => {
  const [transform, setTransform] = useState(0);

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: 10, offset: 0 },
  });

  const transformHandler = () => {
    console.log(transform);
    if (transform !== -950) setTransform((prevSt) => prevSt - 50);
  };
  const transformLeftHandler = () => {
    if (transform !== 0) setTransform((prevSt) => prevSt + 50);
  };

  return (
    <div>
      <div
        className="min-h-screen  bg-cover bg-top"
        style={{ backgroundImage: `url(/assets/Background.png)` }}
      >
        <div
          className="min-h-screen w-full bg-cover bg-top"
          style={{ backgroundImage: `url(/assets/Texture.png)` }}
        >
          <div className=" flex flex-col gap-40 pr-0 pl-[4rem] lg:pr-[4rem] max-w-[1623px] mx-auto">
            <div
              className="flex justify-center mt-20
          "
            >
              <img src="/assets/logo.png" alt="pokemon-logo" />
            </div>

            {/* Mobile */}
            <div className="relative  lg:hidden">
              <div
                className="absolute z-30 p-4 bg-blue-600 rounded-[50%] right-10 top-[50%]  cursor-pointer"
                onClick={transformHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  style={{ width: "16px", height: "16px" }}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>

              <div
                className="absolute z-30 p-4 bg-blue-600 rounded-[50%] left-2 top-[50%]  cursor-pointer"
                onClick={transformLeftHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                  style={{ width: "16px", height: "16px" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>

              <div
                className="sec relative w-[full] h-[307px] overflow-scroll scroll-smooth"
                style={{ scrollbarWidth: "none" }}
              >
                {loading &&
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => (
                    <div
                      className="absolute top-0 left-0 z-20 mr-[5px] transition-all duration-300"
                      key={i}
                      style={{
                        transform: `translateX(${
                          i * 100 + i * 5 + transform
                        }%)`,
                      }}
                    >
                      <Skeleton height={220} width={180} />
                      <Skeleton height={10} width={35} className="my-[10px]" />
                      <Skeleton height={10} width={100} />
                    </div>
                  ))}

                {error && <div>Something went wrong</div>}

                {!loading &&
                  !error &&
                  data.pokemons.results.map((el: any, i: any) => (
                    <div
                      className="absolute top-0 left-0 z-20 mr-[5px] transition-all duration-300"
                      key={i}
                      style={{
                        transform: `translateX(${
                          i * 100 + i * 5 + transform
                        }%)`,
                      }}
                    >
                      <Card pokemon={el} />
                    </div>
                  ))}
              </div>
            </div>

            {/* Large screen */}
            <div className="hidden lg:grid grid-cols-5 gap-x-16 2xl:gap-x-36 gap-y-16  ">
              {loading &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => (
                  <div key={i}>
                    <Skeleton height={220} width={180} />
                    <Skeleton height={10} width={35} className="my-[10px]" />
                    <Skeleton height={10} width={100} />
                  </div>
                ))}
              {error && <div>Something went wrong</div>}

              {!loading &&
                !error &&
                data.pokemons.results.map((el: any, i: any) => (
                  <Card key={i} pokemon={el} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
