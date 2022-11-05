import { getProviders, signIn } from 'next-auth/react'

const Signin: React.FC = () => {
    return <div>Custom Sign In</div>
}

export async function getStaticProps() {
    const providers = await getProviders()

    return {
        props: {
            anonymous: true,
            providers,
        },
    }
}

export default Signin
