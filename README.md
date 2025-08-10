# Music Player Application
<img width="1919" height="1079" alt="Screenshot 2025-08-10 170852" src="https://github.com/user-attachments/assets/adf81c3d-04bf-4de6-8bec-a70781f2a490" />
<img width="1919" height="1079" alt="Screenshot 2025-08-10 170912" src="https://github.com/user-attachments/assets/65d78126-9a51-4eb4-ac86-ae962d00bbf0" />
<img width="1919" height="1079" alt="Screenshot 2025-08-10 170929" src="https://github.com/user-attachments/assets/32425e46-9ce6-43a7-9d58-77bf70ccea33" />


A modern, web-based music player application built with Next.js and React, featuring a sleek user interface and integration with the Deezer API for music streaming.

## Features

### User Interface
- Clean and intuitive user interface with a dark theme
- Responsive design that works across different screen sizes
- Beautiful glassmorphic design elements with blur effects
- Sidebar navigation for easy access to different sections

### Music Playback
- Audio playback using HTML5 audio element
- Play/Pause functionality
- Next/Previous track controls
- Volume control with visual slider
- 30-second preview support for tracks

### Content Organization
- Browse music by different categories:
  - Top Charts
  - Artists
  - Albums
  - Songs
  - Genres
- Genre-based playlists with custom cover images
- Artist profiles with images
- Album artwork display

### Genre Exploration
- Horizontal scrolling genre grid
- Support for various genres including:
  - Lofi
  - Chill
  - Pop
  - Electronic
  - Jazz
  - Rock

### Integration
- Deezer API integration for music content
- Real-time music data fetching
- Dynamic playlist loading
- Artist and album information retrieval

## Technologies Used

- **Frontend Framework**: Next.js 15.3.4
- **UI Library**: React 19.0.0
- **Styling**: TailwindCSS 4.0
- **Icons**: Lucide React
- **API Integration**: Deezer API
- **Development Tools**: 
  - ESLint
  - PostCSS
  - TurboPack

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/abhayhonparkhe/music-player.git
cd music-player
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open the application**
Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.




## Features Implementation

### Music Player (`MusicPlayer.jsx`)
- Global audio player context for consistent playback
- Volume control with visual feedback
- Track information display
- Playback controls (play, pause, next, previous)

### Genre Navigation (`GenreGrid.jsx`)
- Infinite scrolling genre grid
- Smooth animations
- Genre-specific playlist loading

### Context Management (`PlayerContext.jsx`)
- Global state management for audio playback
- Playlist tracking
- Volume state persistence
- Audio controls coordination

## How to Use

1. **Navigation**: Use the sidebar to navigate between different sections (Home, Artists, Albums, Songs)
2. **Playback**: 
   - Click on any song to start playing
   - Use the player controls at the bottom to play/pause, skip tracks, or adjust volume
   - Browse different genres and playlists from the home page
3. **Browse Content**:
   - Explore the Top Charts section for popular tracks
   - View artist profiles in the Artists section
   - Browse albums in the Albums section
   - Access all songs in the Songs section




