import { UserProfile } from '@auth0/nextjs-auth0';
import { CircularProgress, Tooltip, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

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

  if (userLoading) return <CircularProgress color="secondary" />;
  if (!user) return null;
  return (
    <Tooltip title={user.name ?? user.email ?? 'User'}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="Authenticated User Icon"
      >
        <AccountCircle />
      </IconButton>
    </Tooltip>
  );
}

/**
 * Menu component that goes with the header user component.
 * This should be used with the HeaderUser
 */
HeaderUser.Menu = function HeaderUserMenu() {
  // TODO:
  return <div></div>;
  //   return <Menu
  //   id="basic-menu"
  //   anchorEl={anchorEl}
  //   open={open}
  //   onClose={handleClose}
  //   MenuListProps={{
  //     'aria-labelledby': 'basic-button',
  //   }}
  // >
  //   <MenuItem onClick={handleClose}>Profile</MenuItem>
  //   <MenuItem onClick={handleClose}>My account</MenuItem>
  //   <MenuItem onClick={handleClose}>Logout</MenuItem>
  // </Menu>
};
