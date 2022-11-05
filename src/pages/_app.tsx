import { AppProps, type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { trpc } from '../utils/trpc'

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) => {
    return (
        <SessionProvider session={session}>
            <SecureSession anonymous={pageProps.anonymous}>
                <Component {...pageProps} />
            </SecureSession>
        </SessionProvider>
    )
}

function SecureSession({
    children,
    anonymous,
}: {
    children: JSX.Element
    anonymous: boolean
}) {
    const { status, data } = useSession()
    const router = useRouter()

    if (status === 'unauthenticated' && !anonymous) {
        router.push('/auth/signin')
    }

    if (!anonymous && (status === 'loading' || !data)) return null

    return children
}

export default trpc.withTRPC(MyApp)
