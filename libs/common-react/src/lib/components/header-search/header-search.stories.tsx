import { Meta, Story } from '@storybook/react';
import { HeaderSearch, HeaderSearchProps } from './header-search';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default {
  component: HeaderSearch,
  title: 'HeaderSearch',
  argTypes: {
    onSearch: {
      action: 'onSearch',
    },
    onClose: {
      action: 'onClose',
    },
  } as Record<keyof HeaderSearchProps, unknown>,
  decorators: [
    (Story) => (
      <AppBar>
        <Toolbar>
          <Story />
        </Toolbar>
      </AppBar>
    ),
  ],
} as Meta;

const Template: Story<HeaderSearchProps> = (args) => <HeaderSearch {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const WithSearchQuery = Template.bind({});
WithSearchQuery.args = {
  searchQuery: 'initial value',
};

export const WithSuperLongSearchQuery = Template.bind({});
WithSearchQuery.args = {
  searchQuery: 'initial value'.repeat(100),
};
