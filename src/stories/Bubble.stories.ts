import Bubble from '@/components/Bubble'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Chat/Bubble',
    component: Bubble,
    tags: ['autodocs'],
    argTypes: {
        isSender: {
            control: 'boolean',
            description: 'true : 보낸 사람, false : 받는 사람',
        },
        message: {
            control: 'text',
            description: '메세지 내용',
        },
    },
} satisfies Meta<typeof Bubble>

export default meta
type Story = StoryObj<typeof Bubble>

export const Sender: Story = {
    args: {
        isSender: true,
        message: '안녕하세요. 오늘 점심 뭐 먹을까요? 생각해두신 거 있나요?',
    },
}

export const Receiver: Story = {
    args: {
        isSender: false,
        message: '네, 안녕하세요? 오늘 점심 부대찌개 어떠세요? 너무 맛있어요!',
    },
}
