# Team Matches Prototype

A comprehensive team match management system designed for golf tournaments and other team-based competitions.

## Features

### For Administrators
- **Event Setup Wizard**: Step-by-step event creation with validation
- **Template Management**: Save and reuse event configurations
- **Live Event Monitoring**: Real-time dashboard for active matches
- **Bulk Operations**: Efficient management of teams and players
- **Emergency Controls**: Override capabilities for urgent situations

### For Team Captains
- **Roster Management**: Drag-and-drop player assignment
- **Match Pairings**: Intuitive pairing editor
- **Score Entry**: Streamlined result submission
- **Player Tracking**: Confirmation status monitoring

### For Players
- **Match Confirmation**: One-click participation confirmation
- **Schedule Access**: View upcoming matches and details
- **Profile Management**: Update personal information
- **Notification Preferences**: Customize alerts

### For Spectators
- **Live Leaderboards**: Real-time match results
- **Event Information**: Schedules, venues, and formats
- **Mobile Optimized**: Responsive design for all devices

## Technology Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, Shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: NextAuth.js
- **State Management**: Zustand
- **Real-time**: Socket.io
- **Testing**: Jest, React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL 14+
- Redis (optional, for caching)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd team-matches-prototype
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. Set up the database:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard pages
│   ├── captain/           # Captain portal pages
│   ├── player/            # Player portal pages
│   ├── spectator/         # Public spectator pages
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── forms/             # Form components
│   └── layout/            # Layout components
├── lib/                   # Utility libraries
│   ├── db/                # Database configuration
│   └── auth/              # Authentication setup
├── hooks/                 # Custom React hooks
├── store/                 # State management
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## User Roles & Permissions

### Admin
- Full system access
- Event creation and management
- User management
- System configuration

### Team Captain
- Team roster management
- Match pairing setup
- Score entry for their matches
- Player communication

### Player
- Profile management
- Match confirmation
- View team information
- Receive notifications

### Spectator
- View public information
- Access live leaderboards
- No editing capabilities

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.