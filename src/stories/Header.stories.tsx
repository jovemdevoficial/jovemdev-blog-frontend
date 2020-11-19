import { Story, Meta } from '@storybook/react/types-6-0';
import { Header } from '../patterns/Header';

export default {
  title: 'Header',
  component: Header,
} as Meta;

export const Primary: Story = () => <Header />;
