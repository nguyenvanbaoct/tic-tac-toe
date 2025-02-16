# 🎮 Tic Tac Toe Game

A modern implementation of the classic Tic Tac Toe game built with React, TypeScript, and Tailwind CSS.

## 🚀 Technologies Used

-   React + TypeScript
-   Tailwind CSS
-   Ant Design
-   Vite

## ✨ Features

-   Two-player gameplay
-   Real-time score tracking
-   Player turn indicators
-   Game history tracking

## 💻 Prerequisites

-   Node.js (v16.0.0 or higher)
-   Yarn (v1.22.0 or higher)
-   Git

## 📥 Installation and Running

1. Clone the repository:

```bash
git clone https://github.com/nguyenvanbaoct/tic-tac-toe.git
cd tic-tac-toe
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open your browser and visit:

```bash
http://localhost:3000/
```

📁 Project Structure

src/
├── components/ # React components
│ ├── Board.tsx # Game board
│ ├── GameInfo.tsx # Game information
│ ├── ScoreHistory.tsx # Score history
│ └── Square.tsx # Square component
├── types/ # TypeScript types
│ └── game.ts # Type definitions
├── utils/ # Utility functions
│ └── gameLogic.ts # Winner calculation logic
├── constants/ # Constants
│ └── game.ts # Game constants
└── App.tsx # Main component
