import React from "react";
import { useTranslation } from "react-i18next";
import { FaBolt, FaBalanceScale, FaMagic, FaUserFriends } from "react-icons/fa";

const About1 = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const iconSize = 32;

  return (
    <div
      className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-row w-5/6">
          <div className="w-full lg:w-5/6 flex flex-col justify-center">
            <h1
              style={{
                background: "linear-gradient(to left, #009FFD, #28EDA5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4"
            >
              {t("aboutHeader")}
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              {t("aboutDesc")}
            </p>
          </div>
          <div className="w-full lg:w-5/6 flex flex-col justify-center mt-4">
            <h2
              style={{
                background: "linear-gradient(to left, #009FFD, #28EDA5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4"
            >
              {t("vesion")}
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              {t("vesionDesc")}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-8/12 h-full">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 style={{
                background: "linear-gradient(to left, #009FFD, #28EDA5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }} className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            {t("ourMessage")}
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            {t("ourMessageDesc")}
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
        <div className="flex flex-col justify-center">
  <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div className="flex lg:flex-row flex-col justify-between gap-8">
      <div className="w-full  flex flex-col justify-center">
        <h1 style={{
                background: "linear-gradient(to left, #009FFD, #28EDA5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }} className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
          {t("ourValues")}
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
              {i18n.language === "ar"?<FaBolt  style={{
      color: "#009FFD"
    }} className="w-8 h-8" /> :<FaBolt  style={{
        color: "#28EDA5"
      }} className="w-8 h-8" />  }

                <p className="font-normal text-base leading-6 text-gray-600 ">
                  {t('Passion')}
                </p>
              </div>


              <div className="flex gap-4 items-center">
                {i18n.language === "ar"?<FaBalanceScale style={{
      color: "#009FFD",
    }} className="w-8 h-8" /> : <FaBalanceScale style={{
        color: "#28EDA5",
      }} className="w-8 h-8" />}
                <p className="font-normal text-base leading-6 text-gray-600 ">
                  {t('Simplification')}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
              {i18n.language != "ar"?<FaMagic style={{
      color: "#009FFD",
    }} className="w-8 h-8" />:<FaMagic style={{
        color: "#28EDA5 ",
      }} className="w-8 h-8" />}
                <p className="font-normal text-base leading-6 text-gray-600 ">
                  {t('Innovation')}
                </p>
              </div>
              <div className="flex gap-4 items-center">
              {i18n.language != "ar"?<FaUserFriends style={{
      color: "#009FFD",
    }} className="w-8 h-8" />:<FaUserFriends style={{
        color: "#28EDA5 ",
      }} className="w-8 h-8" />}
                <p className="font-normal text-base leading-6 text-gray-600 ">
                  {t('Resourceful')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default About1;
