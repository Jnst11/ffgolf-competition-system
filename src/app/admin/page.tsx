'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  PlusIcon, 
  CogIcon, 
  UsersIcon, 
  TrophyIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  LanguageIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import AdminRoute from '@/components/AdminRoute'
import { useAuth } from '@/lib/auth'
import LanguageToggle from '@/components/LanguageToggle'

function AdminDashboardContent() {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
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
              <span className="ml-4 px-3 py-1 text-xs font-medium bg-purple-50 text-purple-800 rounded">
                Administrateur
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <span className="text-sm text-gray-600 hidden sm:block">
                {user?.name || 'Administrateur'}
              </span>
              <button 
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 p-1"
                title="Se déconnecter"
              >
                <ArrowRightOnRectangleIcon className="h-6 w-6" />
              </button>
              <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'AD'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tableau de Bord Administrateur</h1>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/admin/events/new"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ffgolf hover:bg-ffgolf-700"
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Créer une Nouvelle Compétition
            </Link>
            <Link 
              href="/admin/teams"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <UsersIcon className="h-4 w-4 mr-2" />
              Gérer les Équipes
            </Link>
            <Link 
              href="/admin/translations"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <LanguageIcon className="h-4 w-4 mr-2" />
              Gestion des Traductions
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrophyIcon className="h-6 w-6 text-ffgolf" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Compétitions Actives
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      3
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UsersIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Équipes
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      24
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ChartBarIcon className="h-6 w-6 text-slate-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Matchs Aujourd'hui
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      8
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Problèmes
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      2
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Compétitions Récentes
            </h3>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nom de la Compétition
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Équipes
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date de Début
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
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
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      16 équipes
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      15 mai 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href="/admin/events/1" className="text-ffgolf hover:text-ffgolf-800">
                        Gérer
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Division 1 Messieurs
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Configuration
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      12 équipes
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1er juin 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href="/admin/events/2" className="text-ffgolf hover:text-ffgolf-800">
                        Configurer
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

export default function AdminDashboard() {
  return (
    <AdminRoute>
      <AdminDashboardContent />
    </AdminRoute>
  )
}