import Link from 'next/link'
import Image from 'next/image'
import { 
  TrophyIcon,
  EyeIcon,
  ArrowPathIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'

export default function SpectatorView() {
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
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-2 py-1 text-xs font-medium bg-ffgolf-50 text-ffgolf-800 rounded">
                Résultats en Direct
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Event Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Spring Championship 2024</h1>
          <p className="mt-2 text-lg text-gray-600">Division 1 - Live Results</p>
          <div className="mt-4 flex justify-center items-center space-x-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              🔴 Live
            </span>
            <span className="text-sm text-gray-500">Last updated: 2 minutes ago</span>
            <button className="inline-flex items-center text-sm text-green-600 hover:text-green-900">
              <ArrowPathIcon className="h-4 w-4 mr-1" />
              Refresh
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-3">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <FunnelIcon className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                <option>All Teams</option>
                <option>Eagles</option>
                <option>Hawks</option>
                <option>Falcons</option>
                <option>Wolves</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                <option>All Rounds</option>
                <option>Round 1</option>
                <option>Round 2</option>
                <option>Round 3</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                <option>Summary View</option>
                <option>Detailed View</option>
              </select>
            </div>
          </div>
        </div>

        {/* Live Match */}
        <div className="bg-red-50 border border-red-200 rounded-lg mb-6 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-red-900">🔴 Live Match</h3>
              <p className="text-red-700">Eagles vs Falcons - Round 2</p>
              <p className="text-sm text-red-600">Current Score: Eagles 2.5 - 1.5 Falcons</p>
            </div>
            <div className="flex space-x-3">
              <Link 
                href="/spectator/live/1"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                <EyeIcon className="h-4 w-4 mr-1" />
                Watch Live
              </Link>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              🏆 Division 1 Leaderboard
            </h3>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pos
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Team
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Played
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Won
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Lost
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Points
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="bg-yellow-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">🦅</span>
                        <span className="text-sm font-medium text-gray-900">Eagles</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        🔴 Playing
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      2
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">🦅</span>
                        <span className="text-sm font-medium text-gray-900">Falcons</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        🔴 Playing
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">🦌</span>
                        <span className="text-sm font-medium text-gray-900">Hawks</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        Complete
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      4
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">🐺</span>
                        <span className="text-sm font-medium text-gray-900">Wolves</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">0</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        Waiting
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Results & Upcoming */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Results */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Recent Results
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-sm font-medium">Eagles def. Hawks</span>
                  <span className="text-sm text-gray-600">4-2</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-sm font-medium">Falcons def. Wolves</span>
                  <span className="text-sm text-gray-600">5-1</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-sm font-medium">Hawks def. Wolves</span>
                  <span className="text-sm text-gray-600">3-3 (6-5 playoff)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Matches */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Upcoming Matches
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <div>
                    <span className="text-sm font-medium">Hawks vs Wolves</span>
                    <p className="text-xs text-gray-600">Today at 4:00 PM</p>
                  </div>
                  <span className="text-xs text-blue-600">Round 3</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <div>
                    <span className="text-sm font-medium">TBD Semifinal</span>
                    <p className="text-xs text-gray-600">Tomorrow at 10:00 AM</p>
                  </div>
                  <span className="text-xs text-blue-600">Semifinals</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <div>
                    <span className="text-sm font-medium">Championship</span>
                    <p className="text-xs text-gray-600">Sunday at 2:00 PM</p>
                  </div>
                  <span className="text-xs text-blue-600">Final</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}