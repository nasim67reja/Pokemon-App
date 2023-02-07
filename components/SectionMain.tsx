import React from "react";
import VerticalSlider from "./Slider";

const SectionMain = () => {
  return (
    <>
      {/* Small Screen */}
      <section className="lg:hidden px-[20px] sm:px-[62px]">
        <h1
          className="text-[4.8rem] text-center font-bold text-[#257BC4] w-[57.6rem] mx-auto leading-[5.5rem] bg-center mt-44 mb-36 bg-contain"
          style={{ backgroundImage: `url(/assets/Brush.png)` }}
        >
          Ash & Pikachu Arrive in Pokémon Universe
        </h1>

        <p className="text-[16px] leading-[18px] text-justify">
          Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
          ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi
          tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque.
          Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta
          amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit
          pretium lorem elementum. Iaculis sit maecenas sodales mi convallis
          justo aliquam. Tincidunt semper ut ornare vivamus lectus.
        </p>
        <div className="flex justify-center items-center my-[20px]">
          <div className="relative w-[350px] sm:w-[370px] md:w-[390px] h-[290px] sm:h-[308px] md:h-[326px]">
            <img
              className="absolute w-[106.94px] sm:w-[111.94px] md:w-[117.94px] h-[108.33px] sm:h-[114.33px] md:h-[120.33px] top-0 left-[34%]"
              src="/assets/Image03.png"
              alt="pikachu&ash"
            />
            <img
              className="absolute w-[106.94px] sm:w-[111.94px] md:w-[117.94px] h-[108.33px] sm:h-[114.33px] md:h-[120.33px] top-[20%]"
              src="/assets/Image04.png"
              alt="pikachu&ash"
            />
            <img
              className="absolute w-[106.94px] sm:w-[111.94px] md:w-[117.94px] h-[108.33px] sm:h-[114.33px] md:h-[120.33px] top-[42%] left-[34%]"
              src="/assets/Image05.png"
              alt="pikachu&ash"
            />
            <img
              className="absolute w-[106.94px] sm:w-[111.94px] md:w-[117.94px] h-[108.33px] sm:h-[114.33px] md:h-[120.33px] right-0 top-[20%]"
              src="/assets/Image02.png"
              alt="pikachu&ash"
            />
            <img
              className="absolute w-[106.94px] sm:w-[111.94px] md:w-[117.94px] h-[108.33px] sm:h-[114.33px] md:h-[120.33px] right-0 bottom-0"
              src="/assets/Image01.png"
              alt="pikachu&ash"
            />
          </div>
        </div>
        <p className="text-[16px] leading-[18px] text-justify">
          Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum
          ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi
          tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque.
          Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta
          amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra sit
          pretium lorem elementum. Iaculis sit maecenas sodales mi convallis
          justo aliquam. Tincidunt semper ut ornare vivamus lectus.
        </p>
      </section>

      {/* Large Screen */}
      <section className=" hidden lg:flex ">
        <div className="basis-[7.26%] hidden xl:block">
          <VerticalSlider />
        </div>
        <div className="basis-[85.26%] flex-grow px-16 ">
          <h1
            className="text-[4.8rem] text-center font-bold text-[#257BC4] w-[57.6rem] mx-auto leading-[5.5rem] bg-center mt-44 mb-36 bg-contain"
            style={{ backgroundImage: `url(/assets/Brush.png)` }}
          >
            Ash & Pikachu Arrive in Pokémon Universe
          </h1>
          <div className="flex gap-12 pb-32">
            <div className="basis-[55%]">
              <div className="flex gap-6">
                <div className="basis-[74%]  flex flex-col gap-6">
                  <div className="leading-[1.8rem] text-justify">
                    Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                    elementum ornare a aliquet ac. Feugiat scelerisque ultrices
                    tempor facilisi tempus risus nunc. Proin quis morbi posuere
                    nisl etiam scelerisque. Proin pretium gravida semper ut erat
                    nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames
                    felis leo. Vitae pulvinar sed viverra sit pretium lorem
                    elementum. Iaculis sit maecenas sodales mi convallis justo
                    aliquam. Tincidunt semper ut ornare vivamus lectus.
                  </div>
                  <div className="flex gap-6">
                    <div className="leading-[1.8rem] text-justify">
                      Lorem ipsum dolor sit amet consectetur. Turpis integer
                      massa consectetur sed enim quis viverra. Vestibulum eu
                      nibh dolor semper. Nisl feugiat quis nec odio pulvinar
                      feugiat velit. Nulla massa sit morbi morbi. Tortor viverra
                      eget lacus feugiat. Tempus vitae vitae orci at ultrices
                      nisi diam faucibus. Ultricies in cursus volutpat aliquam
                      turpis urna in sed. Hendrerit arcu sit lectus adipiscing
                      egestas semper nunc. Ante consectetur id congue pulvinar
                      libero tristique et orci. Platea convallis dictum dui
                      augue. Tincidunt mattis urna sit semper sed duis feugiat
                      mi.
                    </div>
                    <img
                      className="translate-y-[-8px] [16rem] md:h-[20rem] "
                      src="/assets/Image04.png"
                      alt="pikachu&ash"
                    />
                  </div>
                  <div className="leading-[1.8rem] text-justify">
                    Lorem ipsum dolor sit amet consectetur. Tincidunt at cras
                    tortor non volutpat quisque facilisis. Ultricies consequat
                    sed vitae ac. Nisl eu nam id lectus tellus sit egestas. Orci
                    iaculis et vehicula nisi facilisi neque lorem. In vulputate
                    feugiat lobortis eros viverra. Turpis viverra vel fames enim
                    tortor. Scelerisque dictumst aliquam gravida eget ut
                    accumsan. A est dis platea vitae blandit quis. Ultricies ac
                    at urna vel morbi diam. Donec ut sit sit et. Etiam cum
                    faucibus eu elementum ut fermentum in cursus.
                  </div>
                </div>
                <div className="flex-grow   flex flex-col gap-6 justify-around items-center">
                  <img
                    className="translate-y-[-8px] h-[16rem] md:h-[20rem]  "
                    src="/assets/Image03.png"
                    alt="Pikachu&Ash"
                  />
                  <img
                    src="/assets/Image02.png"
                    className="h-[16rem] md:h-[20rem] "
                    alt="Pikachu&Ash"
                  />
                </div>
              </div>
              <div className="leading-[1.8rem] text-justify mt-4">
                At a enim parturient id. Suspendisse ullamcorper fermentum
                accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
                etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
                Vulputate sit phasellus proin eget arcu. Enim nec ante velit
                erat nibh nunc amet. Tellus at sit imperdiet non. Cras dictum
                curabitur urna mauris in.
                <br />
                Ut dui odio sagittis ut imperdiet ultricies mauris ac. A sit id
                etiam vitae non posuere tristique. Morbi sit mi sed nam amet
                tristique tellus. Sed quam aliquam pharetra nunc ipsum mattis.
                Volutpat pellentesque cras euismod habitant sit nibh. Dictum
                odio at aliquam sed. Orci odio lacinia id sem sed suspendisse mi
                fringilla purus. Quis sed ultricies ac nullam odio. Gravida
                sollicitudin viverra ornare pretium etiam tortor imperdiet
                tellus. Id purus etiam nunc hendrerit quam in. Dui netus lectus
                nulla cursus ultrices nulla. Morbi sit in gravida fermentum. Non
                sed lobortis amet eget sed donec.At a enim parturient id.
                Suspendisse ullamcorper fermentum accumsan diam tellus. Nibh
                pretium ultrices scelerisque dolor at etiam lectus gravida sed.
                Sit in turpis suspendisse et aliquam. Vulputate sit phasellus
                proin eget arcu. Enim nec ante velit erat nibh nunc amet. Tellus
                at sit imperdiet non. Cras dictum curabitur urna mauris in.
                <br />
                Ut dui odio sagittis ut imperdiet ultricies mauris ac. A sit id
                etiam vitae non posuere tristique. Morbi sit mi sed nam amet
                tristique tellus. Sed quam aliquam pharetra nunc ipsum mattis.
                Volutpat pellentesque cras euismod habitant sit nibh. Dictum
                odio at aliquam sed. Orci odio lacinia id sem.
              </div>
            </div>
            <div className="basis-[43%] flex flex-col gap-8 ">
              <div className="text-justify leading-[1.8rem]">
                Lorem ipsum dolor sit amet consectetur. Risus cursus nibh
                elementum ornare a aliquet ac. Feugiat scelerisque ultrices
                tempor facilisi tempus risus nunc. Proin quis morbi posuere nisl
                etiam scelerisque. Proin pretium gravida semper ut erat nisi.
                Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo.
                Vitae pulvinar sed viverra .
              </div>

              <div className="flex gap-8 ">
                <img
                  src="/assets/Image05.png"
                  alt="pikachu&ash"
                  className="h-[16rem] md:h-[20rem] "
                />

                <div className="text-justify leading-[1.8rem] ">
                  Lorem ipsum dolor sit amet consectetur. Turpis integer massa
                  consectetur sed enim quis viverra. Vestibulum eu nibh dolor
                  semper. Nisl feugiat quis nec odio pulvinar feugiat velit.
                  Nulla massa sit morbi morbi. Tortor viverra eget lacus
                  feugiat. Tempus vitae vitae orci at ultrices nisi diam
                  faucibus. Ultricies in cursus volutpat aliquam turpis urna in
                  sed. Hendrerit arcu sit lectus adipiscing egestas semper nunc.
                  Ante consectetur id congue pulvinar libero tristique et orci.
                  Platea convallis dictum dui augue. Tincidunt mattis urna sit
                  semper sed duis feugiat mi.Ante consectetur id congue
                </div>
              </div>
              <div className="flex gap-8">
                <img
                  src="/assets/Image01.png"
                  alt="pikachu"
                  className="h-[16rem] md:h-[20rem] "
                />
                <div className="text-justify leading-[1.8rem]">
                  Lorem ipsum dolor sit amet consectetur. Tincidunt at cras
                  tortor non volutpat quisque facilisis. Ultricies consequat sed
                  vitae ac. Nisl eu nam id lectus tellus sit egestas. Orci
                  iaculis et vehicula nisi facilisi neque lorem. In vulputate
                  feugiat lobortis eros viverra. Turpis viverra vel fames enim
                  tortor. Scelerisque dictumst aliquam gravida eget ut accumsan.
                  A est dis platea vitae blandit quis. Ultricies ac at urna vel
                  morbi diam. <br />
                  Donec ut sit sit et. Etiam cum faucibus eu elementum ut
                  fermentum in cursus. Ante consectetur id congue Ante
                  consectetur id congue
                </div>
              </div>

              <div className="text-justify leading-[1.8rem]">
                At a enim parturient id. Suspendisse ullamcorper fermentum
                accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
                etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
                <br />
                At a enim parturient id. Suspendisse ullamcorper fermentum
                accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
                etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
                Vulputate sit phasellus proin eget arcu. Enim nec ante velit
                erat nibh nunc amet. Tellus at sit imperdiet non. Cras dictum
                curabitur urna mauris in.
                <br />
                Ut dui odio sagittis ut imperdiet ultricies mauris ac. A sit id
                etiam vitae non posuere tristique. Morbi sit mi sed nam amet
                tristique tellus. Sed quam aliquam pharetra.
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[7.26%] hidden xl:block">
          <VerticalSlider />
        </div>
      </section>
    </>
  );
};

export default SectionMain;
