import { Story, Meta } from '@storybook/react/types-6-0';
import { AnimationText } from './AnimationText';

export default {
  title: 'AnimationText',
  component: AnimationText,
} as Meta;

export const Text: Story = () => <AnimationText />;
