'use client'

export type UserRole = 'admin' | 'referee' | 'captain' | 'player' | 'spectator'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  isActive: boolean
  lastLogin?: string
  permissions: string[]
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

// Simulated user database for demo purposes
const DEMO_USERS: Record<string, User> = {
  'admin@ffgolf.org': {
    id: '1',
    email: 'admin@ffgolf.org',
    name: 'Administrateur FFGolf',
    role: 'admin',
    isActive: true,
    permissions: ['admin:all', 'competitions:manage', 'users:manage', 'translations:manage']
  },
  'arbitre@ffgolf.org': {
    id: '2',
    email: 'arbitre@ffgolf.org',
    name: 'Jean Arbitre',
    role: 'referee',
    isActive: true,
    permissions: ['competitions:validate', 'matches:manage']
  },
  'capitaine@club.fr': {
    id: '3',
    email: 'capitaine@club.fr',
    name: 'Marie Capitaine',
    role: 'captain',
    isActive: true,
    permissions: ['team:manage', 'matches:report']
  }
}

class AuthService {
  private authState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false
  }

  private listeners: ((state: AuthState) => void)[] = []

  constructor() {
    this.loadStoredAuth()
  }

  private loadStoredAuth() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('auth_session')
      if (stored) {
        try {
          const session = JSON.parse(stored)
          if (session.expiresAt > Date.now()) {
            this.authState = {
              user: session.user,
              isAuthenticated: true,
              isLoading: false
            }
          } else {
            localStorage.removeItem('auth_session')
          }
        } catch (e) {
          localStorage.removeItem('auth_session')
        }
      }
    }
  }

  private saveSession(user: User) {
    if (typeof window !== 'undefined') {
      const session = {
        user,
        expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      }
      localStorage.setItem('auth_session', JSON.stringify(session))
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.authState))
  }

  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  getState(): AuthState {
    return this.authState
  }

  async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    this.authState.isLoading = true
    this.notifyListeners()

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const user = DEMO_USERS[email.toLowerCase()]
    
    if (!user) {
      this.authState.isLoading = false
      this.notifyListeners()
      return { success: false, error: 'Utilisateur non trouvé' }
    }

    if (!user.isActive) {
      this.authState.isLoading = false
      this.notifyListeners()
      return { success: false, error: 'Compte désactivé' }
    }

    // In a real app, you'd validate the password here
    // For demo purposes, any password works
    
    const updatedUser = {
      ...user,
      lastLogin: new Date().toISOString()
    }

    this.authState = {
      user: updatedUser,
      isAuthenticated: true,
      isLoading: false
    }

    this.saveSession(updatedUser)
    this.notifyListeners()

    return { success: true }
  }

  logout() {
    this.authState = {
      user: null,
      isAuthenticated: false,
      isLoading: false
    }

    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_session')
    }

    this.notifyListeners()
  }

  hasPermission(permission: string): boolean {
    if (!this.authState.user) return false
    return this.authState.user.permissions.includes(permission) || 
           this.authState.user.permissions.includes('admin:all')
  }

  isRole(role: UserRole): boolean {
    return this.authState.user?.role === role
  }

  isAdmin(): boolean {
    return this.isRole('admin')
  }

  // Quick login methods for demo purposes
  async loginAsAdmin(): Promise<{ success: boolean; error?: string }> {
    return this.login('admin@ffgolf.org', 'demo')
  }

  async loginAsReferee(): Promise<{ success: boolean; error?: string }> {
    return this.login('arbitre@ffgolf.org', 'demo')
  }

  async loginAsCaptain(): Promise<{ success: boolean; error?: string }> {
    return this.login('capitaine@club.fr', 'demo')
  }
}

export const authService = new AuthService()

// React hook for auth
export function useAuth() {
  const [authState, setAuthState] = React.useState<AuthState>(authService.getState())

  React.useEffect(() => {
    const unsubscribe = authService.subscribe(setAuthState)
    return unsubscribe
  }, [])

  return {
    ...authState,
    login: authService.login.bind(authService),
    logout: authService.logout.bind(authService),
    hasPermission: authService.hasPermission.bind(authService),
    isRole: authService.isRole.bind(authService),
    isAdmin: authService.isAdmin.bind(authService),
    loginAsAdmin: authService.loginAsAdmin.bind(authService),
    loginAsReferee: authService.loginAsReferee.bind(authService),
    loginAsCaptain: authService.loginAsCaptain.bind(authService)
  }
}

// Add React import for hooks
import React from 'react'