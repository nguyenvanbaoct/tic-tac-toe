import { PLAYER, SQUARE_STYLES } from 'src/constants/game.constants'
import { SquareProps } from 'src/types/game.type'

const Square = (props: SquareProps) => {
  const { value, onClick } = props
  const getSquareStyles = () => {
    if (value === PLAYER.X) return SQUARE_STYLES[PLAYER.X]
    if (value === PLAYER.O) return SQUARE_STYLES[PLAYER.O]
    return SQUARE_STYLES.EMPTY
  }
  return (
    <button
      className={`flex h-20 w-20 items-center justify-center rounded-lg border text-2xl font-bold transition-all duration-300
        ${getSquareStyles()}
      `}
      onClick={onClick}
      disabled={value !== null}
    >
      {value}
    </button>
  )
}

Square.displayName = 'Square'
export default Square
