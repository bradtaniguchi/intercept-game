import { Header as GameHeader } from '@intercept-game/game-react';
import { useUser } from '@auth0/nextjs-auth0';

/**
 * App Header, provides the auth user to the actual header implementation
 * from game-react.
 */
export function AppHeader() {
  const { user, isLoading } = useUser();

  return <GameHeader user={user} userLoading={isLoading} />;
}
