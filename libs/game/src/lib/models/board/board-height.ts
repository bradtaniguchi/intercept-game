/**
 * The list of board heights, represented as the BoardHeight type.
 * Used primarily for validation, see `BoardHeight` for type.
 *
 * **note** all "ground" icons over-ride each other. Its not possible
 * to have multiple icons in the same square, **besides** the situation
 * where a plane flies over a friendly AA, or a plane flies over a
 * tombstone.
 *
 * In these situations the icon will need to "shrink" on the board, or
 * present some sort of overlay.
 */
export const BOARD_HEIGHTS = ['ground', 'in-flight'] as const;

/**
 * The height on the board, there are only a few "heights" supported.
 */
export type BoardHeight = typeof BOARD_HEIGHTS[number];

/**
 * Type-guard for the `BoardHeight` type.
 * Internally uses the `BOARD_HEIGHTS` array, which is the basis
 * of the type itself.
 */
export const isBoardHeight = (height: unknown): height is BoardHeight =>
  typeof height === 'string' && BOARD_HEIGHTS.includes(height as BoardHeight);
