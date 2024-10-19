import * as Icon from './_icon'

const IconGroup = Icon

export interface IconProps {
    width?: number
    height?: number
    onClick?: () => void
    iconName: keyof typeof Icon
    className?: string
}

const HenaIcon = ({ width, height, onClick, iconName, className }: IconProps) => {
    const IconElement = IconGroup[iconName]

    return <IconElement width={width} height={height} onClick={onClick} className={className} />
}

export default HenaIcon

export { IconGroup }
