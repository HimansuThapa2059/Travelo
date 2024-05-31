import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface CampSiteProps {
  bgImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite: FC<CampSiteProps> = ({
  bgImage,
  title,
  subtitle,
  peopleJoined,
}) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${bgImage} bg-cover bg-center bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className=" h-full flex flex-col  items-start justify-between p-6 lg:px-20 lg:py-10  ">
        <div className="flexCenter gap-4">
          <div className="rounded-full  bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" height={28} width={28} />
          </div>
          <div className="flex flex-col  gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6 ">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt="person"
                height={52}
                width={52}
                className="inline-block w-10 h-10 rounded-full "
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp: FC = () => {
  return (
    <section className=" 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex items-start justify-start gap-8 h-[340px] w-full overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          bgImage="bg-bg-img-1"
          title="Annapurna Base Camp"
          subtitle="Pokhara, Nepal"
          peopleJoined="80+ Joined"
        />
        <CampSite
          bgImage="bg-bg-img-2"
          title="Sarangkot"
          subtitle="Gandaki, Nepal"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:mr-6 lg:-mt-60">
        <div className="p-8 bg-green-50 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className=" regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost </strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xg:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={216}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
