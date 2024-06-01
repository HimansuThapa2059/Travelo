import { FC } from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp: FC = () => {
  return (
    <section className="w-full flexCenter flex-col  pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex flex-col flex-1 items-start justify-center gap-12 w-full">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get For Free Now
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android, download now
          </p>
          <div className="w-full flex flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flexEnd flex-1">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
