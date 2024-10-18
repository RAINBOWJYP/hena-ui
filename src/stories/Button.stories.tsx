import Button from '@/components/Button'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
    title: 'Button/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select' },
        size: { control: 'select' },
        children: { control: 'text' },
        icon: {
            control: 'select',
            options: ['Error', 'Info', 'Success', 'Warning'],
        },
        iconOnly: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
    args: {
        variant: 'filled',
        color: 'primary',
        children: 'Button',
        icon: null,
    },
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        color: 'primary',
        children: 'Button',
        icon: null,
    },
}

export const IconButton: Story = {
    args: {
        variant: 'filled',
        color: 'primary',
        children: 'Button',
        icon: 'Error',
    },
}

export const Text: Story = {
    args: {
        variant: 'text',
        color: 'primary',
        children: 'Button',
        icon: null,
    },
}
