import { Input } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
const meta = {
    title: 'TextField/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text', description: 'Input value' },
        label: { control: 'text', description: 'Input label' },
        error: { control: 'text', description: 'Input error' },
        icon: { control: 'boolean', description: 'Input icon' },
    },
    args: {
        onChange: fn(),
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        value: '', // 초기값 설정
        label: 'label',
        error: '',
        placeholder: '값을 입력해주세요.',
    },
}
