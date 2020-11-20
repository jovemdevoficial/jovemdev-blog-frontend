import { Story, Meta } from '@storybook/react/types-6-0';
import { PostCard } from '../components/PostCard';

export default {
  title: 'PostCard',
  component: PostCard,
} as Meta;

export const Primary: Story = () => <PostCard />;
