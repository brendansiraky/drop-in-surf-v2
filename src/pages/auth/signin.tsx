import { styled } from '@stitches/react'
import { GetStaticProps } from 'next'
import { ClientSafeProvider, getProviders } from 'next-auth/react'
import { AuthOptions } from '../../components/auth/AuthOptions'
import { Sidebar } from '../../components/auth/Sidebar'

type SigninProps = {
    providers: {
        [k in keyof ClientSafeProvider]: ClientSafeProvider
    }
}

const Container = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
})

const Signin: React.FC<SigninProps> = ({ providers }) => {
    return (
        <Container>
            <Sidebar>
                <AuthOptions providers={providers} />
            </Sidebar>
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const providers = await getProviders()

    return {
        props: {
            anonymous: true,
            providers,
        },
    }
}

export default Signin
