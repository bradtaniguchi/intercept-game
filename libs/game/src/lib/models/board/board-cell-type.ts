/**
 * The list of cell-types. This represents what is actually
 * on the given board location at a given time.
 */
export const BOARD_CELL_TYPE = [
  'plane',
  'aa',
  'bones',
  'empty',
  'can-move',
] as const;

/**
 * The type of icon on the board.
 */
export type BoardCellType = typeof BOARD_CELL_TYPE[number];

/**
 * Type-guard for the `BoardCellType` type.
 * Internally uses the BOARD_CELL_TYPE array, which is
 * the basis of the type itself
 */
export const isBoardCellType = (cellType: unknown): cellType is BoardCellType =>
  typeof cellType === 'string' &&
  BOARD_CELL_TYPE.includes(cellType as BoardCellType);

/**
 * Type-guard for the `BoardCellType` type, helps narrow
 * down a board-cell to be a plane only. This board-cell
 * requires extra params. Other board-cell-types require less,
 * and currently are all the same.
 */
export const isPlaneBoardCellType = (cellType: unknown): cellType is 'plane' =>
  isBoardCellType(cellType) && cellType === 'plane';

/**
 * Type-guard for the `BoardCellType` type, helps narrow
 * down a board-cell to be anything but the plane type.
 *
 * All board-cells should be of the same complexity.
 */
export const isNonPlaneBoardCellType = (
  cellType: unknown
): cellType is Exclude<BoardCellType, 'plane'> =>
  isBoardCellType(cellType) && cellType !== 'plane';
