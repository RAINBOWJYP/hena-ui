import ProfileThumb from '@/components/ProfileThumb'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
    title: 'User/ProfileThumb',
    component: ProfileThumb,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        src: { control: 'text', description: 'Profile Thumbnail Image Src' },
        alt: { control: 'text', description: 'Profile Thumbnail Image alt' },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Profile Thumbnail Image Size',
        },
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof ProfileThumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        src: '/image/onion_koongya.jpg',
        alt: 'profile-img',
    },
}

export const Small: Story = {
    args: {
        size: 'small',
        src: '/image/onion_koongya.jpg',
        alt: 'profile-img',
    },
}
