import { GameSessionStateLive } from '../../models/game-session/game-session-state';
import {
  CalculatedGameSessionState,
  getEmptyCalculatedGameSessionState,
} from '../../models/game-session/calculated-game-session-state';
import {
  getAltFaction,
  isNorth,
  isSouth,
} from '../../models/game-session/faction';
import { updatePlaneWithMove } from '../../models/plane/plane';

/**
 * Utility function that returns the CalculatedGameState from the
 * base GameSessionState. This should be used to get the base underlying
 * state after each action made by the players.
 */
export const getCalculatedState = (
  state: GameSessionStateLive
): CalculatedGameSessionState => {
  // The current approach is designed this way to make it
  // more "debuggable"
  const calculatedState = state.moves.reduce(
    // use a named function to help with "debugability"
    function getCalculatedStateFunc(acc, move) {
      acc.currentMove = getAltFaction(move.faction);
      acc.planes = {
        north: isNorth(move.faction)
          ? acc.planes.north.map((plane) =>
              plane.id === move.plane
                ? updatePlaneWithMove({
                    move,
                    plane,
                  })
                : plane
            )
          : acc.planes.north,
        south: isSouth(move.faction)
          ? acc.planes.south.map((plane) =>
              plane.id === move.plane
                ? updatePlaneWithMove({
                    move,
                    plane,
                  })
                : plane
            )
          : acc.planes.south,
      };
      // TODO: update other properties
      return acc;
    },
    getEmptyCalculatedGameSessionState({
      ...state,
    })
  );

  return calculatedState;
};
