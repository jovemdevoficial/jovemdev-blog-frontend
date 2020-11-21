import { Story, Meta } from '@storybook/react/types-6-0';
import { PostCard } from '../patterns/PostCard';

export default {
  title: 'PostCard',
  component: PostCard,
} as Meta;

export const Primary: Story = () => <PostCard />;
