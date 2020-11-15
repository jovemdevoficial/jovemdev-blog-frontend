import { Story, Meta } from '@storybook/react/types-6-0';
import { Search } from '../components/Search';

export default {
  title: 'Search',
  component: Search,
} as Meta;

export const Primary: Story = () => <Search />;
