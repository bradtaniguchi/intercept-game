import { render } from '@testing-library/react';

import GameReact from './game-react';

describe('GameReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameReact />);
    expect(baseElement).toBeTruthy();
  });
});
