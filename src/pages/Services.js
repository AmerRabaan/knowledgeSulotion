import React from "react";
import { useTranslation } from "react-i18next";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";

function Services() {
  const { t, i18n } = useTranslation();
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  {t("sHeadLine")}
                </span>
                <h2
                  style={{
                    background: "linear-gradient(to left, #009FFD, #28EDA5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                >
                  {t("sHeadLineBig")}
                </h2>
                {/* <p  className="text-body-color text-base">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p> */}
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div
                  style={styles.icon}
                  className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full"
                >
                  <Icons.FaBusinessTime style={styles.inIcon} size={50} />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  {t("s1")}
                </h4>
                <p className="text-body-color">{t("s1p")}</p>
                <div>
                  <ul>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s1l1")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s1l2")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s1l3")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s1l4")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s1l5")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s1l6")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s1l7")}
                    </li>
                  </ul>
                  <Link
                    style={{
                      background: "linear-gradient(to left, #009FFD, #28EDA5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="font-bold"
                    to="/contact"
                  >
                    {t("ContactNow")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div
                  style={styles.icon}
                  className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full"
                >
                  <Icons.FaSchool style={styles.inIcon} size={50} />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  {t("s2")}
                </h4>
                <p className="text-body-color">{t("s2p")}</p>
                <div>
                  <ul>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s2l1")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s2l2")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s2l3")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s2l4")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s2l5")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s2l6")}
                    </li>
                  </ul>
                  <Link
                    style={{
                      background: "linear-gradient(to left, #009FFD, #28EDA5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="font-bold"
                    to="/contact"
                  >
                    {t("ContactNow")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div
                  style={styles.icon}
                  className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full"
                >
                  <Icons.FaUserTie style={styles.inIcon} size={50} />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  {t("s3")}
                </h4>
                <p className="text-body-color">{t("s3p")}</p>
                <div>
                  <ul>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s3l1")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s3l2")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s3l3")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s3l4")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s3l5")}
                    </li>
                  </ul>
                  <Link
                    style={{
                      background: "linear-gradient(to left, #009FFD, #28EDA5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="font-bold"
                    to="/contact"
                  >
                    {t("ContactNow")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div
                  style={styles.icon}
                  className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full"
                >
                  <Icons.FaBusinessTime style={styles.inIcon} size={50} />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  {t("s4")}
                </h4>
                <p className="text-body-color">{t("s4p")}</p>
                <div>
                  <ul>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s4l1")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s4l2")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s4l3")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s4l4")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s4l5")}
                    </li>
                  </ul>
                  <Link
                    style={{
                      background: "linear-gradient(to left, #009FFD, #28EDA5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="font-bold"
                    to="/contact"
                  >
                    {t("ContactNow")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div
                  style={styles.icon}
                  className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full"
                >
                  <Icons.FaBuilding style={styles.inIcon} size={50} />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  {t("s5")}
                </h4>
                <p className="text-body-color">{t("s5p")}</p>
                <div>
                  <ul>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s5l1")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s5l2")}
                    </li>
                  </ul>
                  <Link
                    style={{
                      background: "linear-gradient(to left, #009FFD, #28EDA5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="font-bold"
                    to="/contact"
                  >
                    {t("ContactNow")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div
                  style={styles.icon}
                  className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full"
                >
                  <Icons.FaIndustry style={styles.inIcon} size={50} />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  {t("s6")}
                </h4>
                <p className="text-body-color">{t("s6p")}</p>
                <div>
                  <ul>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s6l1")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s6l2")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s6l3")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s6l4")}
                    </li>
                  </ul>
                  <Link
                    style={{
                      background: "linear-gradient(to left, #009FFD, #28EDA5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="font-bold"
                    to="/contact"
                  >
                    {t("ContactNow")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div
                  style={styles.icon}
                  className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full"
                >
                  <Icons.FaHandHoldingHeart style={styles.inIcon} size={50} />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  {t("s7")}
                </h4>
                <p className="text-body-color">{t("s7p")}</p>
                <div>
                  <ul>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s7l1")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s7l2")}
                    </li>
                    <li className="text-body-color text-sm py-4 px-4 text-gray-600">
                      {t("s7l3")}
                    </li>
                  </ul>
                  <Link
                    style={{
                      background: "linear-gradient(to left, #009FFD, #28EDA5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="font-bold"
                    to="/contact"
                  >
                    {t("ContactNow")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div
                  style={styles.icon}
                  className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full"
                >
                  <Icons.FaMagic style={styles.inIcon} size={50} />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  {t("s8")}
                </h4>
                <p className="text-body-color">{t("s8p")}</p>
                <div>
                  <Link
                    style={{
                      background: "linear-gradient(to left, #009FFD, #28EDA5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="font-bold"
                    to="/contact"
                  >
                    {t("ContactNow")}
                  </Link>
                </div>
              </div>
            </div>
            {/* bortoqala */}

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div
                  style={styles.icon}
                  className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full"
                >
                  <Icons.FaDesktop style={styles.inIcon} size={50} />
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  {t("s9")}
                </h4>
                <p className="text-body-color text-[#6B7280] ">{t("s9p")}</p>
                <div>
                  <Link
                    style={{
                      background: "linear-gradient(to left, #009FFD, #28EDA5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="font-bold"
                    to="/contact"
                  >
                    {t("ContactNow")}
                  </Link>
                </div>
              </div>
            </div>

            {/* bortoqala */}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  icon: {
    color: "#28EDA5",
    backgroundColor: "#009FFD",
    padding: 5,
  },
  inIcon: {
    color: "#28EDA5",
    size: 60,
  },
};
export default Services;
