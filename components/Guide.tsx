import Image from "next/image";
import React, { FC } from "react";

const Guide: FC = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container pb-24 w-full">
        <Image src="/camp.svg" alt="camp" height={50} width={50} />
        <p className="uppercase -mt-1 regular-18 text-green-50 ">
          We are here for you
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 ">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You To Easy Path
          </h2>
          <p className="regular-16  text-gray-30 xl:max-w-[520px]">
            Only with the traVelo application you will no longer get lost and
            get lost again, because we already support offline maps when there
            is no internet connection in the field. Invite your friends,
            relatives and friends to have fun in the wilderness through the
            valley and reach the top of the mountain
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border  shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter "
            width={16}
            height={158}
            className="h-full w-auto"
          />

          <div className="flexBetween flex-col">
            <div className="w-full flex flex-col">
              <div className="flexBetween w-full gap-2">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Annapurna Base Camp</p>
            </div>
            <div className="w-full flex flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 whitespace-nowrap"></h4>
              <p className="bold-20 mt-2">Fewa lake</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
