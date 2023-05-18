import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Hero() {
    const {t} = useTranslation();
  return (
    <div className="justify-center items-center px-0">
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1
              style={{
                background: "linear-gradient(to left, #009FFD, #28EDA5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-3xl font-extrabold sm:text-5xl"
            >
              {t('heroHeader')}
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              {t('heroDesc')}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                style={{
                  background: "linear-gradient(45deg, #28EDA5, #009FFD)",
                }}
                className="block w-full rounded px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                to="/contact"
              >
                {t('heroBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
