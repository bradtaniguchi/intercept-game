import { UserProfile } from '@auth0/nextjs-auth0';
import {
  CircularProgress,
  Tooltip,
  IconButton,
  Menu,
  MenuProps,
  MenuItem,
  Link,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useCallback, useRef, useState } from 'react';

export interface HeaderUserProps {
  /**
   * The current user logged in, or undefined if they are unauthenticated.
   */
  user?: Pick<UserProfile, 'name' | 'email'>;
  /**
   * If we are loading the user's profile, should display a spinner.
   */
  userLoading?: boolean;
}

export function HeaderUser(props: HeaderUserProps) {
  const { userLoading, user } = props;

  const ref = useRef();

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  if (userLoading) return <CircularProgress color="secondary" />;
  if (!user) return null;

  return (
    <Tooltip title={user.name ?? user.email ?? 'User'}>
      <>
        <IconButton
          ref={ref.current}
          size="large"
          edge="start"
          color="inherit"
          aria-label="Authenticated User Icon"
          onClick={handleOpen}
        >
          <AccountCircle />
        </IconButton>
        <HeaderUser.Menu
          user={user}
          anchorEl={ref.current}
          open={open}
          onClose={handleClose}
        />
      </>
    </Tooltip>
  );
}

export interface HeaderUserMenuProps extends MenuProps {
  /**
   * The user logged in, not used internally, only used
   * to know if the user is logged in or not.
   */
  user?: Partial<UserProfile>;
}

/**
 * Menu component that goes with the header user component.
 * This should be used with the HeaderUser.
 *
 * Internally this provides the user with the correct login/logout buttons.
 */
HeaderUser.Menu = function HeaderUserMenu(props: HeaderUserMenuProps) {
  const { user } = props;
  return (
    <Menu {...props}>
      <MenuItem>
        {user ? (
          <Link href="/api/auth/logout">Logout</Link>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </MenuItem>
    </Menu>
  );
};
