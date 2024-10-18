import { IconProps } from '../type/icon'
import { setStyle } from '../utils/styleFunc'

const ArrowForward = (props: IconProps) => {
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
                d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                fill="current"
            />
        </svg>
    )
}

export default ArrowForward
