import React from 'react'
import PrivacyPolicy from '../components/privacy/EnglishPrivacy'
import Disclaimer from '../components/privacy/ArabicPrivacy'
import { useTranslation } from 'react-i18next'

function PrivacyPage() {
    const {t,i18n} = useTranslation()
  return (
    <div>
        {i18n.language === 'ar'? <Disclaimer /> : <PrivacyPolicy />}
        
      
    </div>
  )
}

export default PrivacyPage
