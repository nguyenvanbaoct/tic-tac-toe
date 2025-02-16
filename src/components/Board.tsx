import Square from 'src/components/Square'
import { BoardProps } from 'src/types/game.type'

const Board: React.FC<BoardProps> = ({ board, onSquareClick }) => (
  <div className='grid grid-cols-3 place-items-center gap-1'>
    {board.map((value, index) => (
      <Square key={index} value={value} onClick={() => onSquareClick(index)} />
    ))}
  </div>
)

export default Board
