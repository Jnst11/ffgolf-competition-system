// Database schema using Drizzle ORM
import { pgTable, text, timestamp, integer, boolean, uuid, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const userRoleEnum = pgEnum('user_role', ['admin', 'captain', 'player', 'spectator']);
export const eventStatusEnum = pgEnum('event_status', ['draft', 'setup', 'active', 'completed', 'cancelled']);
export const matchFormatEnum = pgEnum('match_format', ['singles', 'foursomes', 'fourball', 'mixed']);
export const scoringSystemEnum = pgEnum('scoring_system', ['match_play', 'stroke_play', 'stableford']);
export const matchStatusEnum = pgEnum('match_status', ['not_started', 'in_progress', 'completed', 'abandoned']);
export const confirmationStatusEnum = pgEnum('confirmation_status', ['pending', 'confirmed', 'declined']);

// Tables
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  role: userRoleEnum('role').notNull().default('player'),
  passwordHash: text('password_hash'),
  handicap: integer('handicap'),
  phoneNumber: text('phone_number'),
  emergencyContact: text('emergency_contact'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const events = pgTable('events', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  status: eventStatusEnum('status').notNull().default('draft'),
  adminId: uuid('admin_id').notNull().references(() => users.id),
  maxTeams: integer('max_teams').notNull().default(16),
  playersPerTeam: integer('players_per_team').notNull().default(6),
  matchFormat: matchFormatEnum('match_format').notNull().default('singles'),
  scoringSystem: scoringSystemEnum('scoring_system').notNull().default('match_play'),
  enableHandicaps: boolean('enable_handicaps').notNull().default(true),
  allowSubstitutions: boolean('allow_substitutions').notNull().default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const teams = pgTable('teams', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  captainId: uuid('captain_id').notNull().references(() => users.id),
  eventId: uuid('event_id').notNull().references(() => events.id),
  maxPlayers: integer('max_players').notNull().default(6),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const teamPlayers = pgTable('team_players', {
  id: uuid('id').defaultRandom().primaryKey(),
  teamId: uuid('team_id').notNull().references(() => teams.id),
  playerId: uuid('player_id').notNull().references(() => users.id),
  position: integer('position'),
  joinedAt: timestamp('joined_at').defaultNow().notNull(),
});

export const matches = pgTable('matches', {
  id: uuid('id').defaultRandom().primaryKey(),
  eventId: uuid('event_id').notNull().references(() => events.id),
  homeTeamId: uuid('home_team_id').notNull().references(() => teams.id),
  awayTeamId: uuid('away_team_id').notNull().references(() => teams.id),
  round: integer('round').notNull(),
  startTime: timestamp('start_time'),
  status: matchStatusEnum('status').notNull().default('not_started'),
  homeTeamScore: integer('home_team_score').default(0),
  awayTeamScore: integer('away_team_score').default(0),
  winningSide: text('winning_side'), // 'home', 'away', 'tie'
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const matchPairings = pgTable('match_pairings', {
  id: uuid('id').defaultRandom().primaryKey(),
  matchId: uuid('match_id').notNull().references(() => matches.id),
  format: matchFormatEnum('format').notNull(),
  winningSide: text('winning_side'), // 'home', 'away', 'halved'
  score: text('score'), // e.g., "3&2", "2up", "halved"
  holesPlayed: integer('holes_played'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const pairingPlayers = pgTable('pairing_players', {
  id: uuid('id').defaultRandom().primaryKey(),
  pairingId: uuid('pairing_id').notNull().references(() => matchPairings.id),
  playerId: uuid('player_id').notNull().references(() => users.id),
  side: text('side').notNull(), // 'home' or 'away'
  position: integer('position').notNull(), // for foursomes/fourball order
});

export const playerConfirmations = pgTable('player_confirmations', {
  id: uuid('id').defaultRandom().primaryKey(),
  playerId: uuid('player_id').notNull().references(() => users.id),
  matchId: uuid('match_id').notNull().references(() => matches.id),
  status: confirmationStatusEnum('status').notNull().default('pending'),
  confirmedAt: timestamp('confirmed_at'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many, one }) => ({
  captainedTeams: many(teams, { relationName: 'captain' }),
  teamMemberships: many(teamPlayers),
  confirmations: many(playerConfirmations),
  adminEvents: many(events),
}));

export const eventsRelations = relations(events, ({ many, one }) => ({
  admin: one(users, {
    fields: [events.adminId],
    references: [users.id],
  }),
  teams: many(teams),
  matches: many(matches),
}));

export const teamsRelations = relations(teams, ({ many, one }) => ({
  captain: one(users, {
    fields: [teams.captainId],
    references: [users.id],
    relationName: 'captain',
  }),
  event: one(events, {
    fields: [teams.eventId],
    references: [events.id],
  }),
  players: many(teamPlayers),
  homeMatches: many(matches, { relationName: 'homeTeam' }),
  awayMatches: many(matches, { relationName: 'awayTeam' }),
}));

export const teamPlayersRelations = relations(teamPlayers, ({ one }) => ({
  team: one(teams, {
    fields: [teamPlayers.teamId],
    references: [teams.id],
  }),
  player: one(users, {
    fields: [teamPlayers.playerId],
    references: [users.id],
  }),
}));

export const matchesRelations = relations(matches, ({ many, one }) => ({
  event: one(events, {
    fields: [matches.eventId],
    references: [events.id],
  }),
  homeTeam: one(teams, {
    fields: [matches.homeTeamId],
    references: [teams.id],
    relationName: 'homeTeam',
  }),
  awayTeam: one(teams, {
    fields: [matches.awayTeamId],
    references: [teams.id],
    relationName: 'awayTeam',
  }),
  pairings: many(matchPairings),
  confirmations: many(playerConfirmations),
}));

export const matchPairingsRelations = relations(matchPairings, ({ many, one }) => ({
  match: one(matches, {
    fields: [matchPairings.matchId],
    references: [matches.id],
  }),
  players: many(pairingPlayers),
}));

export const pairingPlayersRelations = relations(pairingPlayers, ({ one }) => ({
  pairing: one(matchPairings, {
    fields: [pairingPlayers.pairingId],
    references: [matchPairings.id],
  }),
  player: one(users, {
    fields: [pairingPlayers.playerId],
    references: [users.id],
  }),
}));

export const playerConfirmationsRelations = relations(playerConfirmations, ({ one }) => ({
  player: one(users, {
    fields: [playerConfirmations.playerId],
    references: [users.id],
  }),
  match: one(matches, {
    fields: [playerConfirmations.matchId],
    references: [matches.id],
  }),
}));