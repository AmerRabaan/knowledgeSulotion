import React from "react";
import { useTranslation } from "react-i18next";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";

function Career() {
  const { t, i18n } = useTranslation();
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  {t("careerH")}
                </span>
                <h2
                  style={{
                    background: "linear-gradient(to left, #009FFD, #28EDA5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                >
                  {t("careerDesc")}
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
                  {t("cashVan")}
                </h4>
                <p className="text-body-color">{t("cashVanDesc")}</p>
                <div>
                  <a
                    style={{
                      background: "linear-gradient(to left, #009FFD, #28EDA5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    target="_blank"
                    className="font-bold"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc6rkC8Gkk1DvN9akCkecfaa_SsGwBfHwiF590MPak84XBVzA/viewform"
                  >
                    {t("apply")}
                  </a>
                </div>
              </div>
            </div>
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
export default Career;
