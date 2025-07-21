'use client'

import Link from 'next/link'
import Image from 'next/Image'
import { 
  ArrowLeftIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  CalendarIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import LanguageToggle from '@/components/LanguageToggle'
import { useTranslation } from '@/lib/translations'
import { useAuth } from '@/lib/auth'

// Mock data for the relegation bracket
const bracketData = {
  id: '1',
  name: 'Division 2 Relegation Bracket',
  type: 'relegation',
  status: 'in_progress',
  venue: 'Golf National',
  startDate: '20 Mai 2024',
  linkedEvent: 'Open de France Amateur 2024 - Qualification'
}

// Teams from the qualification event (seeds 9-16)
const qualifiedTeams = [
  { seed: 9, team: 'Nice Golf Club', totalScore: 301, status: 'qualified' },
  { seed: 10, team: 'Nantes Golf', totalScore: 303, status: 'qualified' },
  { seed: 11, team: 'Reims Golf Club', totalScore: 305, status: 'qualified' },
  { seed: 12, team: 'Montpellier Golf', totalScore: 307, status: 'qualified' },
  { seed: 13, team: 'Dijon Golf Club', totalScore: 309, status: 'qualified' },
  { seed: 14, team: 'Clermont Golf', totalScore: 311, status: 'qualified' },
  { seed: 15, team: 'Poitiers Golf', totalScore: 313, status: 'qualified' },
  { seed: 16, team: 'Tours Golf Club', totalScore: 315, status: 'qualified' }
]

// Bracket matches with proper relegation seeding structure: 12v13, 11v14, 10v15, 9v16
const bracketMatches = {
  quarterFinals: [
    {
      id: 'qf1',
      match: 'Quarter-Final 1',
      team1: { seed: 12, name: 'Montpellier Golf', score: null },
      team2: { seed: 13, name: 'Dijon Golf Club', score: null },
      status: 'scheduled',
      date: '20 Mai 2024',
      time: '14:00'
    },
    {
      id: 'qf2', 
      match: 'Quarter-Final 2',
      team1: { seed: 11, name: 'Reims Golf Club', score: null },
      team2: { seed: 14, name: 'Clermont Golf', score: null },
      status: 'scheduled',
      date: '20 Mai 2024',
      time: '14:30'
    },
    {
      id: 'qf3',
      match: 'Quarter-Final 3', 
      team1: { seed: 10, name: 'Nantes Golf', score: null },
      team2: { seed: 15, name: 'Poitiers Golf', score: null },
      status: 'scheduled',
      date: '20 Mai 2024',
      time: '15:00'
    },
    {
      id: 'qf4',
      match: 'Quarter-Final 4',
      team1: { seed: 9, name: 'Nice Golf Club', score: null },
      team2: { seed: 16, name: 'Tours Golf Club', score: null },
      status: 'scheduled',
      date: '20 Mai 2024', 
      time: '15:30'
    }
  ],
  semiFinals: [
    {
      id: 'sf1',
      match: 'Semi-Final 1',
      team1: { name: 'Winner QF1', score: null },
      team2: { name: 'Winner QF2', score: null },
      status: 'pending',
      date: '21 Mai 2024',
      time: 'TBD'
    },
    {
      id: 'sf2',
      match: 'Semi-Final 2',
      team1: { name: 'Winner QF3', score: null },
      team2: { name: 'Winner QF4', score: null },
      status: 'pending', 
      date: '21 Mai 2024',
      time: 'TBD'
    }
  ],
  final: {
    id: 'final',
    match: 'Relegation Final',
    team1: { name: 'Winner SF1', score: null },
    team2: { name: 'Winner SF2', score: null },
    status: 'pending',
    date: '22 Mai 2024',
    time: 'TBD'
  }
}

export default function RelegationBracketPage() {
  const { t } = useTranslation()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800'
      case 'in_progress': return 'bg-yellow-100 text-yellow-800' 
      case 'completed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const MatchCard = ({ match, isSmall = false }: { match: any, isSmall?: boolean }) => (
    <div className={`bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-orange-500 transition-colors ${isSmall ? 'w-48' : 'w-64'}`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className={`font-medium text-gray-900 ${isSmall ? 'text-sm' : 'text-base'}`}>{match.match}</h4>
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(match.status)}`}>
          {match.status === 'scheduled' ? t('status.scheduled', 'Planifiée') : 
           match.status === 'pending' ? t('status.pending', 'En attente') :
           match.status === 'completed' ? t('status.completed', 'Terminée') : match.status}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
          <div className="flex items-center">
            {match.team1.seed && (
              <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-600 text-white text-xs font-bold rounded-full mr-2">
                {match.team1.seed}
              </span>
            )}
            <span className={`${isSmall ? 'text-sm' : 'text-base'} font-medium`}>{match.team1.name}</span>
          </div>
          {match.team1.score !== null && (
            <span className="font-mono font-bold text-lg">{match.team1.score}</span>
          )}
        </div>
        
        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
          <div className="flex items-center">
            {match.team2.seed && (
              <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-600 text-white text-xs font-bold rounded-full mr-2">
                {match.team2.seed}
              </span>
            )}
            <span className={`${isSmall ? 'text-sm' : 'text-base'} font-medium`}>{match.team2.name}</span>
          </div>
          {match.team2.score !== null && (
            <span className="font-mono font-bold text-lg">{match.team2.score}</span>
          )}
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-500">
          <CalendarIcon className="h-4 w-4 mr-1" />
          {match.date} • {match.time}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/referee" className="flex items-center mr-4">
                <ArrowLeftIcon className="h-5 w-5 text-gray-400" />
              </Link>
              <Link href="/" className="flex items-center">
                <Image 
                  src="/ffgolf-logo.png" 
                  alt="FFGolf Logo" 
                  width={150} 
                  height={48}
                  className="h-10 w-auto"
                />
              </Link>
              <span className="ml-4 px-3 py-1 text-xs font-medium bg-orange-50 text-orange-800 rounded">
                {t('bracket.relegation', 'Bracket de Relégation')}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageToggle />
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
        {/* Bracket Header */}
        <div className="bg-white shadow rounded-lg mb-8 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{bracketData.name}</h1>
              <div className="mt-2 flex items-center space-x-6 text-sm text-gray-500">
                <span className="flex items-center">
                  <ChartBarIcon className="h-4 w-4 mr-1" />
                  {t('bracket.relegation', 'Relégation')} • 8 {t('team.teams', 'équipes')}
                </span>
                <span>{bracketData.venue}</span>
                <span>{t('bracket.linkedEvent', 'Lié à')}: {bracketData.linkedEvent}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800">
                <ClockIcon className="h-4 w-4 mr-1" />
                {t('status.inProgress', 'En cours')}
              </span>
            </div>
          </div>
        </div>

        {/* Qualified Teams Summary */}
        <div className="bg-white shadow rounded-lg mb-8 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">{t('bracket.relegationTeams', 'Équipes de Relégation')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {qualifiedTeams.map((team) => (
              <div key={team.seed} className="flex items-center p-3 bg-orange-50 rounded-lg">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-600 text-white text-sm font-bold rounded-full mr-3">
                  {team.seed}
                </span>
                <div>
                  <div className="font-medium text-sm">{team.team}</div>
                  <div className="text-xs text-gray-500">{team.totalScore}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bracket Visualization */}
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
            {t('bracket.relegationBracket', 'Relegation Bracket')}
          </h2>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 items-center">
              
              {/* Quarter-Finals */}
              <div className="lg:col-span-3 space-y-8">
                <div className="text-center font-semibold text-gray-700 mb-4">
                  {t('bracket.quarterFinals', 'Quarter-Finals')}
                </div>
                <div className="space-y-6">
                  <MatchCard match={bracketMatches.quarterFinals[0]} />
                  <MatchCard match={bracketMatches.quarterFinals[1]} />
                  <MatchCard match={bracketMatches.quarterFinals[2]} />
                  <MatchCard match={bracketMatches.quarterFinals[3]} />
                </div>
              </div>

              {/* Semi-Finals */}
              <div className="lg:col-span-2 space-y-8">
                <div className="text-center font-semibold text-gray-700 mb-4">
                  {t('bracket.semiFinals', 'Semi-Finals')}
                </div>
                <div className="space-y-12 flex flex-col items-center">
                  <MatchCard match={bracketMatches.semiFinals[0]} isSmall />
                  <MatchCard match={bracketMatches.semiFinals[1]} isSmall />
                </div>
              </div>

              {/* Final */}
              <div className="lg:col-span-2 space-y-8">
                <div className="text-center font-semibold text-gray-700 mb-4">
                  {t('bracket.relegationFinal', 'Finale de Relégation')}
                </div>
                <div className="flex justify-center">
                  <MatchCard match={bracketMatches.final} isSmall />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}