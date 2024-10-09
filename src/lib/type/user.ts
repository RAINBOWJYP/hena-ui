import React from 'react'

export interface ProfileThumbProps {
    src: string
    alt: string
    size?: 'small' | 'medium' | 'large'
    isBorder?: boolean
    onClick?: React.MouseEventHandler<HTMLImageElement>
}
