'use client'

import { useTranslation } from '@/lib/translations'

export default function LanguageToggle() {
  const { locale, setLocale } = useTranslation()

  const toggleLanguage = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr'
    setLocale(newLocale)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-50 transition-colors"
      title={locale === 'fr' ? 'Switch to English' : 'Basculer vers le français'}
    >
      {locale === 'fr' ? (
        // French Flag
        <div className="flex items-center space-x-1">
          <div className="w-6 h-4 rounded-sm overflow-hidden border border-gray-300 flex">
            <div className="w-1/3 h-full bg-blue-600"></div>
            <div className="w-1/3 h-full bg-white"></div>
            <div className="w-1/3 h-full bg-red-600"></div>
          </div>
          <span className="text-xs font-medium text-gray-700">FR</span>
        </div>
      ) : (
        // American Flag 
        <div className="flex items-center space-x-1">
          <div className="w-6 h-4 rounded-sm overflow-hidden border border-gray-300 relative bg-white">
            {/* Red and white stripes */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col">
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-red-600"></div>
            </div>
            {/* Blue canton with stars pattern */}
            <div className="absolute top-0 left-0 w-2/5 h-3/5 bg-blue-800 overflow-hidden">
              <div className="w-full h-full flex flex-col justify-evenly text-white text-[2px] leading-none">
                <div className="flex justify-evenly">★★★★★★</div>
                <div className="flex justify-evenly">★★★★★</div>
                <div className="flex justify-evenly">★★★★★★</div>
                <div className="flex justify-evenly">★★★★★</div>
                <div className="flex justify-evenly">★★★★★★</div>
              </div>
            </div>
          </div>
          <span className="text-xs font-medium text-gray-700">EN</span>
        </div>
      )}
    </button>
  )
}