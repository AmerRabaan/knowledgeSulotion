import React from "react";
import { useTranslation } from "react-i18next";

function TeamPage() {
  const { t, i18n } = useTranslation();

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            {t("TeamPageH")}
          </p>
          <h1
            style={{
              background: "linear-gradient(to left, #009FFD, #28EDA5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto"
          >
            {t("TeamPageP")}
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={require("./teamPhotos/yousef.png")}

                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    {t("t3n")}
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    {t("t3p")}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    {t("t3b")}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={require("./teamPhotos/Amer.jpeg")}

                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    {t("t1n")}
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    {t("t1p")}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    {t("t1b")}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
            {/* 
          <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={require("./teamPhotos/Ahmed.jpeg")}

                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    {t("t2n")}
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    {t("t2p")}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    {t("t2b")}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
          
          */}
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={require("./teamPhotos/Naif.jpg")}

                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    {t("t4n")}
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    {t("t4p")}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    {t("t4b")}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={require("./teamPhotos/Khalil.jpg")}

                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    {t("t5n")}
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    {t("t5p")}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    {t("t5b")}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
            {/* 
          
          <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={require("./teamPhotos/Fahd.jpg")}

                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    {t("t6n")}
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    {t("t6p")}
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    {t("t6b")}
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5"></div>
                </div>
              </div>
            </div>
          
          
          */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
