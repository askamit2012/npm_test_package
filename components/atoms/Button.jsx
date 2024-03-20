import { Button } from '@mui/material'

import React from 'react'

function Button(props) {
    let { variant, color, size, value, disabled } = { ...props }
    if (!variant) variant = 'standard'
    if (!color) color = 'primary'
    if (!size) size = 'medium'
    if (!value) value = 'Click Me!'
    if (!disabled) disabled = false
    return (
        <Button
            variant={variant}
            color={color}
            size={size}
            value={value}
            disabled={disabled}
            onClick={onClick}
        >{props.value ? props.value : 'Click Me!'}</Button>
    )
}

export default Button