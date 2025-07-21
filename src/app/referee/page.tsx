'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  EyeIcon, 
  CogIcon, 
  TrophyIcon,
  ClockIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import LanguageToggle from '@/components/LanguageToggle'
import { useTranslation } from '@/lib/translations'
import { useAuth } from '@/lib/auth'

export default function RefereeDashboard() {
  const { t } = useTranslation()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/ffgolf-logo.png" 
                  alt="FFGolf Logo" 
                  width={150} 
                  height={48}
                  className="h-10 w-auto"
                />
              </Link>
              <span className="ml-4 px-3 py-1 text-xs font-medium bg-ffgolf-50 text-ffgolf-800 rounded">
                {t('user.referee', 'Arbitre')}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <button className="text-gray-600 hover:text-gray-900">
                <CogIcon className="h-6 w-6" />
              </button>
              <button 
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                title={t('auth.logout', 'Logout')}
              >
                <ArrowRightOnRectangleIcon className="h-4 w-4 mr-1" />
                {t('auth.logout', 'Logout')}
              </button>
              <div className="h-8 w-8 bg-ffgolf rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('competition.myCompetitions', 'Mes Compétitions')}</h1>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/referee/competitions"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ffgolf hover:bg-ffgolf-700"
            >
              <EyeIcon className="h-4 w-4 mr-2" />
              {t('competition.viewAllCompetitions', 'Voir Toutes les Compétitions')}
            </Link>
            <Link 
              href="/referee/active"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <ClockIcon className="h-4 w-4 mr-2" />
              {t('competition.activeCompetitions', 'Compétitions Actives')}
            </Link>
          </div>
        </div>


        {/* Events Section */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              {t('competition.events', 'Events')}
            </h3>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('competition.name', 'Nom de la Compétition')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('common.status', 'Statut')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('competition.participants', 'Participants')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('common.nextAction', 'Prochaine Action')}
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">{t('common.actions', 'Actions')}</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Open de France Amateur 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {t('status.inProgress', 'En cours')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('competition.participantsCount', '156 joueurs')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('competition.validateRound1', 'Valider résultats Round 1')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href="/referee/events/1" className="text-amber-600 hover:text-amber-800">
                        {t('common.manage', 'Gérer')}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Interclubs Jeunes U18
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        {t('status.completed', 'Terminée')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('competition.participantsCount72', '72 joueurs')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('competition.finalReportSent', 'Rapport final envoyé')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href="/referee/events/2" className="text-amber-600 hover:text-amber-800">
                        {t('common.archives', 'Archives')}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Team Matches Section */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              {t('competition.teamMatches', 'Team Matches')}
            </h3>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('competition.name', 'Nom de la Compétition')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('common.status', 'Statut')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('team.teams', 'Équipes')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('common.nextAction', 'Prochaine Action')}
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">{t('common.actions', 'Actions')}</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Championnat de France Interclubs 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {t('status.inProgress', 'En cours')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('team.teamsCount', '16 équipes')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('competition.validateRound2', 'Valider résultats Round 2')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href="/referee/competitions/1" className="text-ffgolf hover:text-ffgolf-800">
                        {t('common.manage', 'Gérer')}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Division 1 Messieurs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {t('status.scheduled', 'Planifiée')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('team.teamsCount12', '12 équipes')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('competition.startDate', 'Début: 1er juin 2024')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href="/referee/competitions/2" className="text-ffgolf hover:text-ffgolf-800">
                        {t('common.view', 'Consulter')}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Division 2 Dames
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {t('status.preparation', 'Préparation')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('team.teamsCount8', '8 équipes')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('competition.teamReview', 'Révision des équipes')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href="/referee/competitions/3" className="text-ffgolf hover:text-ffgolf-800">
                        {t('common.review', 'Réviser')}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Division 2 Relegation Bracket
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {t('status.scheduled', 'Planifiée')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('team.teamsCount8', '8 équipes')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {t('bracket.linkedEvent', 'Lié à')}: Open de France Amateur 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href="/referee/competitions/relegation/1" className="text-orange-600 hover:text-orange-800">
                        {t('common.manage', 'Gérer')}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}