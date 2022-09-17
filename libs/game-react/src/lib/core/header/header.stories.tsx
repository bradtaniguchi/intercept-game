import { Meta, Story } from '@storybook/react';
import { Header, HeaderProps } from './header';

export default {
  component: Header,
  title: 'Header',
  argTypes: {
    onSearch: {
      action: 'onSearch',
    },
    onClose: {
      action: 'onClose',
    },
  } as Record<keyof HeaderProps, unknown>,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

const user = {
  name: 'Brad',
  email: 'Brad@mail.com',
};

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {};

export const Authenticated = Template.bind({});
Authenticated.args = {
  user,
};

export const WithValue = Template.bind({});
WithValue.args = {
  user,
  searchQuery: 'initial value',
};

export const WithSuperLongValue = Template.bind({});
WithSuperLongValue.args = {
  user,
  searchQuery: 'initial value'.repeat(100),
};
