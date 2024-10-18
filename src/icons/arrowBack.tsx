import { IconProps } from '../type/icon'
import { setStyle } from '../utils/styleFunc'

const ArrowBack = (props: IconProps) => {
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
                d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
                fill="current"
            />
        </svg>
    )
}

export default ArrowBack
