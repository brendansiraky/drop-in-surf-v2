import { getProviders } from 'next-auth/react'

import { AuthOptions } from '../../components/auth/AuthOptions'
import { Sidebar } from '../../components/auth/Sidebar'
import { styled } from '../../stitches.global'
import { type Providers } from '../api/auth/[...nextauth]'

type SigninProps = {
    providers: Providers
}

const Container = styled('div', {
    flexer: 'row-end-start',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('/signin-background.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
})

const Logo = styled('div', {
    position: 'absolute',
    top: '$md',
    left: '$md',
    backgroundImage: `url('/logo.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100px',
    height: '100px',
})

const Signin: React.FC<SigninProps> = ({ providers }) => {
    return (
        <Container>
            <Sidebar
                title='Sign In'
                subtitle='Enter your email below to receive a code to login with.'
            >
                <AuthOptions providers={providers} />
            </Sidebar>
            <Logo />
        </Container>
    )
}

export const getServerSideProps = async () => {
    const providers = await getProviders()

    return {
        props: {
            anonymous: true,
            providers,
        },
    }
}

export default Signin
