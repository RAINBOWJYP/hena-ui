import { IconProps } from '../type/icon'
import { setStyle } from '../utils/styleFunc'

const Send = (props: IconProps) => {
    const { width = '24px', height = '24px', className, fill, onClick } = props
    const style = setStyle(width, height)

    return (
        <svg
            className={className}
            width={style.width}
            height={style.height}
            viewBox="0 0 24 24"
            fill={fill || 'current'}
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <path
                d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17ZM5 17V12V7V10.5V13.5V17Z"
                fill="current"
            />
        </svg>
    )
}

export default Send
