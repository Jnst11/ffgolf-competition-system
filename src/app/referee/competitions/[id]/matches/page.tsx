import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeftIcon,
  CogIcon, 
  FunnelIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  EyeIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export default function RefereeMatchesPage() {
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
                Arbitre
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <CogIcon className="h-6 w-6" />
              </button>
              <div className="h-8 w-8 bg-ffgolf rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm text-gray-500">
            <Link href="/referee" className="hover:text-ffgolf">Tableau de bord</Link>
            <span className="mx-2">/</span>
            <Link href="/referee/competitions" className="hover:text-ffgolf">Mes compétitions</Link>
            <span className="mx-2">/</span>
            <Link href="/referee/competitions/1" className="hover:text-ffgolf">Championnat Interclubs</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Gestion des Matchs</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Gestion des Matchs - Championnat Interclubs 2024</h1>
          
          {/* Filters and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf">
                <option>Tous les rounds</option>
                <option>Round 1</option>
                <option>Round 2</option>
                <option>Round 3</option>
                <option>Round 4</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf">
                <option>Tous les statuts</option>
                <option>En attente de validation</option>
                <option>Validé</option>
                <option>À programmer</option>
                <option>En cours</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <DocumentTextIcon className="h-4 w-4 mr-2" />
                Exporter
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ffgolf hover:bg-ffgolf-700">
                <CheckCircleIcon className="h-4 w-4 mr-2" />
                Valider Sélection
              </button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-8 w-8 text-orange-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">En attente</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-8 w-8 text-green-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Validés</p>
                <p className="text-2xl font-bold text-gray-900">13</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ClockIcon className="h-8 w-8 text-blue-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Programmés</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">24</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total matchs</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>
        </div>

        {/* Matches List */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">
              Matchs par Round
            </h3>

            {/* Round 2 - Current */}
            <div className="mb-8">
              <h4 className="text-md font-medium text-gray-900 mb-4 flex items-center">
                Round 2 - En cours
                <span className="ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                  3 en attente
                </span>
              </h4>
              <div className="space-y-3">
                {/* Match needing validation */}
                <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <h5 className="text-sm font-medium text-gray-900">Golf de Roissy vs Racing Club de France</h5>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                          Validation requise
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        Score rapporté: Roissy 4-2 Racing • 19 mai 2024 • Golf de Roissy
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Capitaines: M. Dubois (Roissy) - M. Martin (Racing) • Rapporté il y a 2 jours
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700">
                        ✓ Valider
                      </button>
                      <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">
                        👁 Détails
                      </button>
                      <button className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700">
                        ✏ Modifier
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <h5 className="text-sm font-medium text-gray-900">Golf National vs Saint-Nom-la-Bretèche</h5>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                          Validation requise
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        Score rapporté: National 3-3 Saint-Nom (National gagne aux cartes) • 19 mai 2024 • Golf National
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Capitaines: M. Leroy (National) - Mme Durand (Saint-Nom) • Rapporté il y a 1 jour
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700">
                        ✓ Valider
                      </button>
                      <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">
                        👁 Détails
                      </button>
                      <button className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700">
                        ✏ Modifier
                      </button>
                    </div>
                  </div>
                </div>

                {/* Validated matches */}
                <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <h5 className="text-sm font-medium text-gray-900">Morfontaine vs Golf du Château</h5>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          ✓ Validé
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        Score final: Morfontaine 5-1 Golf du Château • 18 mai 2024 • Golf de Morfontaine
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Validé le 19 mai 2024 par vous
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">
                        👁 Détails
                      </button>
                      <button className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700">
                        📄 Rapport
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <h5 className="text-sm font-medium text-gray-900">Chantilly vs Golf de Joyenval</h5>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          ✓ Validé
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        Score final: Chantilly 2-4 Golf de Joyenval • 18 mai 2024 • Golf de Chantilly
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Validé le 19 mai 2024 par vous
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">
                        👁 Détails
                      </button>
                      <button className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700">
                        📄 Rapport
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 3 - Upcoming */}
            <div className="mb-8">
              <h4 className="text-md font-medium text-gray-900 mb-4 flex items-center">
                Round 3 - À venir
                <span className="ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  26 mai 2024
                </span>
              </h4>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <h5 className="text-sm font-medium text-gray-900">Golf de Roissy vs Golf de Morfontaine</h5>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          Programmé
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        26 mai 2024 à 14h00 • Golf de Roissy • 1er vs 2ème du classement
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Match clé pour le leadership • Confirmation reçue des deux équipes
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700">
                        📅 Modifier
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <h5 className="text-sm font-medium text-gray-900">Golf National vs Golf de Joyenval</h5>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          Programmé
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        26 mai 2024 à 10h00 • Golf National • 3ème vs 4ème du classement
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Confirmation reçue des deux équipes
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700">
                        📅 Modifier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 1 - Completed */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4 flex items-center">
                Round 1 - Terminé
                <span className="ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                  Tous validés
                </span>
              </h4>
              <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                <p>8 matchs terminés et validés • Période: 4-5 mai 2024</p>
                <div className="mt-2">
                  <button className="text-ffgolf hover:text-ffgolf-800 text-xs">
                    📄 Voir le rapport complet du Round 1
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}