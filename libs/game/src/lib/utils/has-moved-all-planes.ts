import { GameTurn } from '../models/game-session/game-turn';
import { PlaneId } from '../models/plane/plane-id';

/**
 * Returns if the player for the given turn has moved
 * all their planes. This should automatically trigger
 * the next "phase" checks to see if the player can attack
 * anything. If not then their turn is essentially over automatically.
 */
export const hasMovedAllPlanes = ({ turn }: { turn: GameTurn }): boolean => {
  const movedPlanes = new Set<PlaneId>();
  for (const move of turn.moves) {
    movedPlanes.add(move.plane);

    // A user can only moved 2 of their own planes for a given turn.
    if (movedPlanes.size >= 2) return true;

    // TODO: perform other checks
  }

  return false;
};
