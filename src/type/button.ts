import Icon from '@/icons'

export interface ButtonProps {
    color?: 'primary' | 'secondary' | 'tertiary'
    variant?: 'outline' | 'filled' | 'text'
    size?: 'small' | 'medium' | 'large'
    icon?: keyof typeof Icon | null
    iconOnly?: boolean
    disabled?: boolean
    children?: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
