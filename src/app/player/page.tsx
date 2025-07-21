import Link from 'next/link'
import Image from 'next/image'
import { 
  TrophyIcon,
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function PlayerDashboard() {
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
                Joueur - Pierre Dubois
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Player Dashboard</h1>
        
        {/* Profile Summary */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Your Profile
              </h3>
              <Link 
                href="/player/profile"
                className="text-sm text-green-600 hover:text-green-900"
              >
                Edit Profile
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-medium text-gray-500">Team</p>
                <p className="text-lg text-gray-900">Eagles</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500">Handicap</p>
                <p className="text-lg text-gray-900">8.2</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500">Next Match</p>
                <p className="text-lg text-gray-900">May 15 vs Hawks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Match Invitations */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Match Invitations
            </h3>
            
            <div className="space-y-4">
              {/* Upcoming Match 1 */}
              <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded-r-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Eagles vs Hawks</h4>
                    <div className="mt-1 flex items-center text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      Tuesday, May 15 at 10:00 AM
                    </div>
                    <p className="text-sm text-gray-600">📍 Riverside Golf Club, Course A</p>
                    <p className="text-sm text-gray-600">⛳ Format: Singles Match Play</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Response Needed
                    </span>
                    <div className="flex space-x-2">
                      <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-green-700">
                        <CheckCircleIcon className="h-3 w-3 mr-1" />
                        Confirm
                      </button>
                      <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700">
                        <XCircleIcon className="h-3 w-3 mr-1" />
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Match 2 */}
              <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded-r-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Eagles vs Falcons</h4>
                    <div className="mt-1 flex items-center text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      Tuesday, May 22 at 2:00 PM
                    </div>
                    <p className="text-sm text-gray-600">📍 Oakwood Country Club, Course B</p>
                    <p className="text-sm text-gray-600">⛳ Format: Foursomes</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Confirmed
                    </span>
                    <Link href="/player/matches/2" className="text-xs text-green-600 hover:text-green-900">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Matches */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Recent Matches
            </h3>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Match
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Result
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Your Performance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Eagles vs Wolves
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      May 8, 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Won 4-2
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Won 3&2
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Eagles vs Bears
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      May 1, 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        Lost 2-4
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Lost 1 down
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Eagles vs Tigers
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Apr 24, 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        Tied 3-3
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Halved
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