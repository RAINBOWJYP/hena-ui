import { ChatBubbleProps } from '@/type'
import ProfileThumb from './ProfileThumb'
import Bubble from './Bubble'

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
