import { GameSessionId } from '@intercept-game/game';
import {
  Box,
  IconButton,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
import { ChangeEvent, useCallback, useState } from 'react';

export interface HeaderSearchProps {
  /**
   * The search query or actual game-id.
   */
  searchQuery?: GameSessionId | string;

  /**
   * Callback that is triggered when the user hits "enter" or "search" to
   * try to find the given game.
   */
  onSearch?: (searchQuery: string) => void;

  /**
   * Callback that is triggered when the user makes changes to the
   * input field. Primarily used for debugging.
   */
  onChange?: (searchQuery: string) => void;

  /**
   * If the user hits the close button to cancel the search.
   */
  onClose?: () => void;
}

/**
 * This component is the "search-bar" that is shown conditionally on the
 * header bar. The parent component should be in charge of showing this component or not.
 */
export function HeaderSearch(props: HeaderSearchProps) {
  const { searchQuery: initSearchQuery, onSearch, onChange, onClose } = props;

  const [searchQuery, setSearchQuery] = useState<string>(initSearchQuery ?? '');

  const onSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchQuery(value);
      if (typeof onChange === 'function') onChange(value);
    },
    [setSearchQuery, onChange]
  );

  const onSearchHandle = () => {
    if (typeof onSearch === 'function') onSearch(searchQuery ?? '');
  };

  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center', display: 'flex' }}>
      <FormControl variant="outlined" sx={{ flexGrow: 1 }} hiddenLabel>
        <OutlinedInput
          sx={{ backgroundColor: '#ffffff' }}
          id="search"
          value={searchQuery}
          onChange={onSearchChange}
          autoComplete="off"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="Search"
                sx={{ mr: 2 }}
                onClick={onSearchHandle}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="Close search"
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
}
