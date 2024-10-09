import { ChatBubbleProps } from '@lib/type/chatBubble'
import { setClassName } from '../utils/classFix'
import React from 'react'
import Bubble from './Bubble'
import ProfileThumb from './ProfileThumb'

const ChatBubble = ({
    message,
    isSender,
    sendDate,
    profileUrl,
}: ChatBubbleProps) => {
    return (
        <div className="flex items-end gap-2">
            {isSender && (
                <span className="text-xs text-neutral-500">{sendDate}</span>
            )}
            {!isSender && (
                <ProfileThumb
                    src={profileUrl}
                    alt="profile"
                    isBorder={false}
                    size="small"
                />
            )}
            <Bubble message={message} isSender={isSender} />
            {!isSender && (
                <span className="text-xs text-neutral-500">{sendDate}</span>
            )}
        </div>
    )
}

export default ChatBubble
