import { FilterChip } from '@corella/react';

export default {
  title: 'Corella/FilterChip',
  component: FilterChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isActive: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args: {
    children: 'Filter Chip',
    isActive: false,
  },
};

export const Active = {
  args: {
    children: 'Active Chip',
    isActive: true,
  },
};
