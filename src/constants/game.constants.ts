export const PLAYER = {
  X: 'X',
  O: 'O'
} as const

export const DRAW = 'draw'

export const SQUARE_STYLES = {
  [PLAYER.X]: 'bg-blue-50 text-blue-600',
  [PLAYER.O]: 'bg-red-50 text-red-600',
  EMPTY: 'hover:bg-gray-50'
} as const
