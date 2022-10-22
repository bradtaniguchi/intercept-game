import {
  BoardCellType,
  BoardGrid,
  BoardX,
  BoardY,
  getBoardLocationString,
} from '@intercept-game/game';
import { GameBoardHandlers } from '../../models/game-board-handlers';
import { GameBoardCell } from '../game-board-cell/game-board-cell';

export interface GameBoardGridProps {
  /**
   * The board-grid data, that represents what is shown
   * in each cell.
   *
   */
  boardGrid: BoardGrid<BoardCellType>;

  /**
   * Global game-action handlers. These are called from individual cells
   * for specific actions. All cells in the game-board will use the same
   * handlers.
   */
  handlers: GameBoardHandlers;
}

/**
 * The game board instance. The primary top level component
 * used to manage the game state.
 *
 * This component may change in the future, but generally is used
 * to render the UI to the user, but not manage any of the state itself.
 *
 * The state should be handled by the parent component.
 */
export function GameBoardGrid(props: GameBoardGridProps) {
  const { boardGrid } = props;

  return (
    <div>
      {boardGrid.map((row, y) =>
        row.map((_, x) => (
          <GameBoardCell
            key={getBoardLocationString({
              x: BoardX(x),
              y: BoardY(y),
            })}
            x={BoardX(x)}
            y={BoardY(y)}
            // TODO: change the following to be loaded from the game-state.
            boardCellType={boardGrid[y][x]}
            boardHeight="ground"
            direction="north"
          />
        ))
      )}
    </div>
  );
}
