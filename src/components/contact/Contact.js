import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import * as Icons from 'react-icons/fa'
function ContactForm() {
  const [state, handleSubmit] = useForm("xvonylwv");
  const {t, i18n} = useTranslation()

  if (state.succeeded) {
    return <h2 style={{
        background: "linear-gradient(to left, #009FFD, #28EDA5)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }} className="text-3xl font-bold mb-12 px-6">{t('contactSucceeded')}</h2>;
  }

  

  return (
    <div dir={i18n.language === 'ar'? 'rtl' : 'ltr'}>
      <div className="container my-24 px-6 mx-auto">
<section className="mb-32 text-gray-800">
  <div className="flex justify-center">
    <div className="text-center lg:max-w-3xl md:max-w-xl">
      <h2 style={{
                background: "linear-gradient(to left, #009FFD, #28EDA5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }} className="text-3xl font-bold mb-2 px-6">{t('contactH')}</h2>

              <p className='mb-12 text-xl'>{t('contactP')}</p>
    </div>
  </div>
  <div className="flex flex-wrap">
    <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-6">
          <input type="text" className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-cyan-300 focus:outline-none" id="exampleInput7"
            placeholder={t('contactName')} />
        </div>
        <div className="form-group mb-6">
          <input  type="email" name="email" className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-cyan-300 focus:outline-none" id="exampleInput8"
            placeholder={t('contactEmail')} />
            <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
      className="text-red-500 text-sm"
    />
        </div>
        <div className="form-group mb-6">
          <textarea 
      name="message" className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-cyan-300 focus:outline-none
        " id="exampleFormControlTextarea13" rows="3" placeholder={t('contactMessage')}></textarea>
        <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
      className="text-red-500 text-sm"
    />
        </div>

        <button type="submit"
        style={{background:'linear-gradient(to left, #009FFD, #28EDA5)'}}
    disabled={state.submitting} className="
        w-full
        px-6
        py-2.5
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">{t('contactBtn')}</button>
      </form>
    </div>
    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
      <div className="flex flex-wrap">
        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
          <div className="flex items-start">
            <div className="shrink-0 px-2">
              <div style={{background:'linear-gradient(to left, #009FFD, #28EDA5)'}} className="p-4  rounded-md shadow-md w-14 h-14 flex items-center justify-center">
              <Icons.FaMailBulk size={30} color='white' />
              </div>
            </div>
            <div className="grow ml-6">
              <p className="font-bold mb-1">{t('contactVemail')}</p>
              <a href="mailto:support@example.com" >support@example.com</a>
            </div>
          </div>
        </div>
        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
          <div className="flex items-start">
            <div className="shrink-0 px-2">
              <div style={{background:'linear-gradient(to left, #009FFD, #28EDA5)'}} className="p-4  rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                <Icons.FaMobileAlt size={30} color='white' />
                
              </div>
            </div>
            <div className="grow ml-6">
              <p className="font-bold mb-1">{t('contactVmobile')}</p>
              <a href="tel:+966123456123" >+966 123 456 123</a>
            </div>
          </div>
        </div>
        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
          <div className="flex align-start ">
            <div className="shrink-0 px-2">
              <div style={{background:'linear-gradient(to left, #009FFD, #28EDA5)'}} className="p-4  rounded-md shadow-md w-14 h-14 flex items-center justify-center">
              <Icons.FaMapMarkerAlt size={30} color='white' />
              </div>
            </div>
            <div className="grow ml-6">
              <p className="font-bold mb-1">{t('contactVlocation')}</p>
              <p className="text-gray-500">{t('contactVlocationExact')}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</div>
    </div>


  );
}

export default ContactForm;
