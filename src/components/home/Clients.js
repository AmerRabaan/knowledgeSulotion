import React from 'react';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Client 1",
    logo: require('../../assets/images/frimex.png'),
  },
  {
    name: "Client 2",
    logo: require('../../assets/images/inzagr.png'),
    website: "https://www.binzagr.com.sa/ar.html"
  },
  {
    name: "الحناكي للتجارة",
    logo: require('../../assets/images/hanaky.png'),
    title: "الحناكي للأغذية والاعلاف"
  },
  {
    name: "المطوع للنقليات",
    logo: require('../../assets/images/m.png'),
  },
  {
    name: "الشركة الوطنية لصناعة البسكويت والحلويات",
    logo: require('../../assets/images/nbcc.png'),
    title: "الشركة الوطنية لصناعة البسكويت والحلويات",
  }
];

const logoVariants = {
  hidden: { opacity: 1, scale: 1, rotate: 0 },
  visible: { opacity: 1, scale: 1, rotate: 0 }
};

function Clients() {
  const { t, i18n } = useTranslation();

  return (
    <div  className="text-center mb-8 mt-10">
      <h2 style={{
        background: "linear-gradient(to left, #009FFD, #28EDA5)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }} className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t('clients')}</h2>
      <div style={{alignItems:'center'}} className="flex flex-wrap justify-center">
        {clients.map((client, index) => (
          <motion.a
            key={index}
            href={client.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block m-4"
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.3, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
          >
            <img src={client.logo} alt={client.name} className="w-80 md:w-60 sm:w-48 h-auto" />
            {client.title && <p className='font-bold'>{client.title}</p>}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Clients;
