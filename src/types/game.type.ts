import { PLAYER, DRAW } from 'src/constants/game.constants'

export type Player = (typeof PLAYER)[keyof typeof PLAYER]
export type BoardState = (Player | null)[]
export type GameResult = Player | typeof DRAW | null

export interface Score {
  xWins: number
  oWins: number
  draws: number
}

export interface SquareProps {
  value: Player | null
  onClick: () => void
}

export interface BoardProps {
  board: BoardState
  onSquareClick: (index: number) => void
}

export interface GameInfoProps {
  currentPlayer: Player
  winner: GameResult
  onReset: () => void
}

export interface ScoreHistoryProps {
  score: Score
}
