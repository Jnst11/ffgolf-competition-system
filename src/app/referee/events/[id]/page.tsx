'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { 
  ArrowLeftIcon,
  TrophyIcon,
  UsersIcon,
  ChartBarIcon,
  LinkIcon,
  CheckCircleIcon,
  ArrowRightOnRectangleIcon,
  PencilIcon,
  ClockIcon,
  CalendarIcon,
  PlusIcon,
  TrashIcon,
  ArrowsUpDownIcon
} from '@heroicons/react/24/outline'
import LanguageToggle from '@/components/LanguageToggle'
import { useTranslation } from '@/lib/translations'
import { useAuth } from '@/lib/auth'

// Mock data for the event
const eventData = {
  id: '1',
  name: 'Open de France Amateur 2024 - Qualification',
  status: 'in_progress',
  totalTeams: 16,
  participants: 64,
  venue: 'Golf National',
  date: '15-16 Mai 2024',
  course: 'L\'Albatros Course',
  linkedBrackets: {
    promotion: 'Division 1 Championship Bracket',
    relegation: 'Division 2 Relegation Bracket'
  }
}

// Mock golfer data with scores and Home Club
const golfers = [
  { id: 1, name: 'Martin Dupont', team: 'Golf Club de Paris', homeClub: 'Golf de Saint-Cloud', handicap: 2.4, phone: '+33 1 23 45 67 89', email: 'm.dupont@golfparis.fr', teetime: '08:00', course: 'Albatros', hole: 1, group: 1, isActive: true, scores: { round1: 71, round2: 69, total: 140, status: 'completed' } },
  { id: 2, name: 'Jean Martin', team: 'Golf Club de Paris', homeClub: 'Golf de Morfontaine', handicap: 4.1, phone: '+33 1 23 45 67 90', email: 'j.martin@golfparis.fr', teetime: '08:00', course: 'Albatros', hole: 1, group: 1, isActive: true, scores: { round1: 73, round2: 72, total: 145, status: 'completed' } },
  { id: 3, name: 'Louis Bernard', team: 'Golf Club de Paris', homeClub: 'Racing Club de France', handicap: 6.2, phone: '+33 1 23 45 67 91', email: 'l.bernard@golfparis.fr', teetime: '08:00', course: 'Albatros', hole: 1, group: 1, isActive: true, scores: { round1: 75, round2: null, total: 75, status: 'round1' } },
  { id: 4, name: 'Pierre Rousseau', team: 'Golf Club de Paris', homeClub: 'Golf de Chantaco', handicap: 8.3, phone: '+33 1 23 45 67 92', email: 'p.rousseau@golfparis.fr', teetime: '08:00', course: 'Albatros', hole: 1, group: 1, isActive: true, scores: { round1: 77, round2: 75, total: 152, status: 'completed' } },
  { id: 5, name: 'Antoine Leroy', team: 'RC Bordeaux Golf', homeClub: 'Golf du Médoc', handicap: 3.2, phone: '+33 5 56 12 34 56', email: 'a.leroy@bordeauxgolf.fr', teetime: '08:10', course: 'Albatros', hole: 1, group: 2, isActive: true, scores: { round1: 72, round2: 70, total: 142, status: 'completed' } },
  { id: 6, name: 'Claude Moreau', team: 'RC Bordeaux Golf', homeClub: 'Golf de Pessac', handicap: 5.1, phone: '+33 5 56 12 34 57', email: 'c.moreau@bordeauxgolf.fr', teetime: '08:10', course: 'Albatros', hole: 1, group: 2, isActive: true, scores: { round1: 74, round2: 73, total: 147, status: 'completed' } },
  { id: 7, name: 'Robert Simon', team: 'RC Bordeaux Golf', homeClub: 'Golf de Biscarrosse', handicap: 7.4, phone: '+33 5 56 12 34 58', email: 'r.simon@bordeauxgolf.fr', teetime: '08:10', course: 'Albatros', hole: 1, group: 2, isActive: true, scores: { round1: 76, round2: null, total: 76, status: 'round1' } },
  { id: 8, name: 'François Petit', team: 'RC Bordeaux Golf', homeClub: 'Golf de Lacanau', handicap: 9.2, phone: '+33 5 56 12 34 59', email: 'f.petit@bordeauxgolf.fr', teetime: '08:10', course: 'Albatros', hole: 1, group: 2, isActive: true, scores: { round1: 78, round2: 76, total: 154, status: 'completed' } },
]

// Mock team leaderboard data
const teamLeaderboard = [
  { position: 1, team: 'Golf Club de Paris', totalScore: 285, players: 'M. Dupont, J. Martin, L. Bernard, P. Rousseau', bracketType: 'promotion' },
  { position: 2, team: 'RC Bordeaux Golf', totalScore: 287, players: 'A. Leroy, C. Moreau, R. Simon, F. Petit', bracketType: 'promotion' },
  { position: 3, team: 'Golf de Lyon', totalScore: 289, players: 'T. Michel, V. Laurent, N. Garcia, M. Roux', bracketType: 'promotion' },
  { position: 4, team: 'AS Monaco Golf', totalScore: 291, players: 'D. Fournier, S. Girard, H. Morel', bracketType: 'promotion' },
  { position: 5, team: 'Marseille Golf Club', totalScore: 293, players: 'B. Andre, P. Fabre, M. Lefebvre', bracketType: 'promotion' },
  { position: 6, team: 'Toulouse FC Golf', totalScore: 295, players: 'J. Mercier, L. Blanc, A. Robin', bracketType: 'promotion' },
  { position: 7, team: 'Lille OSC Golf', totalScore: 297, players: 'Y. Guerin, E. Boyer, C. Clement', bracketType: 'promotion' },
  { position: 8, team: 'Strasbourg Golf', totalScore: 299, players: 'G. Henry, M. Rey, P. Gautier', bracketType: 'promotion' },
  { position: 9, team: 'Nice Golf Club', totalScore: 301, players: 'F. Hubert, D. Barbier, L. Prevost', bracketType: 'relegation' },
  { position: 10, team: 'Nantes Golf', totalScore: 303, players: 'S. Lemoine, A. Charpentier', bracketType: 'relegation' },
  { position: 11, team: 'Reims Golf Club', totalScore: 305, players: 'C. Gauthier, P. Leclerc', bracketType: 'relegation' },
  { position: 12, team: 'Montpellier Golf', totalScore: 307, players: 'R. Roche, M. Francois', bracketType: 'relegation' },
  { position: 13, team: 'Dijon Golf Club', totalScore: 309, players: 'L. Morin, T. Giraud', bracketType: 'relegation' },
  { position: 14, team: 'Clermont Golf', totalScore: 311, players: 'V. Durand, S. Benoit', bracketType: 'relegation' },
  { position: 15, team: 'Poitiers Golf', totalScore: 313, players: 'A. Berger, J. Marchand', bracketType: 'relegation' },
  { position: 16, team: 'Tours Golf Club', totalScore: 315, players: 'P. Lambert, C. Perez', bracketType: 'relegation' }
]

export default function EventManagementPage() {
  const { t } = useTranslation()
  const { logout } = useAuth()
  const [activeTab, setActiveTab] = useState('golfers')
  const [bulkAssignMode, setBulkAssignMode] = useState(false)
  const [selectedGolfers, setSelectedGolfers] = useState<number[]>([])
  const [editingScore, setEditingScore] = useState<{golferId: number, round: string, value: string} | null>(null)
  const [editingGolfer, setEditingGolfer] = useState<any>(null)
  const [golferList, setGolferList] = useState(golfers)

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  // Soft delete function
  const handleSoftDeleteGolfer = (golferId: number) => {
    setGolferList(prevGolfers => 
      prevGolfers.map(golfer => 
        golfer.id === golferId 
          ? { ...golfer, isActive: false }
          : golfer
      )
    )
  }

  // Edit golfer function
  const handleEditGolfer = (golfer: any) => {
    setEditingGolfer({...golfer})
  }

  // Save golfer function
  const handleSaveGolfer = () => {
    if (!editingGolfer) return
    
    setGolferList(prevGolfers => 
      prevGolfers.map(golfer => 
        golfer.id === editingGolfer.id 
          ? editingGolfer
          : golfer
      )
    )
    setEditingGolfer(null)
  }

  // Cancel edit function
  const handleCancelEdit = () => {
    setEditingGolfer(null)
  }

  // Filter out soft-deleted golfers for display
  const activeGolfers = golferList.filter(golfer => golfer.isActive)

  const promotionTeams = teamLeaderboard.filter(team => team.bracketType === 'promotion')
  const relegationTeams = teamLeaderboard.filter(team => team.bracketType === 'relegation')

  const tabs = [
    { id: 'golfers', name: t('golf.golfers', 'Golfers'), icon: UsersIcon },
    { id: 'teesheet', name: t('golf.teeSheet', 'Tee Sheet'), icon: ClockIcon },
    { id: 'scoring', name: t('golf.scoreEntry', 'Score Entry'), icon: PencilIcon },
    { id: 'leaderboard', name: t('competition.leaderboard', 'Leaderboard'), icon: TrophyIcon },
  ]

  const renderLeaderboardTab = () => {
    return (
      <div className="space-y-8">
        {/* Event Info */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{eventData.name}</h1>
              <div className="mt-2 flex items-center space-x-6 text-sm text-gray-500">
                <span className="flex items-center">
                  <TrophyIcon className="h-4 w-4 mr-1" />
                  {eventData.totalTeams} {t('team.teams', 'équipes')} • {eventData.participants} {t('golf.players', 'joueurs')}
                </span>
                <span>{eventData.venue}</span>
                <span>{eventData.date}</span>
              </div>
            </div>
            <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
              <CheckCircleIcon className="h-4 w-4 mr-1" />
              {t('status.inProgress', 'En cours')}
            </span>
          </div>
        </div>

        {/* Bracket Connections */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <LinkIcon className="h-5 w-5 mr-2" />
            {t('bracket.connections', 'Connexions aux Brackets')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/referee/competitions/1"
              className="p-4 border-2 border-green-200 rounded-lg hover:border-green-500 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-green-800">{t('bracket.promotion', 'Promotion Bracket')}</h3>
                  <p className="text-sm text-gray-600">{eventData.linkedBrackets.promotion}</p>
                  <p className="text-xs text-green-600 mt-1">{t('bracket.teams1to8', 'Équipes 1-8')}</p>
                </div>
                <TrophyIcon className="h-8 w-8 text-green-600" />
              </div>
            </Link>
            <Link 
              href="/referee/competitions/relegation/1"
              className="p-4 border-2 border-orange-200 rounded-lg hover:border-orange-500 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-orange-800">{t('bracket.relegation', 'Relegation Bracket')}</h3>
                  <p className="text-sm text-gray-600">{eventData.linkedBrackets.relegation}</p>
                  <p className="text-xs text-orange-600 mt-1">{t('bracket.teams9to16', 'Équipes 9-16')}</p>
                </div>
                <ChartBarIcon className="h-8 w-8 text-orange-600" />
              </div>
            </Link>
          </div>
        </div>

        {/* Team Leaderboards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Promotion Teams */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 flex items-center">
                <TrophyIcon className="h-5 w-5 mr-2 text-green-600" />
                {t('bracket.promotionTeams', 'Équipes de Promotion')} (1-8)
              </h2>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('team.team', 'Équipe')}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {promotionTeams.map((team) => (
                    <tr key={team.position}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-green-800">{team.position}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        <div>
                          <div className="font-medium">{team.team}</div>
                          <div className="text-xs text-gray-500">{team.players}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">{team.totalScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Relegation Teams */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 flex items-center">
                <ChartBarIcon className="h-5 w-5 mr-2 text-orange-600" />
                {t('bracket.relegationTeams', 'Équipes de Relégation')} (9-16)
              </h2>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('team.team', 'Équipe')}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {relegationTeams.map((team) => (
                    <tr key={team.position}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-orange-800">{team.position}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        <div>
                          <div className="font-medium">{team.team}</div>
                          <div className="text-xs text-gray-500">{team.players}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">{team.totalScore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderGolfersTab = () => {
    return (
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">{t('golf.golferManagement', 'Golfer Management')}</h2>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ffgolf hover:bg-ffgolf-700">
                <PlusIcon className="h-4 w-4 mr-2" />
                {t('golf.addGolfer', 'Add Golfer')}
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.name', 'Name')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('team.team', 'Team')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.homeClub', 'Home Club')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.handicap', 'Handicap')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('common.contact', 'Contact')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('common.actions', 'Actions')}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activeGolfers.map((golfer) => (
                  <tr key={golfer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{golfer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{golfer.team}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{golfer.homeClub}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{golfer.handicap}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div>{golfer.phone}</div>
                      <div className="text-xs">{golfer.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        onClick={() => handleEditGolfer(golfer)}
                        className="text-ffgolf hover:text-ffgolf-800 mr-3"
                        title={t('common.edit', 'Edit')}
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleSoftDeleteGolfer(golfer.id)}
                        className="text-orange-600 hover:text-orange-800"
                        title={t('golf.deactivateGolfer', 'Deactivate')}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  const renderTeeSheetTab = () => {
    return (
      <div className="space-y-6">
        {/* Tee Sheet Controls */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">{t('golf.teeSheetManagement', 'Tee Sheet Management')}</h2>
            <div className="flex space-x-3">
              <button 
                onClick={() => setBulkAssignMode(!bulkAssignMode)}
                className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium ${bulkAssignMode ? 'bg-ffgolf text-white' : 'text-gray-700 bg-white hover:bg-gray-50'}`}
              >
                <ArrowsUpDownIcon className="h-4 w-4 mr-2" />
                {t('golf.bulkAssign', 'Bulk Assign')}
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                <CalendarIcon className="h-4 w-4 mr-2" />
                {t('golf.generateTimes', 'Generate Times')}
              </button>
            </div>
          </div>

          {/* Bulk Assignment Panel */}
          {bulkAssignMode && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">{t('golf.bulkAssignment', 'Bulk Assignment')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('golf.course', 'Course')}</label>
                  <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-ffgolf focus:border-ffgolf sm:text-sm">
                    <option>L&apos;Albatros Course</option>
                    <option>L&apos;Aigle Course</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('golf.startingHole', 'Starting Hole')}</label>
                  <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-ffgolf focus:border-ffgolf sm:text-sm">
                    {Array.from({length: 18}, (_, i) => (
                      <option key={i + 1} value={i + 1}>Hole {i + 1}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('golf.startTime', 'Start Time')}</label>
                  <input 
                    type="time" 
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-ffgolf focus:border-ffgolf sm:text-sm"
                    defaultValue="08:00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('golf.interval', 'Interval (min)')}</label>
                  <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-ffgolf focus:border-ffgolf sm:text-sm">
                    <option value="8">8 minutes</option>
                    <option value="10">10 minutes</option>
                    <option value="12">12 minutes</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ffgolf hover:bg-ffgolf-700">
                  {t('golf.applyToSelected', 'Apply to Selected')} ({selectedGolfers.length})
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Tee Sheet Table */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">{t('golf.teeSheet', 'Tee Sheet')} - {eventData.course}</h3>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {bulkAssignMode && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded border-gray-300 text-ffgolf focus:ring-ffgolf" />
                    </th>
                  )}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.teeTime', 'Tee Time')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.course', 'Course')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.hole', 'Hole')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.group', 'Group')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.golfer', 'Golfer')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('team.team', 'Team')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('common.actions', 'Actions')}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activeGolfers.map((golfer) => (
                  <tr key={golfer.id} className="hover:bg-gray-50">
                    {bulkAssignMode && (
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input 
                          type="checkbox" 
                          className="rounded border-gray-300 text-ffgolf focus:ring-ffgolf"
                          checked={selectedGolfers.includes(golfer.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedGolfers([...selectedGolfers, golfer.id])
                            } else {
                              setSelectedGolfers(selectedGolfers.filter(id => id !== golfer.id))
                            }
                          }}
                        />
                      </td>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">{golfer.teetime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{golfer.course}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{golfer.hole}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{golfer.group}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{golfer.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{golfer.team}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-ffgolf hover:text-ffgolf-800 mr-3">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <ArrowsUpDownIcon className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  const renderScoringTab = () => {
    const getStatusColor = (status: string) => {
      switch (status) {
        case 'completed': return 'bg-green-100 text-green-800'
        case 'round1': return 'bg-yellow-100 text-yellow-800'
        case 'pending': return 'bg-gray-100 text-gray-800'
        default: return 'bg-gray-100 text-gray-800'
      }
    }

    const getStatusText = (status: string) => {
      switch (status) {
        case 'completed': return t('status.completed', 'Completed')
        case 'round1': return t('golf.round1Complete', 'Round 1 Complete')
        case 'pending': return t('status.pending', 'Pending')
        default: return status
      }
    }

    const handleScoreEdit = (golferId: number, round: string, currentValue: number | null) => {
      setEditingScore({
        golferId,
        round,
        value: currentValue?.toString() || ''
      })
    }

    const handleScoreSave = () => {
      // In a real app, this would save to the backend
      console.log('Saving score:', editingScore)
      setEditingScore(null)
    }

    const handleScoreCancel = () => {
      setEditingScore(null)
    }

    return (
      <div className="space-y-6">
        {/* Score Entry Controls */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900">{t('golf.scoreEntry', 'Score Entry')}</h2>
              <p className="text-sm text-gray-600">{t('golf.scoreEntryDesc', 'Enter and manage golfer scores for each round')}</p>
            </div>
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                <CheckCircleIcon className="h-4 w-4 mr-2" />
                {t('golf.validateRound', 'Validate Round')}
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <CalendarIcon className="h-4 w-4 mr-2" />
                {t('golf.exportScores', 'Export Scores')}
              </button>
            </div>
          </div>

          {/* Round Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                <div>
                  <h3 className="text-sm font-medium text-green-800">{t('golf.round1', 'Round 1')}</h3>
                  <p className="text-sm text-green-600">{t('status.completed', 'Completed')} - 8/8 {t('golf.players', 'players')}</p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-yellow-600 mr-2" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">{t('golf.round2', 'Round 2')}</h3>
                  <p className="text-sm text-yellow-600">{t('status.inProgress', 'In Progress')} - 6/8 {t('golf.players', 'players')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Score Entry Table */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">{t('golf.playerScores', 'Player Scores')}</h3>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.golfer', 'Golfer')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('team.team', 'Team')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.handicap', 'HCP')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.round1', 'Round 1')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.round2', 'Round 2')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('golf.total', 'Total')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('common.status', 'Status')}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('common.actions', 'Actions')}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activeGolfers.map((golfer) => (
                  <tr key={golfer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{golfer.name}</div>
                      <div className="text-sm text-gray-500">{golfer.teetime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{golfer.team}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{golfer.handicap}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingScore?.golferId === golfer.id && editingScore?.round === 'round1' ? (
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            min="50"
                            max="120"
                            value={editingScore.value}
                            onChange={(e) => setEditingScore({...editingScore, value: e.target.value})}
                            className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-ffgolf focus:border-ffgolf"
                          />
                          <button
                            onClick={handleScoreSave}
                            className="text-green-600 hover:text-green-800"
                          >
                            <CheckCircleIcon className="h-4 w-4" />
                          </button>
                          <button
                            onClick={handleScoreCancel}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleScoreEdit(golfer.id, 'round1', golfer.scores.round1)}
                          className="text-sm font-mono text-gray-900 hover:text-ffgolf focus:outline-none"
                        >
                          {golfer.scores.round1 || '-'}
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingScore?.golferId === golfer.id && editingScore?.round === 'round2' ? (
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            min="50"
                            max="120"
                            value={editingScore.value}
                            onChange={(e) => setEditingScore({...editingScore, value: e.target.value})}
                            className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-ffgolf focus:border-ffgolf"
                          />
                          <button
                            onClick={handleScoreSave}
                            className="text-green-600 hover:text-green-800"
                          >
                            <CheckCircleIcon className="h-4 w-4" />
                          </button>
                          <button
                            onClick={handleScoreCancel}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleScoreEdit(golfer.id, 'round2', golfer.scores.round2)}
                          className="text-sm font-mono text-gray-900 hover:text-ffgolf focus:outline-none"
                        >
                          {golfer.scores.round2 || '-'}
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-bold text-gray-900">{golfer.scores.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(golfer.scores.status)}`}>
                        {getStatusText(golfer.scores.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-ffgolf hover:text-ffgolf-800 mr-3">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <CheckCircleIcon className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Team Score Summary */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">{t('golf.teamScoreSummary', 'Team Score Summary')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Golf Club de Paris</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Round 1:</span>
                  <span className="font-mono">296</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Round 2:</span>
                  <span className="font-mono">289</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>{t('golf.total', 'Total')}:</span>
                  <span className="font-mono">585</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">RC Bordeaux Golf</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Round 1:</span>
                  <span className="font-mono">300</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Round 2:</span>
                  <span className="font-mono">295</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>{t('golf.total', 'Total')}:</span>
                  <span className="font-mono">595</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
              <span className="ml-4 px-3 py-1 text-xs font-medium bg-amber-50 text-amber-800 rounded">
                {t('competition.eventManagement', 'Event Management')}
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
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-ffgolf text-ffgolf'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`mr-2 h-5 w-5 ${
                    activeTab === tab.id ? 'text-ffgolf' : 'text-gray-400 group-hover:text-gray-500'
                  }`} />
                  {tab.name}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'golfers' && renderGolfersTab()}
        {activeTab === 'teesheet' && renderTeeSheetTab()}
        {activeTab === 'scoring' && renderScoringTab()}
        {activeTab === 'leaderboard' && renderLeaderboardTab()}
      </div>

      {/* Golfer Edit Modal */}
      {editingGolfer && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-white">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                {t('golf.editGolfer', 'Edit Golfer')} - {editingGolfer.name}
              </h3>
              <button 
                onClick={handleCancelEdit}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mt-4 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('golf.name', 'Name')}</label>
                <input
                  type="text"
                  value={editingGolfer.name}
                  onChange={(e) => setEditingGolfer({...editingGolfer, name: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffgolf focus:border-ffgolf"
                />
              </div>

              {/* Team */}
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('team.team', 'Team')}</label>
                <input
                  type="text"
                  value={editingGolfer.team}
                  onChange={(e) => setEditingGolfer({...editingGolfer, team: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffgolf focus:border-ffgolf"
                />
              </div>

              {/* Home Club */}
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('golf.homeClub', 'Home Club')}</label>
                <input
                  type="text"
                  value={editingGolfer.homeClub}
                  onChange={(e) => setEditingGolfer({...editingGolfer, homeClub: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffgolf focus:border-ffgolf"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Handicap */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('golf.handicap', 'Handicap')}</label>
                  <input
                    type="number"
                    step="0.1"
                    value={editingGolfer.handicap}
                    onChange={(e) => setEditingGolfer({...editingGolfer, handicap: parseFloat(e.target.value)})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffgolf focus:border-ffgolf"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">{t('common.phone', 'Phone')}</label>
                  <input
                    type="tel"
                    value={editingGolfer.phone}
                    onChange={(e) => setEditingGolfer({...editingGolfer, phone: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffgolf focus:border-ffgolf"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('common.email', 'Email')}</label>
                <input
                  type="email"
                  value={editingGolfer.email}
                  onChange={(e) => setEditingGolfer({...editingGolfer, email: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-ffgolf focus:border-ffgolf"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleCancelEdit}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ffgolf"
              >
                {t('common.cancel', 'Cancel')}
              </button>
              <button
                onClick={handleSaveGolfer}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ffgolf hover:bg-ffgolf-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ffgolf"
              >
                {t('common.save', 'Save')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}