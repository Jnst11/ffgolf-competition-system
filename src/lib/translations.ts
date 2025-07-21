import React from 'react'

export interface Translation {
  id: string;
  key: string;
  en: string;
  fr: string;
  category: string;
  context?: string;
  lastModified: string;
}

export interface TranslationCategory {
  id: string;
  name: string;
  description: string;
}

// Translation categories for organization
export const TRANSLATION_CATEGORIES: TranslationCategory[] = [
  { id: 'navigation', name: 'Navigation', description: 'Menu items, links, and navigation elements' },
  { id: 'auth', name: 'Authentication', description: 'Login, registration, and user authentication' },
  { id: 'competition', name: 'Competition', description: 'Competition management and terminology' },
  { id: 'match', name: 'Matches', description: 'Match-related terms and scoring' },
  { id: 'team', name: 'Teams', description: 'Team management and player information' },
  { id: 'referee', name: 'Referee', description: 'Referee dashboard and validation' },
  { id: 'admin', name: 'Administration', description: 'Admin interface and system management' },
  { id: 'golf', name: 'Golf Terms', description: 'Golf-specific terminology and rules' },
  { id: 'status', name: 'Status & States', description: 'Competition and match statuses' },
  { id: 'actions', name: 'Actions', description: 'Buttons, actions, and interactive elements' },
  { id: 'forms', name: 'Forms', description: 'Form labels, placeholders, and validation' },
  { id: 'common', name: 'Common', description: 'Common words and phrases' },
];

// Default translations with golf-specific French terminology
export const DEFAULT_TRANSLATIONS: Translation[] = [
  // Navigation
  {
    id: '1',
    key: 'nav.dashboard',
    en: 'Dashboard',
    fr: 'Tableau de bord',
    category: 'navigation',
    context: 'Main navigation menu',
    lastModified: new Date().toISOString(),
  },
  {
    id: '2',
    key: 'nav.competitions',
    en: 'Competitions',
    fr: 'Compétitions',
    category: 'navigation',
    context: 'Main navigation menu',
    lastModified: new Date().toISOString(),
  },
  {
    id: '3',
    key: 'nav.matches',
    en: 'Matches',
    fr: 'Matchs',
    category: 'navigation',
    context: 'Main navigation menu',
    lastModified: new Date().toISOString(),
  },
  {
    id: '4',
    key: 'nav.teams',
    en: 'Teams',
    fr: 'Équipes',
    category: 'navigation',
    context: 'Main navigation menu',
    lastModified: new Date().toISOString(),
  },
  {
    id: '5',
    key: 'nav.settings',
    en: 'Settings',
    fr: 'Paramètres',
    category: 'navigation',
    lastModified: new Date().toISOString(),
  },

  // Authentication
  {
    id: '6',
    key: 'auth.login',
    en: 'Login',
    fr: 'Se connecter',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '6a',
    key: 'auth.loginError',
    en: 'Login error',
    fr: 'Erreur de connexion',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '7',
    key: 'auth.logout',
    en: 'Log Out',
    fr: 'Se déconnecter',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '118',
    key: 'auth.loginToAccount',
    en: 'Login to your account',
    fr: 'Connexion à votre compte',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '119',
    key: 'competition.teamCompetitionManagement',
    en: 'Team competition management system',
    fr: 'Système de gestion des compétitions par équipes',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '120',
    key: 'home.heroDescription',
    en: 'Optimize your team competitions with our comprehensive management system. From setup to live scoring, we support you.',
    fr: 'Optimisez vos compétitions par équipes avec notre système de gestion complet. De la configuration au scoring en direct, nous vous accompagnons.',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '121',
    key: 'home.teamManagement',
    en: 'Team Management',
    fr: 'Gestion d\'Équipes',
    category: 'team',
    lastModified: new Date().toISOString(),
  },
  {
    id: '122',
    key: 'home.teamManagementDesc',
    en: 'Easily manage teams, players and lineups with our intuitive drag-and-drop interface.',
    fr: 'Gérez facilement les équipes, joueurs et compositions avec notre interface intuitive par glisser-déposer.',
    category: 'team',
    lastModified: new Date().toISOString(),
  },
  {
    id: '123',
    key: 'home.liveScoring',
    en: 'Live Scoring',
    fr: 'Scoring en Direct',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '124',
    key: 'home.liveScoringDesc',
    en: 'Real-time score updates and rankings to maintain engagement during matches.',
    fr: 'Mises à jour des scores en temps réel et classements pour maintenir l\'engagement pendant les matchs.',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '125',
    key: 'home.analytics',
    en: 'Analytics',
    fr: 'Analyses',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '126',
    key: 'home.analyticsDesc',
    en: 'Comprehensive reports and analytics to track performance and improve future competitions.',
    fr: 'Rapports complets et analyses pour suivre les performances et améliorer les futures compétitions.',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '127',
    key: 'home.roleBasedAccess',
    en: 'Role-Based Competition Access',
    fr: 'Accès aux Compétitions par Rôle',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '128',
    key: 'home.refereeAccess',
    en: 'Access and manage your assigned competitions',
    fr: 'Accéder et gérer vos compétitions assignées',
    category: 'referee',
    lastModified: new Date().toISOString(),
  },
  {
    id: '129',
    key: 'home.captainTeamManagement',
    en: 'Team management and matches',
    fr: 'Gestion d\'équipe et des matchs',
    category: 'team',
    lastModified: new Date().toISOString(),
  },
  {
    id: '130',
    key: 'home.playerConfirmations',
    en: 'Match confirmations and personal information',
    fr: 'Confirmations de matchs et informations personnelles',
    category: 'team',
    lastModified: new Date().toISOString(),
  },
  {
    id: '131',
    key: 'home.liveResultsUpdates',
    en: 'Real-time rankings and match updates',
    fr: 'Classements et mises à jour des matchs en temps réel',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '132',
    key: 'home.adminSystemManagement',
    en: 'Complete system and translation management',
    fr: 'Gestion complète du système et des traductions',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },

  // Competition terminology
  {
    id: '8',
    key: 'competition.championship',
    en: 'Championship',
    fr: 'Championnat',
    category: 'competition',
    context: 'Tournament type',
    lastModified: new Date().toISOString(),
  },
  {
    id: '9',
    key: 'competition.interclub',
    en: 'Interclub',
    fr: 'Interclubs',
    category: 'competition',
    context: 'Team competition format',
    lastModified: new Date().toISOString(),
  },
  {
    id: '10',
    key: 'competition.division',
    en: 'Division',
    fr: 'Division',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '11',
    key: 'competition.round',
    en: 'Round',
    fr: 'Round',
    category: 'competition',
    context: 'Competition round (anglicism kept in French golf)',
    lastModified: new Date().toISOString(),
  },

  // Golf-specific terms
  {
    id: '12',
    key: 'golf.foursome',
    en: 'Foursome',
    fr: 'Foursome',
    category: 'golf',
    context: 'Golf format (anglicism kept in French)',
    lastModified: new Date().toISOString(),
  },
  {
    id: '13',
    key: 'golf.matchPlay',
    en: 'Match Play',
    fr: 'Match Play',
    category: 'golf',
    context: 'Golf scoring format (anglicism kept)',
    lastModified: new Date().toISOString(),
  },
  {
    id: '14',
    key: 'golf.strokePlay',
    en: 'Stroke Play',
    fr: 'Stroke Play',
    category: 'golf',
    context: 'Golf scoring format (anglicism kept)',
    lastModified: new Date().toISOString(),
  },
  {
    id: '15',
    key: 'golf.captain',
    en: 'Captain',
    fr: 'Capitaine',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '16',
    key: 'golf.referee',
    en: 'Referee',
    fr: 'Arbitre',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },

  // Status terms
  {
    id: '17',
    key: 'status.inProgress',
    en: 'In Progress',
    fr: 'En cours',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '18',
    key: 'status.scheduled',
    en: 'Scheduled',
    fr: 'Programmé',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '19',
    key: 'status.completed',
    en: 'Completed',
    fr: 'Terminé',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '20',
    key: 'status.validated',
    en: 'Validated',
    fr: 'Validé',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '21',
    key: 'status.pending',
    en: 'Pending',
    fr: 'En attente',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '22',
    key: 'status.preparation',
    en: 'Preparation',
    fr: 'Préparation',
    category: 'status',
    lastModified: new Date().toISOString(),
  },

  // Actions
  {
    id: '23',
    key: 'action.validate',
    en: 'Validate',
    fr: 'Valider',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '24',
    key: 'action.edit',
    en: 'Edit',
    fr: 'Modifier',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '25',
    key: 'action.save',
    en: 'Save',
    fr: 'Enregistrer',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '26',
    key: 'action.cancel',
    en: 'Cancel',
    fr: 'Annuler',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '27',
    key: 'action.delete',
    en: 'Delete',
    fr: 'Supprimer',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '28',
    key: 'action.view',
    en: 'View',
    fr: 'Voir',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '29',
    key: 'action.manage',
    en: 'Manage',
    fr: 'Gérer',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '30',
    key: 'action.export',
    en: 'Export',
    fr: 'Exporter',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },

  // Common terms
  {
    id: '31',
    key: 'common.loading',
    en: 'Loading...',
    fr: 'Chargement...',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '32',
    key: 'common.search',
    en: 'Search',
    fr: 'Rechercher',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '33',
    key: 'common.filter',
    en: 'Filter',
    fr: 'Filtrer',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '34',
    key: 'common.date',
    en: 'Date',
    fr: 'Date',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '35',
    key: 'common.time',
    en: 'Time',
    fr: 'Heure',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '36',
    key: 'common.location',
    en: 'Location',
    fr: 'Lieu',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '37',
    key: 'common.score',
    en: 'Score',
    fr: 'Score',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '38',
    key: 'common.result',
    en: 'Result',
    fr: 'Résultat',
    category: 'common',
    lastModified: new Date().toISOString(),
  },

  // Extended Golf Terminology
  {
    id: '39',
    key: 'golf.golfCourse',
    en: 'Golf Course',
    fr: 'Parcours de golf',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '40',
    key: 'golf.greenFee',
    en: 'Green Fee',
    fr: 'Green fee',
    category: 'golf',
    context: 'Anglicism kept in French golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '41',
    key: 'golf.handicap',
    en: 'Handicap',
    fr: 'Handicap',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '42',
    key: 'golf.player',
    en: 'Player',
    fr: 'Joueur',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '43',
    key: 'golf.team',
    en: 'Team',
    fr: 'Équipe',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '44',
    key: 'golf.club',
    en: 'Club',
    fr: 'Club',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },

  // Competition Management Terms
  {
    id: '45',
    key: 'competition.management',
    en: 'Competition Management',
    fr: 'Gestion des Compétitions',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '46',
    key: 'competition.teamCompetitions',
    en: 'Team Competitions',
    fr: 'Compétitions par Équipes',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '47',
    key: 'competition.myCompetitions',
    en: 'My Competitions',
    fr: 'Mes Compétitions',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '48',
    key: 'competition.allCompetitions',
    en: 'All Competitions',
    fr: 'Toutes les Compétitions',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '49',
    key: 'competition.accessCompetitions',
    en: 'Access Competitions',
    fr: 'Accéder aux Compétitions',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },

  // Match Terms
  {
    id: '50',
    key: 'match.matchManagement',
    en: 'Match Management',
    fr: 'Gestion des Matchs',
    category: 'match',
    lastModified: new Date().toISOString(),
  },
  {
    id: '51',
    key: 'match.validation',
    en: 'Validation',
    fr: 'Validation',
    category: 'match',
    lastModified: new Date().toISOString(),
  },
  {
    id: '52',
    key: 'match.validationRequired',
    en: 'Validation Required',
    fr: 'Validation requise',
    category: 'match',
    lastModified: new Date().toISOString(),
  },
  {
    id: '53',
    key: 'match.scoreReported',
    en: 'Score Reported',
    fr: 'Score rapporté',
    category: 'match',
    lastModified: new Date().toISOString(),
  },
  {
    id: '54',
    key: 'match.finalScore',
    en: 'Final Score',
    fr: 'Score final',
    category: 'match',
    lastModified: new Date().toISOString(),
  },
  {
    id: '55',
    key: 'match.reportedResult',
    en: 'Reported Result',
    fr: 'Résultat Rapporté',
    category: 'match',
    lastModified: new Date().toISOString(),
  },

  // Referee Specific Terms
  {
    id: '56',
    key: 'referee.dashboard',
    en: 'Referee Dashboard',
    fr: 'Tableau de bord Arbitre',
    category: 'referee',
    lastModified: new Date().toISOString(),
  },
  {
    id: '57',
    key: 'referee.validateMatch',
    en: 'Validate Match',
    fr: 'Valider le Match',
    category: 'referee',
    lastModified: new Date().toISOString(),
  },
  {
    id: '58',
    key: 'referee.validateRound',
    en: 'Validate Round',
    fr: 'Valider le Round',
    category: 'referee',
    lastModified: new Date().toISOString(),
  },
  {
    id: '59',
    key: 'referee.quickActions',
    en: 'Quick Actions',
    fr: 'Actions Rapides',
    category: 'referee',
    lastModified: new Date().toISOString(),
  },
  {
    id: '60',
    key: 'referee.competitionDetails',
    en: 'Competition Details',
    fr: 'Détails de la Compétition',
    category: 'referee',
    lastModified: new Date().toISOString(),
  },

  // Form Labels
  {
    id: '61',
    key: 'form.search',
    en: 'Search',
    fr: 'Rechercher',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '62',
    key: 'form.searchCompetition',
    en: 'Search for a competition...',
    fr: 'Rechercher une compétition...',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '63',
    key: 'form.allStatuses',
    en: 'All Statuses',
    fr: 'Tous les statuts',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '64',
    key: 'form.allDivisions',
    en: 'All Divisions',
    fr: 'Toutes les divisions',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '65',
    key: 'form.allRounds',
    en: 'All Rounds',
    fr: 'Tous les rounds',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },

  // Status Specific Terms
  {
    id: '66',
    key: 'status.awaitingValidation',
    en: 'Awaiting Validation',
    fr: 'En attente de validation',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '67',
    key: 'status.toBeScheduled',
    en: 'To Be Scheduled',
    fr: 'À programmer',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '68',
    key: 'status.upcoming',
    en: 'Upcoming',
    fr: 'À venir',
    category: 'status',
    lastModified: new Date().toISOString(),
  },

  // Team Management
  {
    id: '69',
    key: 'team.teamManagement',
    en: 'Team Management',
    fr: 'Gestion des Équipes',
    category: 'team',
    lastModified: new Date().toISOString(),
  },
  {
    id: '70',
    key: 'team.captainPortal',
    en: 'Captain Portal',
    fr: 'Portail Capitaine',
    category: 'team',
    lastModified: new Date().toISOString(),
  },
  {
    id: '71',
    key: 'team.playerPortal',
    en: 'Player Portal',
    fr: 'Portail Joueur',
    category: 'team',
    lastModified: new Date().toISOString(),
  },
  {
    id: '72',
    key: 'team.captainReports',
    en: 'Captain Reports',
    fr: 'Rapports des Capitaines',
    category: 'team',
    lastModified: new Date().toISOString(),
  },

  // Page Titles and Headers
  {
    id: '73',
    key: 'page.currentStandings',
    en: 'Current Standings',
    fr: 'Classement Actuel',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '74',
    key: 'page.matchesByRound',
    en: 'Matches by Round',
    fr: 'Matchs par Round',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '75',
    key: 'page.liveResults',
    en: 'Live Results',
    fr: 'Résultats en Direct',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '76',
    key: 'page.recentActivity',
    en: 'Recent Activity',
    fr: 'Activité Récente',
    category: 'common',
    lastModified: new Date().toISOString(),
  },

  // Additional Actions
  {
    id: '77',
    key: 'action.details',
    en: 'Details',
    fr: 'Détails',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '78',
    key: 'action.modify',
    en: 'Modify',
    fr: 'Modifier',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '79',
    key: 'action.review',
    en: 'Review',
    fr: 'Réviser',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '80',
    key: 'action.consult',
    en: 'Consult',
    fr: 'Consulter',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '81',
    key: 'action.schedule',
    en: 'Schedule',
    fr: 'Programmer',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '82',
    key: 'action.archives',
    en: 'Archives',
    fr: 'Archives',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },

  // Context Information
  {
    id: '83',
    key: 'info.playingConditions',
    en: 'Playing Conditions',
    fr: 'Conditions de jeu',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '84',
    key: 'info.comments',
    en: 'Comments',
    fr: 'Commentaires',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '85',
    key: 'info.digitalSignature',
    en: 'Digital Signature',
    fr: 'Signature digitale',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '86',
    key: 'info.confirmed',
    en: 'Confirmed',
    fr: 'Confirmé',
    category: 'common',
    lastModified: new Date().toISOString(),
  },

  // Golf Scoring Terms
  {
    id: '87',
    key: 'golf.winsOnCards',
    en: 'wins on cards',
    fr: 'gagne aux cartes',
    category: 'golf',
    context: 'Match play tiebreaker',
    lastModified: new Date().toISOString(),
  },
  {
    id: '88',
    key: 'golf.wins3and2',
    en: 'wins 3&2',
    fr: 'gagne 3&2',
    category: 'golf',
    context: 'Match play scoring',
    lastModified: new Date().toISOString(),
  },
  {
    id: '89',
    key: 'golf.wins1up',
    en: 'wins 1 up',
    fr: 'gagne 1 up',
    category: 'golf',
    context: 'Match play scoring',
    lastModified: new Date().toISOString(),
  },
  {
    id: '90',
    key: 'golf.excellentConditions',
    en: 'Excellent conditions',
    fr: 'Excellentes conditions',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },

  // Translation Management Interface
  {
    id: '91',
    key: 'admin.translationManagement',
    en: 'Translation Management',
    fr: 'Gestion des Traductions',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },
  {
    id: '92',
    key: 'admin.manageTranslationsFrench',
    en: 'Manage French translations for the golf competition system',
    fr: 'Gérez les traductions français pour le système de compétitions golf',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },
  {
    id: '93',
    key: 'admin.returnToAdmin',
    en: 'Return to administration',
    fr: 'Retour à l\'administration',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },
  {
    id: '94',
    key: 'action.import',
    en: 'Import',
    fr: 'Importer',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '95',
    key: 'action.newTranslation',
    en: 'New Translation',
    fr: 'Nouvelle Traduction',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '96',
    key: 'form.searchKeyTextContext',
    en: 'Search key, English text, French or context...',
    fr: 'Rechercher clé, texte anglais, français ou contexte...',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '97',
    key: 'form.allCategories',
    en: 'All categories',
    fr: 'Toutes les catégories',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '98',
    key: 'admin.translationsCount',
    en: 'translation(s) out of',
    fr: 'traduction(s) sur',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },
  {
    id: '99',
    key: 'admin.total',
    en: 'total',
    fr: 'total',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },
  {
    id: '100',
    key: 'form.translationKey',
    en: 'Translation key',
    fr: 'Clé de traduction',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '101',
    key: 'form.translationKeyExample',
    en: 'e.g.: nav.dashboard',
    fr: 'ex: nav.dashboard',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '102',
    key: 'form.category',
    en: 'Category',
    fr: 'Catégorie',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '103',
    key: 'form.englishText',
    en: 'English text',
    fr: 'Texte anglais',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '104',
    key: 'form.frenchTranslation',
    en: 'French translation',
    fr: 'Traduction française',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '105',
    key: 'form.contextOptional',
    en: 'Context (optional)',
    fr: 'Contexte (optionnel)',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '106',
    key: 'form.contextDescription',
    en: 'Description of usage context',
    fr: 'Description du contexte d\'utilisation',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '107',
    key: 'action.add',
    en: 'Add',
    fr: 'Ajouter',
    category: 'actions',
    lastModified: new Date().toISOString(),
  },
  {
    id: '108',
    key: 'admin.translations',
    en: 'Translations',
    fr: 'Traductions',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },
  {
    id: '109',
    key: 'form.key',
    en: 'Key',
    fr: 'Clé',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '110',
    key: 'form.english',
    en: 'English',
    fr: 'Anglais',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '111',
    key: 'form.french',
    en: 'French',
    fr: 'Français',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '112',
    key: 'form.context',
    en: 'Context',
    fr: 'Contexte',
    category: 'forms',
    lastModified: new Date().toISOString(),
  },
  {
    id: '113',
    key: 'common.actions',
    en: 'Actions',
    fr: 'Actions',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '114',
    key: 'admin.confirmDelete',
    en: 'Are you sure you want to delete this translation?',
    fr: 'Êtes-vous sûr de vouloir supprimer cette traduction ?',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },
  {
    id: '115',
    key: 'admin.translationsImportedSuccess',
    en: 'Translations imported successfully!',
    fr: 'Traductions importées avec succès!',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },
  {
    id: '116',
    key: 'admin.translationsImportError',
    en: 'Error importing translations',
    fr: 'Erreur lors de l\'importation des traductions',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },
  {
    id: '117',
    key: 'admin.required',
    en: 'required',
    fr: 'requis',
    category: 'admin',
    lastModified: new Date().toISOString(),
  },
  {
    id: '118',
    key: 'home.spectatorLiveUpdates',
    en: 'Live leaderboards and match updates in real-time',
    fr: 'Classements et mises à jour des matchs en temps réel',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '119',
    key: 'nav.dashboard',
    en: 'My Dashboard',
    fr: 'Mon Tableau de Bord',
    category: 'navigation',
    lastModified: new Date().toISOString(),
  },
  {
    id: '120',
    key: 'nav.administration',
    en: 'Administration',
    fr: 'Administration',
    category: 'navigation',
    lastModified: new Date().toISOString(),
  },
  {
    id: '121',
    key: 'user.referee',
    en: 'Referee',
    fr: 'Arbitre',
    category: 'user',
    lastModified: new Date().toISOString(),
  },
  {
    id: '122',
    key: 'competition.viewAllCompetitions',
    en: 'View All Competitions',
    fr: 'Voir Toutes les Compétitions',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '123',
    key: 'competition.activeCompetitions',
    en: 'Active Competitions',
    fr: 'Compétitions Actives',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '124',
    key: 'competition.assignedCompetitions',
    en: 'My Assigned Competitions',
    fr: 'Mes Compétitions Assignées',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '125',
    key: 'competition.name',
    en: 'Competition Name',
    fr: 'Nom de la Compétition',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '126',
    key: 'common.status',
    en: 'Status',
    fr: 'Statut',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '127',
    key: 'team.teams',
    en: 'Teams',
    fr: 'Équipes',
    category: 'team',
    lastModified: new Date().toISOString(),
  },
  {
    id: '128',
    key: 'common.nextAction',
    en: 'Next Action',
    fr: 'Prochaine Action',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '129',
    key: 'common.actions',
    en: 'Actions',
    fr: 'Actions',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '130',
    key: 'status.inProgress',
    en: 'In Progress',
    fr: 'En cours',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '131',
    key: 'status.scheduled',
    en: 'Scheduled',
    fr: 'Planifiée',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '132',
    key: 'status.preparation',
    en: 'Preparation',
    fr: 'Préparation',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '133',
    key: 'status.completed',
    en: 'Completed',
    fr: 'Terminée',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '134',
    key: 'common.manage',
    en: 'Manage',
    fr: 'Gérer',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '135',
    key: 'common.view',
    en: 'View',
    fr: 'Consulter',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '136',
    key: 'common.review',
    en: 'Review',
    fr: 'Réviser',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '137',
    key: 'common.archives',
    en: 'Archives',
    fr: 'Archives',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '138',
    key: 'competition.teamMatches',
    en: 'Team Matches',
    fr: 'Team Matches',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '139',
    key: 'competition.events',
    en: 'Events',
    fr: 'Events',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '140',
    key: 'competition.participants',
    en: 'Participants',
    fr: 'Participants',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '141',
    key: 'competition.participantsCount',
    en: '156 players',
    fr: '156 joueurs',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '142',
    key: 'competition.participantsCount72',
    en: '72 players',
    fr: '72 joueurs',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '143',
    key: 'competition.validateRound1',
    en: 'Validate Round 1 results',
    fr: 'Valider résultats Round 1',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '144',
    key: 'bracket.connections',
    en: 'Bracket Connections',
    fr: 'Connexions aux Brackets',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '145',
    key: 'bracket.promotion',
    en: 'Promotion Bracket',
    fr: 'Bracket de Promotion',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '146',
    key: 'bracket.relegation',
    en: 'Relegation Bracket',
    fr: 'Bracket de Relégation',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '147',
    key: 'bracket.seeds',
    en: 'Seeds',
    fr: 'Graines',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '148',
    key: 'bracket.promotionTeams',
    en: 'Promotion Teams',
    fr: 'Équipes de Promotion',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '149',
    key: 'bracket.relegationTeams',
    en: 'Relegation Teams',
    fr: 'Équipes de Relégation',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '150',
    key: 'bracket.promotionDesc',
    en: 'These teams will advance to the promotion bracket',
    fr: 'Ces équipes avanceront au bracket de promotion',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '151',
    key: 'bracket.relegationDesc',
    en: 'These teams will participate in the relegation bracket',
    fr: 'Ces équipes participeront au bracket de relégation',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '152',
    key: 'common.position',
    en: 'Position',
    fr: 'Position',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
  {
    id: '153',
    key: 'team.team',
    en: 'Team',
    fr: 'Équipe',
    category: 'team',
    lastModified: new Date().toISOString(),
  },
  {
    id: '154',
    key: 'competition.totalScore',
    en: 'Total Score',
    fr: 'Score Total',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '155',
    key: 'team.players',
    en: 'Players',
    fr: 'Joueurs',
    category: 'team',
    lastModified: new Date().toISOString(),
  },
  {
    id: '156',
    key: 'bracket.linkedEvent',
    en: 'Linked to',
    fr: 'Lié à',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '157',
    key: 'bracket.qualifiedTeams',
    en: 'Qualified Teams',
    fr: 'Équipes Qualifiées',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '158',
    key: 'bracket.tournamentBracket',
    en: 'Tournament Bracket',
    fr: 'Bracket du Tournoi',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '159',
    key: 'bracket.quarterFinals',
    en: 'Quarter-Finals',
    fr: 'Quarts de Finale',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '160',
    key: 'bracket.semiFinals',
    en: 'Semi-Finals',
    fr: 'Demi-Finales',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '161',
    key: 'bracket.final',
    en: 'Final',
    fr: 'Finale',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '162',
    key: 'status.pending',
    en: 'Pending',
    fr: 'En attente',
    category: 'status',
    lastModified: new Date().toISOString(),
  },
  {
    id: '163',
    key: 'bracket.relegationBracket',
    en: 'Relegation Bracket',
    fr: 'Bracket de Relégation',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '164',
    key: 'bracket.relegationFinal',
    en: 'Relegation Final',
    fr: 'Finale de Relégation',
    category: 'bracket',
    lastModified: new Date().toISOString(),
  },
  {
    id: '165',
    key: 'auth.adminFFGolf',
    en: 'FFGolf Administrator',
    fr: 'Administrateur FFGolf',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '166',
    key: 'auth.regionalReferee',
    en: 'Regional Referee',
    fr: 'Arbitre Régional',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '167',
    key: 'auth.teamCaptain',
    en: 'Team Captain',
    fr: 'Capitaine d\'Équipe',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '168',
    key: 'auth.emailAddress',
    en: 'Email Address',
    fr: 'Adresse email',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '169',
    key: 'auth.emailPlaceholder',
    en: 'you@example.com',
    fr: 'vous@exemple.com',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '170',
    key: 'auth.password',
    en: 'Password',
    fr: 'Mot de passe',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '171',
    key: 'auth.passwordPlaceholder',
    en: '••••••••',
    fr: '••••••••',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '172',
    key: 'auth.loggingIn',
    en: 'Logging in...',
    fr: 'Connexion...',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '173',
    key: 'auth.demoLogin',
    en: 'Demo Login',
    fr: 'Connexion démo',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '174',
    key: 'auth.demoAccountsNote',
    en: 'Demo accounts - No password required',
    fr: 'Comptes de démonstration - Aucun mot de passe requis',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  {
    id: '175',
    key: 'auth.redirecting',
    en: 'Redirecting...',
    fr: 'Redirection en cours...',
    category: 'auth',
    lastModified: new Date().toISOString(),
  },
  // Golf-specific terms
  {
    id: '176',
    key: 'golf.golfers',
    en: 'Golfers',
    fr: 'Golfeurs',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '177',
    key: 'golf.teeSheet',
    en: 'Tee Sheet',
    fr: 'Feuille de départ',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '178',
    key: 'golf.players',
    en: 'players',
    fr: 'joueurs',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '179',
    key: 'golf.golferManagement',
    en: 'Golfer Management',
    fr: 'Gestion des Golfeurs',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '180',
    key: 'golf.addGolfer',
    en: 'Add Golfer',
    fr: 'Ajouter un Golfeur',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '181',
    key: 'golf.name',
    en: 'Name',
    fr: 'Nom',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '182',
    key: 'golf.handicap',
    en: 'Handicap',
    fr: 'Handicap',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '183',
    key: 'golf.teeSheetManagement',
    en: 'Tee Sheet Management',
    fr: 'Gestion de la Feuille de Départ',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '184',
    key: 'golf.bulkAssign',
    en: 'Bulk Assign',
    fr: 'Attribution en Bloc',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '185',
    key: 'golf.generateTimes',
    en: 'Generate Times',
    fr: 'Générer les Horaires',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '186',
    key: 'golf.bulkAssignment',
    en: 'Bulk Assignment',
    fr: 'Attribution en Bloc',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '187',
    key: 'golf.course',
    en: 'Course',
    fr: 'Parcours',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '188',
    key: 'golf.startingHole',
    en: 'Starting Hole',
    fr: 'Trou de départ',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '189',
    key: 'golf.startTime',
    en: 'Start Time',
    fr: 'Heure de départ',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '190',
    key: 'golf.interval',
    en: 'Interval (min)',
    fr: 'Intervalle (min)',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '191',
    key: 'golf.applyToSelected',
    en: 'Apply to Selected',
    fr: 'Appliquer aux sélectionnés',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '192',
    key: 'golf.teeTime',
    en: 'Tee Time',
    fr: 'Heure de départ',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '193',
    key: 'golf.hole',
    en: 'Hole',
    fr: 'Trou',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '194',
    key: 'golf.group',
    en: 'Group',
    fr: 'Groupe',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '195',
    key: 'golf.golfer',
    en: 'Golfer',
    fr: 'Golfeur',
    category: 'golf',
    lastModified: new Date().toISOString(),
  },
  {
    id: '196',
    key: 'competition.eventManagement',
    en: 'Event Management',
    fr: 'Gestion d\'Événement',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '197',
    key: 'competition.leaderboard',
    en: 'Leaderboard',
    fr: 'Classement',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '198',
    key: 'bracket.teams1to8',
    en: 'Teams 1-8',
    fr: 'Équipes 1-8',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '199',
    key: 'bracket.teams9to16',
    en: 'Teams 9-16',
    fr: 'Équipes 9-16',
    category: 'competition',
    lastModified: new Date().toISOString(),
  },
  {
    id: '200',
    key: 'common.contact',
    en: 'Contact',
    fr: 'Contact',
    category: 'common',
    lastModified: new Date().toISOString(),
  },
];

// Translation service class
export class TranslationService {
  private translations: Map<string, Translation> = new Map();
  private currentLocale: 'en' | 'fr' = 'fr';

  constructor() {
    this.loadStoredLocale();
    this.loadTranslations();
  }

  private loadStoredLocale() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('preferred_locale');
      if (stored === 'en' || stored === 'fr') {
        this.currentLocale = stored;
      }
    }
  }

  private loadTranslations() {
    // Check if running in browser
    if (typeof window !== 'undefined') {
      // In a real app, this would load from localStorage or API
      const stored = localStorage?.getItem('translations');
      if (stored) {
        try {
          const parsedTranslations: Translation[] = JSON.parse(stored);
          parsedTranslations.forEach(t => this.translations.set(t.key, t));
        } catch (e) {
          console.warn('Failed to load stored translations, using defaults');
          this.loadDefaults();
        }
      } else {
        this.loadDefaults();
      }
    } else {
      // Server-side: just load defaults
      this.loadDefaults();
    }
  }

  private loadDefaults() {
    DEFAULT_TRANSLATIONS.forEach(t => this.translations.set(t.key, t));
  }

  setLocale(locale: 'en' | 'fr') {
    this.currentLocale = locale;
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred_locale', locale);
    }
    this.notifyListeners();
  }

  private notifyListeners() {
    // Trigger a custom event to notify components of locale changes
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('localeChanged', { detail: this.currentLocale }));
    }
  }

  getLocale() {
    return this.currentLocale;
  }

  t(key: string, fallback?: string): string {
    const translation = this.translations.get(key);
    if (translation) {
      return this.currentLocale === 'fr' ? translation.fr : translation.en;
    }
    return fallback || key;
  }

  getAllTranslations(): Translation[] {
    return Array.from(this.translations.values());
  }

  getTranslationsByCategory(category: string): Translation[] {
    return this.getAllTranslations().filter(t => t.category === category);
  }

  updateTranslation(key: string, updates: Partial<Translation>): boolean {
    const existing = this.translations.get(key);
    if (existing) {
      const updated = { 
        ...existing, 
        ...updates, 
        lastModified: new Date().toISOString() 
      };
      this.translations.set(key, updated);
      this.saveTranslations();
      return true;
    }
    return false;
  }

  addTranslation(translation: Omit<Translation, 'id' | 'lastModified'>): string {
    const id = Date.now().toString();
    const newTranslation: Translation = {
      ...translation,
      id,
      lastModified: new Date().toISOString(),
    };
    this.translations.set(translation.key, newTranslation);
    this.saveTranslations();
    return id;
  }

  deleteTranslation(key: string): boolean {
    const success = this.translations.delete(key);
    if (success) {
      this.saveTranslations();
    }
    return success;
  }

  private saveTranslations() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('translations', JSON.stringify(this.getAllTranslations()));
    }
  }

  exportTranslations(): string {
    return JSON.stringify(this.getAllTranslations(), null, 2);
  }

  importTranslations(jsonData: string): boolean {
    try {
      const translations: Translation[] = JSON.parse(jsonData);
      this.translations.clear();
      translations.forEach(t => this.translations.set(t.key, t));
      this.saveTranslations();
      return true;
    } catch (e) {
      console.error('Failed to import translations:', e);
      return false;
    }
  }
}

// Global translation service instance
export const translationService = new TranslationService();

// React hook for translations
export function useTranslation() {
  const [locale, setLocaleState] = React.useState<'en' | 'fr'>(translationService.getLocale());

  React.useEffect(() => {
    const handleLocaleChange = (event: CustomEvent) => {
      setLocaleState(event.detail);
    };

    window.addEventListener('localeChanged', handleLocaleChange as EventListener);
    return () => {
      window.removeEventListener('localeChanged', handleLocaleChange as EventListener);
    };
  }, []);

  const setLocale = React.useCallback((newLocale: 'en' | 'fr') => {
    translationService.setLocale(newLocale);
  }, []);

  const t = React.useCallback((key: string, fallback?: string) => {
    return translationService.t(key, fallback);
  }, [locale]); // Re-run when locale changes

  return {
    t,
    locale,
    setLocale,
  };
}