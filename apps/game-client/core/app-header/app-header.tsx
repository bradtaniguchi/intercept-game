import { useUser } from '@auth0/nextjs-auth0';
import { Header as GameHeader } from '@intercept-game/game-react';
import { useRouter } from 'next/router';

/**
 * App Header, provides the auth user to the actual header implementation
 * from game-react.
 */
export function AppHeader() {
  const { user, isLoading } = useUser();

  const { query } = useRouter();
  const { q: initSearchQuery } = query;

  const searchQuery = Array.isArray(initSearchQuery) ? '' : initSearchQuery;

  return (
    <GameHeader user={user} userLoading={isLoading} searchQuery={searchQuery} />
  );
}
