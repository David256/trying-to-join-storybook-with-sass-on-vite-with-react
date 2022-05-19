import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { SpatialButton } from '../components/SpatialButton/SpacialButton';

export default {
  title: 'Example/SpacialButton',
  component: SpatialButton,
  parameters: {
    onClick: { action: 'Clicked' }
  }
} as ComponentMeta<typeof SpatialButton>;

const Template: ComponentStory<typeof SpatialButton> = (args) => <SpatialButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  value: 'Click me',
};

Button.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByText(/click me/i);
  await userEvent.click(loginButton);
};