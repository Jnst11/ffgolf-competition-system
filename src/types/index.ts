// Core domain types for Team Matches application

export type UserRole = 'admin' | 'captain' | 'player' | 'spectator';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Player extends User {
  handicap?: number;
  phoneNumber?: string;
  emergencyContact?: string;
  teamId?: string;
}

export interface Team {
  id: string;
  name: string;
  captainId: string;
  players: Player[];
  eventId: string;
  maxPlayers: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  status: 'draft' | 'setup' | 'active' | 'completed' | 'cancelled';
  adminId: string;
  settings: EventSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface EventSettings {
  maxTeams: number;
  playersPerTeam: number;
  matchFormat: MatchFormat;
  scoringSystem: ScoringSystem;
  enableHandicaps: boolean;
  allowSubstitutions: boolean;
}

export type MatchFormat = 'singles' | 'foursomes' | 'fourball' | 'mixed';
export type ScoringSystem = 'match_play' | 'stroke_play' | 'stableford';
export type MatchStatus = 'not_started' | 'in_progress' | 'completed' | 'abandoned';

export interface Match {
  id: string;
  eventId: string;
  homeTeamId: string;
  awayTeamId: string;
  round: number;
  startTime: Date;
  status: MatchStatus;
  pairings: MatchPairing[];
  result?: MatchResult;
  createdAt: Date;
  updatedAt: Date;
}

export interface MatchPairing {
  id: string;
  matchId: string;
  homePlayerIds: string[];
  awayPlayerIds: string[];
  format: MatchFormat;
  result?: PairingResult;
}

export interface PairingResult {
  winningSide: 'home' | 'away' | 'halved';
  score?: string; // e.g., "3&2", "2up", "halved"
  holesPlayed?: number;
}

export interface MatchResult {
  homeTeamScore: number;
  awayTeamScore: number;
  winningSide: 'home' | 'away' | 'tie';
  pairingResults: PairingResult[];
}

export interface PlayerConfirmation {
  id: string;
  playerId: string;
  matchId: string;
  status: 'pending' | 'confirmed' | 'declined';
  confirmedAt?: Date;
  notes?: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface EventCreationForm {
  name: string;
  description?: string;
  startDate: string;
  endDate: string;
  maxTeams: number;
  playersPerTeam: number;
  matchFormat: MatchFormat;
  scoringSystem: ScoringSystem;
  enableHandicaps: boolean;
  allowSubstitutions: boolean;
}

export interface TeamCreationForm {
  name: string;
  captainEmail: string;
  maxPlayers: number;
}

export interface PlayerInviteForm {
  email: string;
  name: string;
  handicap?: number;
  phoneNumber?: string;
}