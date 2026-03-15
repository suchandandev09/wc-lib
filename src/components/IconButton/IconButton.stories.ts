import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './IconButton';

const meta = {
  title: 'Components/IconButton',
  component: 'wc-icon-button',
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Tabler icon name (e.g., home, user, settings)' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
    },
    ariaLabel: { control: 'text' },
  },
  args: {
    name: 'heart',
    variant: 'primary',
    ariaLabel: 'Favorite',
  },
  render: (args) => html`
    <wc-icon-button 
      name=${args.name} 
      variant=${args.variant} 
      ariaLabel=${args.ariaLabel}
    ></wc-icon-button>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    name: 'heart',
    variant: 'primary',
    ariaLabel: 'Favorite',
  },
};

export const Secondary: Story = {
  args: {
    name: 'settings',
    variant: 'secondary',
    ariaLabel: 'Settings',
  },
};

export const Ghost: Story = {
  args: {
    name: 'trash',
    variant: 'ghost',
    ariaLabel: 'Delete',
  },
};

export const CustomContent: Story = {
  render: () => html`
    <wc-icon-button variant="primary" ariaLabel="Custom SVG">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    </wc-icon-button>
  `,
  parameters: {
    controls: { exclude: ['name', 'variant', 'ariaLabel'] },
  },
};
