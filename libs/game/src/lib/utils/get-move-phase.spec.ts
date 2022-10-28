import { createGameTurn, GameTurn, GameTurnId, PlayerId } from '../models';
import { getMovePhase } from './get-move-phase';

describe('getMovePhase', () => {
  const id = GameTurnId('game-turn-id');
  const player = PlayerId('player-id');
  let turn: GameTurn;

  beforeEach(() => {
    turn = createGameTurn({
      id,
      player,
    });
  });

  test('returns in-flight for 2 planes without moves', () => {
    expect(
      getMovePhase({
        turn,
        canIntercept: false,
        planesInFlight: 2,
      })
    ).toEqual('in-flight');
  });
  test.todo('returns opponent for 2 planes with moves, with no adjacent');
  test.todo('returns in-intercept for 1 plane without moves, with adjacent');
  test.todo('returns in-intercept for 1 plane with moves, with adjacent');
  test.todo('returns in-intercept for 2 plane with moves, with adjacent');
  // TODO: add ground attack checks
});
