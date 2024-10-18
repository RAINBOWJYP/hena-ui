import Icon from '@/icons'
import HenaIcon from '@/icons/icon'
import { setClassName } from '@/utils/classFix'
import React from 'react'
export interface ButtonProps {
    color?: 'primary' | 'secondary' | 'tertiary'
    variant?: 'outline' | 'filled' | 'text'
    size?: 'small' | 'medium' | 'large'
    icon?: keyof typeof Icon | null
    iconOnly?: boolean
    disabled?: boolean
    children?: React.ReactNode
    onClick?: () => void
}

const Button = ({
    variant = 'filled',
    color = 'primary',
    size = 'medium',
    icon,
    iconOnly = false,
    disabled = false,
    children,
    onClick,
}: ButtonProps) => {
    const buttonStyles = {
        variant: {
            filled: {
                primary: 'bg-primary-500 text-white hover:bg-primary-700',
                secondary: 'bg-secondary-500 text-white hover:bg-secondary-700',
                tertiary:
                    'bg-tertiary-500 text-netural-800 hover:bg-tertiary-400',
            },
            outline: {
                primary:
                    'border border-primary-500 text-primary-500 hover:bg-primary-50',
                secondary:
                    'border border-secondary-500 text-secondary-500 hover:bg-secondary-50',
                tertiary:
                    'border border-tertiary-500 text-tertiary-500 hover:bg-tertiary-50',
            },
            text: {
                primary: 'text-primary-500 hover:bg-primary-50',
                secondary: 'text-secondary-500 hover:bg-secondary-50',
                tertiary: 'text-tertiary-500 hover:bg-tertiary-50',
            },
        },
        size: {
            small: 'px-2 py-1 text-2xs',
            medium: 'px-4 py-2',
            large: 'px-6 py-3 text-lg',
        },
    }
    const className = setClassName([
        'rounded-full text-base hover:shadow-el-1 flex items-center justify-center gap-2',
        buttonStyles.variant[variant][color],
        buttonStyles.size[size],
        disabled ? 'opacity-50 cursor-not-allowed' : '',
    ])

    const iconColor = {
        filled: {
            primary: 'fill-white',
            secondary: 'fill-white',
            tertiary: 'fill-netural-800',
        },
        outline: {
            primary: 'fill-primary-500',
            secondary: 'fill-secondary-500',
            tertiary: 'fill-tertiary-500',
        },
        text: {
            primary: 'fill-primary-500',
            secondary: 'fill-secondary-500',
            tertiary: 'fill-tertiary-500',
        },
    }
    return (
        <button
            className={className + ''}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && (
                <HenaIcon
                    iconName={icon}
                    className={iconColor[variant][color]}
                />
            )}
            {iconOnly ? null : children}
        </button>
    )
}

export default Button
