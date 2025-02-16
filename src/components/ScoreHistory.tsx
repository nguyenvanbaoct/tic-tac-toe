import { Card } from 'antd'
import { ScoreHistoryProps } from 'src/types/game.type'

const ScoreHistory: React.FC<ScoreHistoryProps> = ({ score }) => (
  <Card title='Score History' className='mt-4 border-2 transition-all duration-300 hover:shadow-lg'>
    <div className='space-y-4'>
      {/* Player X Score */}
      <div className='flex items-center justify-between rounded-lg bg-blue-50 p-3 transition-colors hover:bg-blue-100'>
        <span className='font-semibold text-blue-700'>Player X wins</span>
        <span className='rounded-full bg-blue-200 px-3 py-1 text-xl font-bold text-blue-600'>{score.xWins}</span>
      </div>

      {/* Player O Score */}
      <div className='flex items-center justify-between rounded-lg bg-red-50 p-3 transition-colors hover:bg-red-100'>
        <span className='font-semibold text-red-700'>Player O wins</span>
        <span className='rounded-full bg-red-200 px-3 py-1 text-xl font-bold text-red-600'>{score.oWins}</span>
      </div>

      {/* Draws */}
      <div className='flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100'>
        <span className='font-semibold text-gray-700'>Draws</span>
        <span className='rounded-full bg-gray-200 px-3 py-1 text-xl font-bold text-gray-600'>{score.draws}</span>
      </div>
    </div>
  </Card>
)

export default ScoreHistory
