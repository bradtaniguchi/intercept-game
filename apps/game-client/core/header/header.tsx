import { HeaderBar } from '@intercept-game/common-react';

/**
 * Primary header component
 */
export function Header({ children }: { children: JSX.Element }) {
  return (
    <header>
      <HeaderBar hideMenu={true}>{children}</HeaderBar>
    </header>
  );
}
