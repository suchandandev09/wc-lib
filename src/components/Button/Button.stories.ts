import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './Button';

const meta = {
  title: 'Components/Button',
  component: 'wl-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    label: { control: 'text' },
  },
  render: (args) => html`
    <wl-button variant=${args.variant} size=${args.size}>
      ${args.label}
    </wl-button>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Secondary Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Large Button',
  },
};
