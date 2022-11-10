import { type InputHTMLAttributes } from 'react'
import { type UseFormRegister } from 'react-hook-form'
import { styled } from '../../../stitches.global'
import { type Signin } from '../../auth/AuthOptions'

const StyledInput = styled('input', {
    backgroundColor: '#FFF',
    border: '1px solid transparent',
    borderRadius: '3px',
    fontSize: '16px',
    padding: '$sm',
    width: '100%',
    height: '50px',
    transition: 'border-color .2s ease',

    '&:hover, &:focus': {
        border: '1px solid #2E96F0',
    },
})

const RowContainer = styled('div', {
    flexer: 'column-start-start',
    position: 'relative',
    width: '100%',
    marginBottom: '$md',
})

const Label = styled('label', {
    color: 'grey',
    fontSize: '12px',
    letterSpacing: '1px',
    marginBottom: '$xs',
    textTransform: 'uppercase',
})

const ErrorMessage = styled('p', {
    fontSize: '12px',
    color: '$primary',
    py: '$xs',
})

type InputRowProps = InputHTMLAttributes<HTMLInputElement> & {
    errorMessage?: string
    label: string
    fieldName: keyof Signin
    register: UseFormRegister<Signin>
}

export const InputRow: React.FC<InputRowProps> = (props) => {
    const { errorMessage, label, register, fieldName, ...rest } = props
    return (
        <RowContainer>
            <Label>{label}</Label>
            <StyledInput {...rest} {...register(fieldName)} />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </RowContainer>
    )
}
