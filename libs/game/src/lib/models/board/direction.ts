/**
 * The 4 cardinal directions.
 */
export const DIRECTIONS = ['north', 'south', 'east', 'west'] as const;

/**
 * The type of direction.
 */
export type Direction = typeof DIRECTIONS[number];

/**
 * Function that can be used to create a Direction from a string.
 */
export const Direction = (direction: string): Direction =>
  direction as Direction;

/**
 * Type guard for directions.
 */
export const isDirection = (direction: unknown): direction is Direction =>
  typeof direction === 'string' && DIRECTIONS.includes(direction as Direction);
