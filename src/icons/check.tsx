import { IconProps } from '../type/icon'
import { setStyle } from '../utils/styleFunc'

const Check = (props: IconProps) => {
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
                d="M9.55001 18L3.85001 12.3L5.27501 10.875L9.55001 15.15L18.725 5.97501L20.15 7.40001L9.55001 18Z"
                fill="current"
            />
        </svg>
    )
}

export default Check
