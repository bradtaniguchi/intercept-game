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
