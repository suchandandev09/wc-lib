import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './Icon';

const meta = {
  title: 'Components/Icon',
  component: 'wc-icon',
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Tabler icon name (e.g., home, user, settings)' },
    size: { control: 'number' },
    color: { control: 'color' },
  },
  args: {
    name: 'star',
    size: 24,
  },
  render: (args) => html`
    <wc-icon name=${args.name} size=${args.size} color=${args.color}></wc-icon>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'heart',
  },
};

export const CustomSize: Story = {
  args: {
    name: 'settings',
    size: 48,
  },
};

export const CustomColor: Story = {
  args: {
    name: 'code',
    size: 32,
    color: '#aa3bff',
  },
};
