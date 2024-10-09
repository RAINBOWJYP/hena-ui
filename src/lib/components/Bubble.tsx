import { BubbleProps } from '@lib/type'
import { setClassName } from '@lib/utils'
import React from 'react'

const Bubble = ({ message, isSender }: BubbleProps) => {
    const isSenderClass = isSender
        ? 'justify-end rounded-l-xl rounded-tr-xl bg-tertiary-300'
        : 'justify-start rounded-r-xl rounded-tl-xl bg-secondary-50'
    const className = setClassName([
        'max-w-64 p-2 flex text-black text-sm',
        isSenderClass,
    ])
    return <div className={className}>{message}</div>
}

export default Bubble
