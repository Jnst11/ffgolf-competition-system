import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeftIcon,
  CogIcon, 
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  UserIcon,
  CalendarIcon,
  MapPinIcon,
  DocumentTextIcon,
  PencilIcon
} from '@heroicons/react/24/outline'

export default function RefereeMatchDetailPage() {
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
            <Link href="/referee/competitions/1/matches" className="hover:text-ffgolf">Gestion des Matchs</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Validation du Match</span>
          </nav>
        </div>

        {/* Match Header */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Golf de Roissy vs Racing Club de France</h1>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-orange-100 text-orange-800">
                    Validation requise
                  </span>
                  <span className="text-sm text-gray-500">Round 2 • 19 mai 2024</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Modifier
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  Valider le Match
                </button>
              </div>
            </div>
          </div>

          {/* Match Info */}
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Date et Heure</div>
                  <div className="text-sm text-gray-500">19 mai 2024, 14h00</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Lieu</div>
                  <div className="text-sm text-gray-500">Golf de Roissy</div>
                </div>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Rapporté</div>
                  <div className="text-sm text-gray-500">Il y a 2 jours</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Match Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Score Summary */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Résultat Rapporté</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">Golf de Roissy 4 - 2 Racing Club de France</div>
                  <div className="text-lg text-green-600 font-medium">Victoire de Golf de Roissy</div>
                </div>

                {/* Individual Matches */}
                <div className="space-y-4">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Détail des Matchs Individuels</h4>
                  
                  {/* Foursome matches */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="text-sm font-medium text-gray-900 mb-3">Foursome (Format: Match Play)</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-sm">Dupont/Martin (Roissy) vs Durand/Petit (Racing)</span>
                        <span className="text-sm font-medium text-green-600">Roissy gagne 3&2</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-sm">Moreau/Bernard (Roissy) vs Rousseau/Blanc (Racing)</span>
                        <span className="text-sm font-medium text-red-600">Racing gagne 2&1</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-sm">Leroy/Simon (Roissy) vs Garnier/Faure (Racing)</span>
                        <span className="text-sm font-medium text-green-600">Roissy gagne 1 up</span>
                      </div>
                    </div>
                  </div>

                  {/* Simple matches */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="text-sm font-medium text-gray-900 mb-3">Simple (Format: Match Play)</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-sm">Dubois (Roissy) vs Lemoine (Racing)</span>
                        <span className="text-sm font-medium text-green-600">Roissy gagne 4&3</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-sm">Robert (Roissy) vs Morel (Racing)</span>
                        <span className="text-sm font-medium text-green-600">Roissy gagne 2 up</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span className="text-sm">Laurent (Roissy) vs Vincent (Racing)</span>
                        <span className="text-sm font-medium text-red-600">Racing gagne 1 up</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Captain Reports */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Rapports des Capitaines</h3>
              </div>
              <div className="p-6 space-y-6">
                {/* Roissy Captain Report */}
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <UserIcon className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">Capitaine Golf de Roissy - M. Dubois</span>
                    <span className="text-xs text-gray-500">Rapporté le 19 mai à 18h30</span>
                  </div>
                  <div className="text-sm text-gray-700 bg-green-50 p-3 rounded">
                    <p className="mb-2"><strong>Score rapporté:</strong> Roissy 4-2 Racing</p>
                    <p className="mb-2"><strong>Conditions de jeu:</strong> Excellentes, vent léger, parcours en bon état</p>
                    <p className="mb-2"><strong>Commentaires:</strong> Match disputé dans un excellent esprit sportif. Aucun incident à signaler. Les joueurs de Racing ont félicité nos équipes.</p>
                    <p><strong>Signature digitale:</strong> ✓ Confirmé par M. Dubois</p>
                  </div>
                </div>

                {/* Racing Captain Report */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <UserIcon className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">Capitaine Racing Club - M. Martin</span>
                    <span className="text-xs text-gray-500">Rapporté le 19 mai à 19h15</span>
                  </div>
                  <div className="text-sm text-gray-700 bg-blue-50 p-3 rounded">
                    <p className="mb-2"><strong>Score confirmé:</strong> Roissy 4-2 Racing</p>
                    <p className="mb-2"><strong>Conditions de jeu:</strong> Très bonnes conditions</p>
                    <p className="mb-2"><strong>Commentaires:</strong> Félicitations à l'équipe de Roissy pour leur victoire méritée. Match de qualité dans un esprit exemplaire.</p>
                    <p><strong>Signature digitale:</strong> ✓ Confirmé par M. Martin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Validation Actions */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Actions de Validation</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-md p-4">
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mt-0.5" />
                      <div className="ml-3 flex-1">
                        <h4 className="text-sm font-medium text-green-800">Validation Recommandée</h4>
                        <p className="text-sm text-green-700 mt-1">
                          ✓ Les scores des deux capitaines correspondent<br/>
                          ✓ Aucune anomalie détectée<br/>
                          ✓ Rapports cohérents et complets<br/>
                          ✓ Délai de validation respecté
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
                      ✓ Valider le Match
                    </button>
                    <button className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700">
                      ⚠ Demander Clarification
                    </button>
                    <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">
                      ✗ Rejeter
                    </button>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Commentaires d'arbitrage (optionnel)
                    </label>
                    <textarea 
                      rows={3}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ffgolf focus:border-ffgolf"
                      placeholder="Ajoutez des commentaires sur cette validation..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Match Info */}
          <div className="space-y-6">
            {/* Match Status */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Statut du Match</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Statut actuel</span>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                    En attente de validation
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Priority</span>
                  <span className="text-sm font-medium text-red-600">Haute (&gt;48h)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Délai limite</span>
                  <span className="text-sm font-medium text-gray-900">22 mai 2024</span>
                </div>
              </div>
            </div>

            {/* Competition Context */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Context de la Compétition</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Compétition</dt>
                  <dd className="mt-1 text-sm text-gray-900">Championnat Interclubs 2024</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Round</dt>
                  <dd className="mt-1 text-sm text-gray-900">Round 2 de 4</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Classement avant match</dt>
                  <dd className="mt-1 text-sm text-gray-900">Roissy: 2ème • Racing: 6ème</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Impact sur classement</dt>
                  <dd className="mt-1 text-sm text-gray-900">Roissy monte à la 1ère place</dd>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Actions Rapides</h3>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <DocumentTextIcon className="h-4 w-4 mr-2" />
                  Télécharger le Rapport
                </button>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <UserIcon className="h-4 w-4 mr-2" />
                  Contacter les Capitaines
                </button>
                <Link 
                  href="/referee/competitions/1/matches"
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Retour aux Matchs
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Activité Récente</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">19 mai 19h15 - Rapport Racing confirmé</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">19 mai 18h30 - Rapport Roissy reçu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-600">19 mai 18h00 - Match terminé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}