import * as Icon from './_icon'

export interface IconProps {
    width?: number
    height?: number
    onClick?: () => void
    iconName: keyof typeof Icon
    className?: string
}

const HenaIcon = ({
    width,
    height,
    onClick,
    iconName,
    className,
}: IconProps) => {
    const IconElement = Icon[iconName]

    return (
        <IconElement
            width={width}
            height={height}
            onClick={onClick}
            className={className}
        />
    )
}

export default HenaIcon
