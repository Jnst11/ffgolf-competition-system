# Team Matches - Wireframes & UI Mockups

## Admin Dashboard - Event Setup Wizard

```
┌─────────────────────────────────────────────────────────────────┐
│ Team Matches Admin                              [Profile] [Logout] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Event Setup Wizard                                           │
│   ═══════════════════                                          │
│                                                                 │
│   Step 2 of 5: Regions & Sections                              │
│   ●━━━●━━━○━━━○━━━○                                              │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │ Region Configuration                                   │   │
│   │                                                       │   │
│   │ Region Name: [North Division               ]          │   │
│   │ Sections:    [4                          ] sections   │   │
│   │                                                       │   │
│   │ ┌─ Section A ─────────────────────────────────────┐   │   │
│   │ │ Teams: [8 ] Max Players: [6 ]                 │   │   │
│   │ │ Format: [Single Elimination ▼]                │   │   │
│   │ └─────────────────────────────────────────────────┘   │   │
│   │                                                       │   │
│   │ ┌─ Section B ─────────────────────────────────────┐   │   │
│   │ │ Teams: [8 ] Max Players: [6 ]                 │   │   │
│   │ │ Format: [Round Robin      ▼]                  │   │   │
│   │ └─────────────────────────────────────────────────┘   │   │
│   │                                                       │   │
│   │ [+ Add Section]  [+ Add Region]                      │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ⚠️  Validation: Total teams (16) must be divisible by format   │
│                                                                 │
│   [◄ Previous]              [Save Draft]         [Next ►]      │
└─────────────────────────────────────────────────────────────────┘
```

## Team Captain - Roster Management

```
┌─────────────────────────────────────────────────────────────────┐
│ Team Portal - Eagles                               [Profile] [Help] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Roster Management - Spring Championship 2024                   │
│ ══════════════════════════════════════════                     │
│                                                                 │
│ ┌─ Current Roster ─────────────────┐ ┌─ Available Players ───┐ │
│ │                                 │ │                       │ │
│ │ Position 1: John Smith ✓        │ │ 🔍 [Search players...] │ │
│ │ Position 2: Mike Jones ✓        │ │                       │ │
│ │ Position 3: [Drop here]         │ │ ┌─ Sarah Wilson ────┐  │ │
│ │ Position 4: Dave Brown ⚠️        │ │ │ Handicap: 12.3   │  │ │
│ │ Position 5: [Drop here]         │ │ │ Status: Available│  │ │
│ │ Position 6: [Drop here]         │ │ │ [Drag to assign] │  │ │
│ │                                 │ │ └─────────────────────┘  │ │
│ │ Status: 3/6 players assigned    │ │                       │ │
│ │ ⚠️  Dave Brown: Handicap too high │ │ ┌─ Tom Anderson ───┐  │ │
│ │                                 │ │ │ Handicap: 8.7    │  │ │
│ └─────────────────────────────────┘ │ │ Status: Confirmed│  │ │
│                                     │ │ [Drag to assign] │  │ │
│ Upcoming Matches:                   │ └─────────────────────┘  │ │
│ • vs Hawks    - May 15, 2024       │                       │ │
│ • vs Falcons  - May 22, 2024       │ ┌─ Lisa Green ──────┐  │ │
│                                     │ │ Handicap: 15.2   │  │ │
│ [Send Invitations] [Save Changes]   │ │ Status: Pending  │  │ │
│                                     │ │ [Drag to assign] │  │ │
│                                     │ └─────────────────────┘  │ │
│                                     └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Player - Match Confirmation

```
┌─────────────────────────────────────────────────────────────────┐
│ Player Portal                                  [Notifications] [⚙️] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Match Invitations                                              │
│ ═════════════════                                              │
│                                                                 │
│ ┌─ Eagles vs Hawks - May 15, 2024 ─────────────────────────┐    │
│ │                                                         │    │
│ │ 📅 Tuesday, May 15 at 10:00 AM                         │    │
│ │ 📍 Riverside Golf Club, Course A                       │    │
│ │ ⛳ Format: Singles Match Play                           │    │
│ │                                                         │    │
│ │ Your Status: [✅ Confirmed] [❌ Cannot Play]             │    │
│ │                                                         │    │
│ │ Team Status: 4/6 players confirmed                     │    │
│ │                                                         │    │
│ │ [View Course Info] [Update Availability]               │    │
│ └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│ ┌─ Eagles vs Falcons - May 22, 2024 ───────────────────────┐    │
│ │                                                         │    │
│ │ 📅 Tuesday, May 22 at 2:00 PM                          │    │
│ │ 📍 Oakwood Country Club, Course B                      │    │
│ │ ⛳ Format: Foursomes                                    │    │
│ │                                                         │    │
│ │ Your Status: [✅ Confirm] [❌ Cannot Play]               │    │
│ │                                                         │    │
│ │ Team Status: 2/6 players confirmed                     │    │
│ │ ⚠️  Response needed by May 18                          │    │
│ │                                                         │    │
│ │ [View Course Info] [Confirm Participation]             │    │
│ └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│ Quick Actions:                                                  │
│ [Update Profile] [Emergency Contact] [Notification Settings]   │
└─────────────────────────────────────────────────────────────────┘
```

## Live Event - Captain Match Management

```
┌─────────────────────────────────────────────────────────────────┐
│ Live Match: Eagles vs Hawks                           [🔄 Auto-sync] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Match Pairings - Round 1                           Status: Active │
│ ═══════════════════════                                        │
│                                                                 │
│ Eagles Lineup          │ vs │ Hawks Lineup                     │
│ ─────────────────────────────────────────────────────────────── │
│                        │    │                                  │
│ Match 1 (Singles)      │    │ Match 1 (Singles)                │
│ John Smith (HC: 8.2)   │ vs │ Bob Wilson (HC: 9.1)            │
│ Status: Playing Hole 7  │    │ Eagles Lead 2&1                 │
│                        │    │                                  │
│ Match 2 (Singles)      │    │ Match 2 (Singles)                │
│ [Select Player ▼]      │ vs │ Alice Green (HC: 12.5)          │
│ Mike Jones ✓           │    │ Status: Not Started             │
│ Dave Brown             │    │                                  │
│ Tom Anderson           │    │                                  │
│                        │    │                                  │
│ Match 3 (Foursomes)    │    │ Match 3 (Foursomes)             │
│ Sarah Wilson +         │ vs │ Chris Lee +                     │
│ Lisa Green             │    │ Pat Taylor                      │
│ Status: All Square H5   │    │                                 │
│                        │    │                                  │
│ ────────────────────── │    │ ──────────────────────────────  │
│ Team Score: 1.5        │    │ Team Score: 0.5                 │
│                                                                 │
│ [Save Pairings] [Submit Scores] [Request Official]             │
│                                                                 │
│ Last Updated: 2:34 PM - Auto-save enabled ✅                    │
└─────────────────────────────────────────────────────────────────┘
```

## Spectator - Live Leaderboard

```
┌─────────────────────────────────────────────────────────────────┐
│ Spring Championship 2024 - Live Results          [📱 Get App] [🔔] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ 🏆 Division 1 Leaderboard                      [All] [♂] [♀] [Jr] │
│ ══════════════════════                                         │
│                                                                 │
│ Filters: [🏢 All Teams ▼] [📅 Round 2 ▼] [📊 Details ▼]         │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Pos │ Team        │ Played │ Won │ Lost │ Points │ Status  │ │
│ │─────│─────────────│────────│─────│──────│────────│─────────│ │
│ │  1  │ 🦅 Eagles    │   2    │  2  │  0   │   4    │ 🟢 Live │ │
│ │  2  │ 🦌 Hawks     │   2    │  1  │  1   │   2    │ Complete│ │
│ │  3  │ 🦅 Falcons   │   1    │  1  │  0   │   2    │ Waiting │ │
│ │  4  │ 🐺 Wolves    │   2    │  0  │  2   │   0    │ Complete│ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ 🔴 Live Match: Eagles vs Falcons                               │
│ Current Score: Eagles 2.5 - 1.5 Falcons                       │
│ [📺 Watch Live] [📊 Match Details]                              │
│                                                                 │
│ Upcoming:                                                       │
│ • Hawks vs Wolves - 4:00 PM                                   │
│                                                                 │
│ Recent Results:                                                 │
│ • Eagles def. Hawks 3-2                                       │
│ • Falcons def. Wolves 4-1                                     │
│                                                                 │
│ [🔄 Refresh] [📋 Full Results] [📅 Schedule] [ℹ️ Event Info]      │
└─────────────────────────────────────────────────────────────────┘
```

## Mobile Captain - Quick Score Entry

```
┌─────────────────────────────────┐
│ ⬅️  Match: Eagles vs Hawks       │
├─────────────────────────────────┤
│                                 │
│ Quick Score Entry               │
│ ═════════════════               │
│                                 │
│ Match 1: Smith vs Wilson        │
│ ┌─────────────────────────────┐ │
│ │ Result: [Eagles Won ▼]     │ │
│ │                             │ │
│ │ ○ Eagles Won 3&2            │ │
│ │ ○ Hawks Won 2&1             │ │
│ │ ○ Halved                    │ │
│ │ ○ Match Not Finished        │ │
│ └─────────────────────────────┘ │
│                                 │
│ Match 2: Jones vs Green         │
│ Result: [Select Result ▼]      │
│                                 │
│ Match 3: Wilson/Green vs        │
│          Lee/Taylor             │
│ Result: [Halved ✓]             │
│                                 │
│ ─────────────────────────────── │
│ Running Total:                  │
│ Eagles: 1.5  |  Hawks: 0.5     │
│                                 │
│ [💾 Save] [✅ Submit All]        │
│                                 │
│ Auto-saved 3 seconds ago ✅      │
└─────────────────────────────────┘
```