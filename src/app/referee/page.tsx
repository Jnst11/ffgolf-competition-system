'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
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

// Mock events data with proper dates
const eventsData = [
  {
    id: 1,
    name: 'Open de France Amateur 2024',
    status: 'in_progress',
    participants: '156 joueurs',
    nextAction: 'Valider résultats Round 1',
    startDate: '2024-05-15',
    endDate: '2024-05-16'
  },
  {
    id: 2,
    name: 'Interclubs Jeunes U18',
    status: 'completed',
    participants: '72 joueurs',
    nextAction: 'Rapport final envoyé',
    startDate: '2024-04-10',
    endDate: '2024-04-12'
  },
  {
    id: 3,
    name: 'Championnat Régional Seniors',
    status: 'scheduled',
    participants: '84 joueurs',
    nextAction: 'Début: 25 mai 2024',
    startDate: '2024-05-25',
    endDate: '2024-05-26'
  }
]

// Mock team matches data with proper dates
const teamMatchesData = [
  {
    id: 1,
    name: 'Championnat de France Interclubs 2024',
    status: 'in_progress',
    teams: '16 équipes',
    nextAction: 'Valider résultats Round 2',
    startDate: '2024-05-20',
    endDate: '2024-05-22'
  },
  {
    id: 2,
    name: 'Division 1 Messieurs',
    status: 'scheduled',
    teams: '12 équipes',
    nextAction: 'Début: 1er juin 2024',
    startDate: '2024-06-01',
    endDate: '2024-06-03'
  },
  {
    id: 3,
    name: 'Division 2 Dames',
    status: 'preparation',
    teams: '8 équipes',
    nextAction: 'Révision des équipes',
    startDate: '2024-06-15',
    endDate: '2024-06-16'
  },
  {
    id: 4,
    name: 'Division 2 Relegation Bracket',
    status: 'scheduled',
    teams: '8 équipes',
    nextAction: 'Lié à: Open de France Amateur 2024',
    startDate: '2024-05-20',
    endDate: '2024-05-22'
  }
]

export default function RefereeDashboard() {
  const { t } = useTranslation()
  const { logout } = useAuth()
  const [showActiveOnly, setShowActiveOnly] = useState(false)

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  // Filter function to check if competition is active (not in the past)
  const isCompetitionActive = (startDate: string) => {
    const today = new Date()
    const competitionDate = new Date(startDate)
    return competitionDate >= today
  }

  // Filter competitions based on showActiveOnly state
  const filteredEvents = showActiveOnly 
    ? eventsData.filter(event => isCompetitionActive(event.startDate))
    : eventsData

  const filteredTeamMatches = showActiveOnly
    ? teamMatchesData.filter(match => isCompetitionActive(match.startDate))
    : teamMatchesData

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
            <button 
              onClick={() => setShowActiveOnly(false)}
              className={`inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
                !showActiveOnly 
                  ? 'border-transparent text-white bg-ffgolf hover:bg-ffgolf-700' 
                  : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
              }`}
            >
              <EyeIcon className="h-4 w-4 mr-2" />
              {t('competition.viewAllCompetitions', 'Voir Toutes les Compétitions')}
            </button>
            <button 
              onClick={() => setShowActiveOnly(true)}
              className={`inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
                showActiveOnly 
                  ? 'border-transparent text-white bg-ffgolf hover:bg-ffgolf-700' 
                  : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
              }`}
            >
              <ClockIcon className="h-4 w-4 mr-2" />
              {t('competition.activeCompetitions', 'Compétitions Actives')}
            </button>
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
                  {filteredEvents.map((event) => (
                    <tr key={event.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {event.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          event.status === 'in_progress' ? 'bg-green-100 text-green-800' :
                          event.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                          event.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {event.status === 'in_progress' ? t('status.inProgress', 'En cours') :
                           event.status === 'completed' ? t('status.completed', 'Terminée') :
                           event.status === 'scheduled' ? t('status.scheduled', 'Planifiée') :
                           t('status.preparation', 'Préparation')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.participants}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.nextAction}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/referee/events/${event.id}`} className="text-amber-600 hover:text-amber-800">
                          {event.status === 'completed' ? t('common.archives', 'Archives') : t('common.manage', 'Gérer')}
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {filteredEvents.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                        {showActiveOnly 
                          ? t('competition.noActiveCompetitions', 'Aucune compétition active trouvée')
                          : t('competition.noCompetitions', 'Aucune compétition trouvée')
                        }
                      </td>
                    </tr>
                  )}
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
                  {filteredTeamMatches.map((match) => (
                    <tr key={match.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {match.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          match.status === 'in_progress' ? 'bg-green-100 text-green-800' :
                          match.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                          match.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {match.status === 'in_progress' ? t('status.inProgress', 'En cours') :
                           match.status === 'completed' ? t('status.completed', 'Terminée') :
                           match.status === 'scheduled' ? t('status.scheduled', 'Planifiée') :
                           t('status.preparation', 'Préparation')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {match.teams}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {match.nextAction}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link 
                          href={match.id === 4 ? "/referee/competitions/relegation/1" : `/referee/competitions/${match.id}`}
                          className={match.id === 4 ? "text-orange-600 hover:text-orange-800" : "text-ffgolf hover:text-ffgolf-800"}
                        >
                          {match.status === 'preparation' ? t('common.review', 'Réviser') : 
                           match.status === 'scheduled' ? t('common.view', 'Consulter') : 
                           t('common.manage', 'Gérer')}
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {filteredTeamMatches.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                        {showActiveOnly 
                          ? t('competition.noActiveTeamMatches', 'Aucune compétition par équipes active trouvée')
                          : t('competition.noTeamMatches', 'Aucune compétition par équipes trouvée')
                        }
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}