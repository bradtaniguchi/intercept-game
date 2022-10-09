import {
  BoardCellType,
  BoardHeight,
  BoardLocation,
  Direction,
  getBoardLocationString,
  isNonPlaneBoardCellType,
  isPlaneBoardCellType,
} from '@intercept-game/game';
import { memo } from 'react';
import { getIcon } from '../../utils';

/**
 * Props for the GameBoardCell component. Changes depending on
 * the `boardCellType` prop.
 *
 * TODO: add support for "merged" cell, which is a cell that
 * has 2 icons, will handle a few game scenarios where
 * a plane is flying "over" the cell.
 */
export type GameBoardCellProps =
  | GameBoardCellPropsPlane
  | GameBoardCellPropsOther;

export interface GameBoardCellPropsPlane extends BoardLocation {
  boardCellType: 'plane';
  /**
   * The direction the plane is facing
   */
  direction: Direction;
  /**
   * The "height" the plane is at.
   */
  boardHeight: BoardHeight;
}

/**
 * Represents the props for all game-location states **except**
 * the plane.
 */
export interface GameBoardCellPropsOther extends BoardLocation {
  boardCellType: Exclude<BoardCellType, 'plane'>;
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
  const { boardCellType } = props;

  let icon: JSX.Element | null = null;
  if (isPlaneBoardCellType(boardCellType)) {
    icon = getIcon(props as GameBoardCellPropsPlane);
  }
  if (isNonPlaneBoardCellType(boardCellType)) {
    icon = getIcon(props as GameBoardCellPropsOther);
  }
  return <div data-pos={getBoardLocationString(props)}>{icon}</div>;
});
