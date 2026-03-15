import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import './Link';

const meta = {
  title: 'Components/Link',
  component: 'wc-link',
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
    },
    label: { control: 'text' },
  },
  render: (args) => html`
    <wc-link href=${args.href} target=${args.target}>
      ${args.label}
    </wc-link>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    href: '#',
    target: '_self',
    label: 'Default Link',
  },
};

export const OpenInNewTab: Story = {
  args: {
    href: 'https://lit.dev',
    target: '_blank',
    label: 'External Link (_blank)',
  },
};
