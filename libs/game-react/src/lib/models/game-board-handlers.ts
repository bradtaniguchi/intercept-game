import { BoardLocation, OffensiveCard, Plane } from '@intercept-game/game';

/**
 * Map of action handlers passed down to each cell from the
 * game-board itself.
 */
export interface GameBoardHandlers {
  /**
   * Action Handler for when the user hovers over a given cell.
   * This primarily is to show a tooltip for the given cell and possible context.
   *
   * **NOTE** I'm not sure about keeping this one.
   */
  onHover: (params: { cell: BoardLocation }) => void;

  /**
   * Action Handler for when the user selects an unmoved plane.
   * This can initiate the "intercept" phase of the game, or
   * initiate the "move" phase of the game.
   *
   * Its possible for an unmoved plane to automatically attack without moving,
   * but it is rare.
   */
  onSelect: (params: { plane: Plane }) => void;

  /**
   * Action handler that is emitted when the user tries to select the enemy's
   * planes or anti-aircraft. This should only display a warning message
   * to the user that this isn't their planes.
   */
  onEnemySelect: (params: { enemyPlane: Plane }) => void;

  /**
   * Action handler that is emitted when the user finalizes a move
   * for the given plane.
   */
  onMove: (params: { plane: Plane; previousCell: BoardLocation }) => void;

  /**
   * Action handler that is emitted when the user wants to "select" a plane
   * to intercept. This will initiate the user "picking" a card to attack with
   * against the given plane.
   */
  onInterceptSelect: (params: { plane: Plane; enemyPlane: Plane }) => void;

  /**
   * Action handler that is emitted when the user chooses to "attack"
   * an enemy plane with the given card.
   */
  onIntercept: (params: {
    plane: Plane;
    enemyPlane: Plane;
    card: OffensiveCard;
  }) => void;
}
