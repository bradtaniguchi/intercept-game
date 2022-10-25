/**
 * Type that represents a PlayerId.
 *
 * Unlike other ids, this id should be generated externally using other systems
 */
export type PlayerId = string & { readonly brand: unique symbol };

/**
 * Function that can be used to create a PlayerId
 */
export const PlayerId = (id: string): PlayerId => id as PlayerId;

/**
 * Returns if the given id is a valid player-id
 *
 * **note** due to the abstraction of how this id is generated
 * or provided, this isn't as strict as other type-guards.
 */
export const isPlayerId = (id: unknown): id is PlayerId =>
  typeof id === 'string';
