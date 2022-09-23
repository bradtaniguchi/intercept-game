import {
  BoardLocation,
  Direction,
  getBoardLocationString,
} from '@intercept-game/game';
import { memo } from 'react';

/**
 * The props for the cell
 *
 * TODO: can be more specific to different kinds of cell-ui
 */
export interface GameBoardCellProps extends BoardLocation {
  /**
   * The type of what to display in the cell itself.
   * TODO: provide type
   */
  cellUI: unknown;
  /**
   * The direction to show the "UI".
   */
  direction: Direction;
}

/**
 * The board-cell is responsible for rendering the given cell-ui
 * element with the given orientation.
 *
 * It will also be responsible for basic UI interface handling for basic
 * dom events.
 */
export const GameBoardCell = memo(function GameBoardCell(
  props: GameBoardCellProps
) {
  // TODO: handle the actual display of icons
  return <div>{getBoardLocationString(props)}</div>;
});
