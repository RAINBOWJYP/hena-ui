import Divider from '@/components/Divider'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Etc/Divider',
    component: Divider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
                <div style={{ width: '328px', height: '48px' }}>
                    <Story />
                </div>
            )
        },
    ],
    argTypes: {
        variant: { control: 'select' },
        orientation: { control: 'select' },
    },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal',
    },
}

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
    },
}

export const HorizontalMiddle: Story = {
    args: {
        orientation: 'horizontal',
        variant: 'middle',
    },
}

export const VerticalMiddle: Story = {
    args: {
        orientation: 'vertical',
        variant: 'middle',
    },
}
