import { getFactionFromSquadron } from '.';
import { Direction } from '../board';
import { BoardX } from '../board/board-x';
import { BoardY } from '../board/board-y';
import { createGameMove } from '../game-session';
import { createTestPlane, updatePlaneWithMove } from './plane';
import { PlaneId } from './plane-id';

describe('updatePlaneWithMove', () => {
  test('returns same plane if given invalid move', () => {
    const plane = createTestPlane();
    const move = createGameMove({
      plane: PlaneId('otherPlaneId'),
      faction: getFactionFromSquadron(plane.squadron),
      player: plane.player,
      direction: Direction('south'),
      newLocation: {
        x: BoardX(3),
        y: BoardY(5),
      },
    });
    const updatedPlane = updatePlaneWithMove({
      plane,
      move,
    });
    expect(updatedPlane).toEqual(plane);
    expect(updatedPlane === plane).toEqual(true);
  });

  test('updates plane with direction+location updates', () => {
    const plane = createTestPlane();
    const expected = {
      direction: Direction('south'),
      newLocation: {
        x: BoardX(3),
        y: BoardY(5),
      },
    };
    const move = createGameMove({
      plane,
      faction: getFactionFromSquadron(plane.squadron),
      player: plane.player,
      ...expected,
    });
    const updatedPlane = updatePlaneWithMove({
      plane,
      move,
    });
    expect(updatedPlane).toEqual({
      ...plane,
      direction: expected.direction,
      x: expected.newLocation.x,
      y: expected.newLocation.y,
    });
  });

  // TODO: add other move-types
});
