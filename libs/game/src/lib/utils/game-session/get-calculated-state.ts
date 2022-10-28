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
import { getPlayerFaction } from '../get-player-faction';
import { getMovePhase } from '../get-move-phase';

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
  const calculatedState = state.turns.reduce(
    // use a named function to help with "debugability"
    function getCalculatedStateFunc(acc, turn) {
      const { moves, intercepts, player } = turn; // TODO: add other logic
      const faction = getPlayerFaction({ player, gameSessionState: state });
      acc.currentMove = getAltFaction(faction);

      // use named function to help with "debugability"
      moves.forEach(function forEachMove(move) {
        acc.planes = {
          north: isNorth(faction)
            ? acc.planes.north.map((plane) =>
                plane.id === move.plane
                  ? updatePlaneWithMove({
                      move,
                      plane,
                    })
                  : plane
              )
            : acc.planes.north,
          south: isSouth(faction)
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

        intercepts.forEach(function forEachIntercept() {
          // TODO:
          // for each intercept, determine the result, and update the plane(s)
        });
        acc.movePhase = getMovePhase({ turn });
      });
      // TODO: update other properties
      return acc;
    },
    getEmptyCalculatedGameSessionState({
      ...state,
    })
  );

  return calculatedState;
};
