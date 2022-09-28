import { BoardCellType, BoardHeight } from '@intercept-game/game';
import { Direction } from '@mui/material';

/**
 * Returns the icon for the given cell-type.
 *
 * Internally will calculate which type of icon can be returned for the
 * given params.
 */
export function getIcon(params: GetIconParams) {
  const { boardCellType } = params;
  return (
    (
      {
        empty: {},
        'can-move': {},
        aa: {},
        plane: {},
        tombstone: {},
      } as Record<BoardCellType, unknown>
    )[boardCellType] || null
  );
}

/**
 * General type params for the `getIcon` function.
 */
export type GetIconParams =
  | GetIconForEmpty
  | GetIconForCanMove
  | GetIconForPlane
  | GetIconForAA
  | GetIconForTombstone;

/**
 * Base type all other `GetIconParams` objects
 * inherit from.
 */
export interface GetIconBase {
  /**
   * The type of the cell. Used to determine the other types
   */
  boardCellType: BoardCellType;
}

/**
 * Params for the situation where we want to get the icon
 * for an empty board-cell-type.
 *
 * This empty type is used to display empty squares.
 */
export interface GetIconForEmpty extends GetIconBase {
  boardCellType: 'empty';
}

/**
 * Params for the situation where the user is in "move" mode and can
 * move to this cell.
 */
export interface GetIconForCanMove extends GetIconBase {
  boardCellType: 'can-move';
}

/**
 * Params for the situation where we want to get the icon
 * for a plane board-cell-type. The plane is the only icon that
 * requires special rotational logic.
 */
export interface GetIconForPlane extends GetIconBase {
  boardCellType: 'plane';
  /**
   * The direction the plane is facing
   */
  direction: Direction;
  /**
   * The "height" the plane is at. Either on the ground for
   * non-flying planes, or in the air for planes that are in flight.
   */
  boardHeight: BoardHeight;
}

/**
 * Params for the situation where we want to get the icon
 * for an AA board-cell-type.
 *
 * AA icons are static and are used to protect the base based on random chance.
 * This is slightly different than the original game which allowed the player
 * to configure the placement of their AA.
 *
 * In this version the AA is **always** available and continually provides a 50%
 * chance of downing the enemy plane. This makes base attacks more dangerous, and
 * risky.
 */
export interface GetIconForAA extends GetIconBase {
  boardCellType: 'aa';
}

/**
 * Params for the situation where we want to get the icon
 * for a tombstone board-cell-type.
 *
 * This wasn't available in the previous version of the game.
 */
export interface GetIconForTombstone extends GetIconBase {
  boardCellType: 'tombstone';
}
