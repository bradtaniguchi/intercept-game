import { DefensiveCard, OffensiveCard } from '../card';
import { PlaneId } from '../plane/plane-id';
import { PlayerId } from '../player';
import { GameInterceptEventId } from './game-intercept-event-id';

/**
 * An intercept event is triggered by an attacking aircraft against
 * an enemy in-flight aircraft. This triggers an "intercept" event.
 *
 * These generally occur after a plane moves, but could be executed **before**
 * a move but this is unlikely.
 *
 * **note** its possible only sub-parts of this interface are used to transfer
 * data between the client-sides.
 */
export interface GameInterceptEvent {
  /**
   * The id of the GameInterceptEvent.
   */
  id: GameInterceptEventId;

  /**
   * The attacking plane+player+card
   */
  attacker: {
    plane: PlaneId;
    player: PlayerId;
    /**
     * The offensive card used.
     */
    card: OffensiveCard;
  };

  /**
   * The defending plane+player+card
   */
  defender: {
    plane: PlaneId;
    player: PlayerId;
    /**
     * The defensive card used, or none if none was available/used
     */
    card?: DefensiveCard;
  };
}
