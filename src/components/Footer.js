import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Footer() {
    const {t, i18n} = useTranslation()
  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      
<footer className="bg-white rounded-lg shadow m-4 ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center  ">© 2023 <Link to='/' className="hover:underline">{t('title')}</Link>. {t('Rights')}
    </span>
    <ul  className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500   sm:mt-0">
        <li>
            <Link to='/book' className="mr-4 hover:underline md:mr-6 ">{t('book')}</Link>
        </li>
        <li>
            <Link to='/privacy-policy' className="mr-4 hover:underline md:mr-6">{t('Privacy')}</Link>
        </li>
        <li  className='px-2'>
            <Link to='/contact' className="hover:underline">{t('contact')}</Link>
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer
