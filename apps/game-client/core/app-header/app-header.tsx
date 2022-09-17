import { useUser } from '@auth0/nextjs-auth0';
import { useLogger } from '@intercept-game/common-react';
import { Header as GameHeader } from '@intercept-game/game-react';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

/**
 * App Header, provides the auth user to the actual header implementation
 * from game-react.
 */
export function AppHeader() {
  const { user, isLoading } = useUser();

  const { query } = useRouter();
  const { q: initSearchQuery } = query;

  const logger = useLogger(useMemo(() => ({ prefix: '[AppHeader] ' }), []));

  const searchQuery = Array.isArray(initSearchQuery) ? '' : initSearchQuery;

  logger.log({ searchQuery, initSearchQuery, query });

  return (
    <GameHeader user={user} userLoading={isLoading} searchQuery={searchQuery} />
  );
}
