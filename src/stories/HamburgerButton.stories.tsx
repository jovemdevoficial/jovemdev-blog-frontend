import { Story, Meta } from '@storybook/react/types-6-0';
import { HamburgerButton } from '../components/HamburgerButton';

export default {
  title: 'HamburgerButton',
  component: HamburgerButton,
} as Meta;

export const Button: Story = () => <HamburgerButton />;
