import { setClassName } from '../utils/classFix'
import { ProfileThumbProps } from '../type/user'

const ProfileThumb = ({
    src,
    alt,
    size = 'medium',
    isBorder = true,
    onClick,
}: ProfileThumbProps) => {
    const sizes = {
        small: 'w-8 h-8',
        medium: 'w-10 h-10',
        large: 'w-12 h-12',
    }
    const border = isBorder ? 'border-solid border border-gray-600' : ''
    const className = setClassName([
        'rounded-full cursor-pointer',
        sizes[size],
        border,
    ])
    return <img className={className} src={src} alt={alt} onClick={onClick} />
}

export default ProfileThumb
