import Link from 'next/link'
import Image from 'next/image'
import { 
  EyeIcon, 
  CogIcon, 
  FunnelIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'

export default function RefereeCompetitionsPage() {
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
          <Link href="/referee" className="inline-flex items-center text-sm text-ffgolf hover:text-ffgolf-800">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Retour au tableau de bord
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Toutes mes Compétitions</h1>
          
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une compétition..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf">
                <option>Tous les statuts</option>
                <option>En cours</option>
                <option>Planifiée</option>
                <option>Préparation</option>
                <option>Terminée</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf">
                <option>Toutes les divisions</option>
                <option>Division 1</option>
                <option>Division 2</option>
                <option>Division 3</option>
                <option>Jeunes</option>
              </select>
            </div>
          </div>
        </div>

        {/* Competition Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Competition */}
          <div className="bg-white rounded-lg shadow-md border-l-4 border-green-500">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Championnat de France Interclubs 2024
                  </h3>
                  <div className="mb-4">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      En cours
                    </span>
                    <span className="ml-2 text-sm text-gray-500">Round 2/4</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Équipes:</span>
                      <span className="font-medium">16</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Matchs cette semaine:</span>
                      <span className="font-medium text-orange-600">8 en attente</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prochaine action:</span>
                      <span className="font-medium text-red-600">Valider résultats</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Link 
                  href="/referee/competitions/1"
                  className="flex-1 bg-ffgolf text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-ffgolf-700"
                >
                  Gérer la Compétition
                </Link>
                <Link 
                  href="/referee/competitions/1/matches"
                  className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-gray-50"
                >
                  Voir les Matchs
                </Link>
              </div>
            </div>
          </div>

          {/* Scheduled Competition */}
          <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Division 1 Messieurs
                  </h3>
                  <div className="mb-4">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      Planifiée
                    </span>
                    <span className="ml-2 text-sm text-gray-500">Début: 1er juin 2024</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Équipes:</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="font-medium">Round Robin</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Durée:</span>
                      <span className="font-medium">6 semaines</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Link 
                  href="/referee/competitions/2"
                  className="flex-1 bg-ffgolf text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-ffgolf-700"
                >
                  Consulter
                </Link>
                <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Équipes et Joueurs
                </button>
              </div>
            </div>
          </div>

          {/* In Preparation Competition */}
          <div className="bg-white rounded-lg shadow-md border-l-4 border-yellow-500">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Division 2 Dames
                  </h3>
                  <div className="mb-4">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Préparation
                    </span>
                    <span className="ml-2 text-sm text-gray-500">Révision en cours</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Équipes:</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Équipes validées:</span>
                      <span className="font-medium text-yellow-600">6/8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Action requise:</span>
                      <span className="font-medium text-orange-600">Révision équipes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Link 
                  href="/referee/competitions/3"
                  className="flex-1 bg-ffgolf text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-ffgolf-700"
                >
                  Réviser
                </Link>
                <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Voir les Équipes
                </button>
              </div>
            </div>
          </div>

          {/* Completed Competition */}
          <div className="bg-white rounded-lg shadow-md border-l-4 border-gray-400">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Interclubs Jeunes U18
                  </h3>
                  <div className="mb-4">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                      Terminée
                    </span>
                    <span className="ml-2 text-sm text-gray-500">Terminée le 15 avril 2024</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Équipes:</span>
                      <span className="font-medium">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Champion:</span>
                      <span className="font-medium text-yellow-600">Golf de Roissy</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rapport:</span>
                      <span className="font-medium text-green-600">Envoyé</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Link 
                  href="/referee/competitions/4"
                  className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-gray-700"
                >
                  Archives
                </Link>
                <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Rapport Final
                </button>
              </div>
            </div>
          </div>

          {/* More competitions can be added here */}
          <div className="bg-white rounded-lg shadow-md border-l-4 border-green-500">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Division 3 Messieurs Promotion
                  </h3>
                  <div className="mb-4">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      En cours
                    </span>
                    <span className="ml-2 text-sm text-gray-500">Round 1/3</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Équipes:</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prochain match:</span>
                      <span className="font-medium text-blue-600">Dimanche 26 mai</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Statut:</span>
                      <span className="font-medium text-green-600">À jour</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Link 
                  href="/referee/competitions/5"
                  className="flex-1 bg-ffgolf text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-ffgolf-700"
                >
                  Gérer
                </Link>
                <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Calendrier
                </button>
              </div>
            </div>
          </div>

          {/* Final competition */}
          <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Coupe de France par Équipes
                  </h3>
                  <div className="mb-4">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      Planifiée
                    </span>
                    <span className="ml-2 text-sm text-gray-500">Début: 15 septembre 2024</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Équipes:</span>
                      <span className="font-medium">32</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="font-medium">Élimination directe</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lieu final:</span>
                      <span className="font-medium">Golf National</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Link 
                  href="/referee/competitions/6"
                  className="flex-1 bg-ffgolf text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-ffgolf-700"
                >
                  Consulter
                </Link>
                <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Préparation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}