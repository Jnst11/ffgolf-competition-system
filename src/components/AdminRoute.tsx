'use client'

import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { useEffect, ReactNode } from 'react'

interface AdminRouteProps {
  children: ReactNode
  fallbackPath?: string
}

export default function AdminRoute({ children, fallbackPath = '/' }: AdminRouteProps) {
  const { isAuthenticated, isAdmin, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push('/auth/login?redirect=/admin')
      } else if (!isAdmin()) {
        router.push(fallbackPath)
      }
    }
  }, [isAuthenticated, isAdmin, isLoading, router, fallbackPath])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ffgolf mx-auto mb-4"></div>
          <p className="text-gray-600">Vérification des permissions...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated || !isAdmin()) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-md p-6 max-w-md">
            <h2 className="text-lg font-medium text-red-800 mb-2">Accès Refusé</h2>
            <p className="text-red-600 mb-4">
              Vous devez être administrateur pour accéder à cette page.
            </p>
            <button
              onClick={() => router.push(fallbackPath)}
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}