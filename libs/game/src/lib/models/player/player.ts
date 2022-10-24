import { PlayerId } from './player-id';

/**
 * A player is defined by its id, but otherwise is currently empty.
 *
 * TODO: add more properties
 */
export interface Player {
  /**
   * Unique id of the user
   */
  id: PlayerId;
}
