import { Button, message } from 'antd'
import { useCallback, useState } from 'react'
import Board from './components/Board'
import GameInfo from './components/GameInfo'
import ScoreHistory from './components/ScoreHistory'
import { BoardState, GameResult, Player, Score } from './types/game.type'
import { calculateWinner } from './utils/gameLogic'
import { DRAW, PLAYER } from 'src/constants/game.constants'

const App: React.FC = () => {
  const [board, setBoard] = useState<BoardState>(() => Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
  const [score, setScore] = useState<Score>(() => ({
    xWins: 0,
    oWins: 0,
    draws: 0
  }))

  const winner = calculateWinner(board)

  const updateScore = useCallback((result: GameResult) => {
    setScore((prev) => ({
      ...prev,
      xWins: result === PLAYER.X ? prev.xWins + 1 : prev.xWins,
      oWins: result === PLAYER.O ? prev.oWins + 1 : prev.oWins,
      draws: result === DRAW ? prev.draws + 1 : prev.draws
    }))
  }, [])

  const handleSquareClick = useCallback(
    (index: number) => {
      if (board[index] || winner) return

      const newBoard = [...board]
      newBoard[index] = currentPlayer
      setBoard(newBoard)

      const newWinner = calculateWinner(newBoard)

      if (newWinner) {
        updateScore(newWinner)
        message.success(newWinner === DRAW ? "It's a draw!" : `Player ${newWinner} wins!`)
      } else {
        setCurrentPlayer((current) => (current === PLAYER.X ? PLAYER.O : PLAYER.X))
      }
    },
    [board, currentPlayer, winner, updateScore]
  )

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer('X')
  }, [])

  return (
    <div className='mx-auto max-w-2xl p-4'>
      <h1 className='mb-3 text-center text-3xl font-bold'>Tic Tac Toe</h1>

      <GameInfo currentPlayer={currentPlayer} winner={winner} onReset={resetGame} />

      <Board board={board} onSquareClick={handleSquareClick} />

      <Button
        className='mt-4 w-full bg-blue-500 text-lg text-white transition-colors duration-300 hover:bg-blue-600'
        onClick={resetGame}
      >
        Restart Game
      </Button>

      <ScoreHistory score={score} />
    </div>
  )
}

export default App
