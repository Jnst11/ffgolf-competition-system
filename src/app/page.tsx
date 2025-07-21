'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/lib/auth'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import LanguageToggle from '@/components/LanguageToggle'
import { useTranslation } from '@/lib/translations'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  
  const { login, isAuthenticated, isLoading, user, loginAsAdmin, loginAsReferee, loginAsCaptain } = useAuth()
  const { t } = useTranslation()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectPath = searchParams.get('redirect') || '/'

  useEffect(() => {
    if (isAuthenticated && user) {
      // Redirect based on user role
      if (user.role === 'admin') {
        router.push('/admin')
      } else if (user.role === 'referee') {
        router.push('/referee')
      } else if (user.role === 'captain') {
        router.push('/captain')
      } else if (user.role === 'player') {
        router.push('/player')
      } else {
        router.push(redirectPath)
      }
    }
  }, [isAuthenticated, user, router, redirectPath])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const result = await login(email, password)
    if (!result.success) {
      setError(result.error || 'Erreur de connexion')
    }
  }

  const handleQuickLogin = async (loginMethod: () => Promise<{ success: boolean; error?: string }>) => {
    setError('')
    const result = await loginMethod()
    if (!result.success) {
      setError(result.error || 'Erreur de connexion')
    }
  }

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ffgolf mx-auto mb-4"></div>
          <p className="text-gray-600">{t('auth.redirecting', 'Redirecting...')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Language Toggle in top right */}
      <div className="absolute top-4 right-4">
        <LanguageToggle />
      </div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Image 
            src="/ffgolf-logo.png" 
            alt="FFGolf Logo" 
            width={180} 
            height={60}
            className="h-16 w-auto"
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          {t('auth.loginToAccount', 'Login to your account')}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {t('competition.teamCompetitionManagement', 'Team competition management system')}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('auth.emailAddress', 'Email Address')}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-ffgolf focus:border-ffgolf sm:text-sm"
                  placeholder={t('auth.emailPlaceholder', 'you@example.com')}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t('auth.password', 'Password')}
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-ffgolf focus:border-ffgolf sm:text-sm"
                  placeholder={t('auth.passwordPlaceholder', '••••••••')}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ffgolf hover:bg-ffgolf-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ffgolf disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t('auth.loggingIn', 'Logging in...')}
                  </div>
                ) : (
                  t('auth.login', 'Login')
                )}
              </button>
            </div>
          </form>

          {/* Demo Login Section */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{t('auth.demoLogin', 'Demo Login')}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => handleQuickLogin(loginAsAdmin)}
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-purple-300 rounded-md shadow-sm text-sm font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
              >
                🔧 {t('auth.adminFFGolf', 'FFGolf Administrator')}
              </button>
              
              <button
                onClick={() => handleQuickLogin(loginAsReferee)}
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-blue-300 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                ⚖️ {t('auth.regionalReferee', 'Regional Referee')}
              </button>
              
              <button
                onClick={() => handleQuickLogin(loginAsCaptain)}
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-green-300 rounded-md shadow-sm text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
              >
                👨‍✈️ {t('auth.teamCaptain', 'Team Captain')}
              </button>
            </div>

            <div className="mt-4 text-xs text-gray-500 text-center">
              <p>{t('auth.demoAccountsNote', 'Demo accounts - No password required')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}