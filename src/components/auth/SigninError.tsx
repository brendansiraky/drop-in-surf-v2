import { styled } from '../../stitches.global'

const Container = styled('div', {
    flexer: 'row-center-center',
})

const Content = styled('div', {
    background: '#007bff',
    color: '$textLight',
    borderRadius: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 4px',
    py: '$sm',
    px: '$md',
    width: '100%',
    textAlign: 'center',
    marginBottom: '$md',
})

type SigninErrorProps = {
    message: string
}

export const SigninError: React.FC<SigninErrorProps> = ({ message }) => {
    return (
        <Container>
            <Content>{message}</Content>
        </Container>
    )
}
