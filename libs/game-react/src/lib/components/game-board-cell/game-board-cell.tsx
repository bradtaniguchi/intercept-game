import {
  BoardCellType,
  BoardHeight,
  BoardLocation,
  Direction,
  getBoardLocationString,
} from '@intercept-game/game';
import { Directions } from '@mui/icons-material';
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
  // TODO: ignore plane
  boardCellType: BoardCellType;
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

  let Icon: JSX.Element | null;
  if (boardCellType === 'plane') {
    Icon = getIcon(props as GameBoardCellPropsPlane);
  }
  if (boardCellType !== 'plane') {
    Icon = getIcon(props as GameBoardCellPropsOther);
  }
  return <div>{getBoardLocationString(props)}</div>;
});
