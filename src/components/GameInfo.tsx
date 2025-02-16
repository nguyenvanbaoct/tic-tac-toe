import { Alert, Card } from 'antd'
import { DRAW, PLAYER } from 'src/constants/game.constants'
import { GameInfoProps } from 'src/types/game.type'

const GameInfo: React.FC<GameInfoProps> = ({ currentPlayer, winner }) => {
  const getAlertConfig = () => {
    if (winner) {
      if (winner === DRAW) {
        return {
          message: '🤝 Draw!',
          type: 'warning' as const
        }
      }
      return {
        message: `🎉 Player ${winner} wins!`,
        type: 'success' as const
      }
    }
    return {
      message: `⏳ Player ${currentPlayer}'s turn`,
      type: 'info' as const
    }
  }

  const { message, type } = getAlertConfig()

  return (
    <Card className='mb-4'>
      <div className='space-y-4'>
        <Alert message={message} type={type} showIcon className='text-center text-lg' />
        <div className='flex items-center justify-center space-x-4'>
          <div
            className={`rounded p-3 transition-colors ${currentPlayer === PLAYER.X && !winner ? 'bg-blue-100' : ''}`}
          >
            Player X
          </div>
          <span className='font-bold'>vs</span>
          <div className={`rounded p-3 transition-colors ${currentPlayer === PLAYER.O && !winner ? 'bg-red-100' : ''}`}>
            Player O
          </div>
        </div>
      </div>
    </Card>
  )
}

export default GameInfo
