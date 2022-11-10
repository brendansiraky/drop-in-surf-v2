import { ButtonHTMLAttributes } from 'react'
import { styled } from '../../../stitches.global'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled('button', {
    backgroundColor: '$primary',
    color: '$textLight',
    py: '$sm',
    px: '$md',
    borderRadius: '3px',
    height: '40px',
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '0.7px',
})

export const Button: React.FC<ButtonProps> = (buttonProps) => {
    const { children, ...rest } = buttonProps
    return <StyledButton {...rest}>{children}</StyledButton>
}
