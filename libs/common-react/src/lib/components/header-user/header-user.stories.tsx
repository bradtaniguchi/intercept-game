import { Meta, Story } from '@storybook/react';
import { HeaderUser, HeaderUserProps } from './header-user';
import { AppBar, Toolbar } from '@mui/material';

export default {
  component: HeaderUser,
  title: 'HeaderUser',
  argTypes: {} as Record<keyof HeaderUserProps, unknown>,
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

const Template: Story<HeaderUserProps> = (args) => <HeaderUser {...args} />;

export const WithUser = Template.bind({});
WithUser.args = {
  user: {
    name: 'Brad',
  },
};

export const Loading = Template.bind({});
Loading.args = {
  userLoading: true,
  user: {
    email: 'loading-user@mail.com',
  },
};

export const UndefinedUser = Template.bind({});
UndefinedUser.args = {
  userLoading: false,
  user: undefined,
};
