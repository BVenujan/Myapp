# Lanka City: Shadows of the Island

An original open-world action-adventure game set in a fictional Sri Lankan city.

## Features

- Fully explorable 3D open world with 10 distinct locations
- Three language support: Tamil, Sinhala, English
- 30+ original missions with diverse gameplay
- Complete vehicle system with customization
- Original cheat code system
- Police and wanted level system
- Functional economy and character progression
- Day/night cycles and dynamic weather
- Original story campaign with multiple endings
- Save/load system with browser localStorage

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start local server
npm start
```

Then open your browser to `http://localhost:8000`

### Controls

- **W, A, S, D** - Move
- **Shift** - Sprint
- **Space** - Jump
- **E** - Enter/Exit Vehicle
- **F** - Interact
- **M** - Open Map
- **J** - Mission List
- **C** - Cheat Console
- **Esc** - Pause
- **Mouse** - Camera Control

### Cheat Codes

- `LANKAHEALTH` - Restore health
- `ISLANDCASH` - Add money
- `TUKTUKNOW` - Spawn tuk-tuk
- `CLEANSKY` - Clear weather
- `MOONLIGHT` - Night time
- `DAYBREAK` - Day time
- `QUICKFEET` - Faster running
- `SUPERHOP` - Super jump
- `FIXMYRIDE` - Repair vehicle
- `CALMDOWN` - Reduce wanted level

## Project Structure

```
src/
├── index.js              # Entry point
├── core/                 # Core game engine
├── player/               # Player character
├── vehicles/             # Vehicle system
├── world/                # World and environment
├── missions/             # Mission system
├── ai/                   # AI and NPC behavior
├── police/               # Police and wanted system
├── economy/              # Economy and rewards
├── cheats/               # Cheat code system
├── audio/                # Audio manager
├── ui/                   # User interface
├── localization/         # Language support
└── save/                 # Save/load system

assets/
├── models/               # 3D models
├── textures/             # Textures
├── audio/                # Sound and music
└── fonts/                # Custom fonts

locales/
├── en.json               # English
├── ta.json               # Tamil
└── si.json               # Sinhala
```

## Development

The game is built with:
- **HTML5 Canvas** for rendering
- **Three.js** for 3D graphics
- **Web Audio API** for sound
- **localStorage** for saves
- **JavaScript ES6+** for logic

## License

MIT
