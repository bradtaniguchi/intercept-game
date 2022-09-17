import {
  HeaderSearch,
  HeaderSearchProps,
  HeaderUser,
  HeaderUserProps,
  useLogger,
} from '@intercept-game/common-react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useCallback, useMemo, useState } from 'react';

export interface HeaderProps extends HeaderUserProps, HeaderSearchProps {}

/**
 * The header is displayed at the top of every page.
 *
 * This is based on the header-bar from common-react, but specific
 * to this app.
 */
export function Header(props: HeaderProps) {
  const { searchQuery, user, userLoading } = props;

  const logger = useLogger(
    useMemo(
      () => ({
        prefix: '[Header] ',
      }),
      []
    )
  );

  const [isSearching, setIsSearching] = useState(!!searchQuery);

  const onCloseHandle = useCallback(() => setIsSearching(false), []);
  const onShowSearchHandle = useCallback(() => setIsSearching(true), []);

  const onSearchHandle = useCallback(
    (value: string) => {
      logger.log('on-search-handle: ', { value });
    },
    [logger]
  );

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Typography
                component="div"
                sx={{
                  flexGrow: 1,
                  marginRight: '16px',
                }}
              >
                {(() => {
                  if (!user) return null;
                  if (isSearching)
                    return (
                      <HeaderSearch
                        searchQuery={searchQuery}
                        onClose={onCloseHandle}
                        onSearch={onSearchHandle}
                      />
                    );
                  return (
                    <IconButton
                      size="small"
                      edge="start"
                      color="inherit"
                      aria-label="Search"
                      sx={{ mr: 2 }}
                      onClick={onShowSearchHandle}
                    >
                      <SearchIcon />
                    </IconButton>
                  );
                })()}
              </Typography>
              <Box>
                {user ? (
                  <HeaderUser user={user} userLoading={userLoading} />
                ) : (
                  <Button
                    href="/api/auth/login"
                    color="secondary"
                    variant="contained"
                  >
                    Login
                  </Button>
                )}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
