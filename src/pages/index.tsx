import { type NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'

import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
    const user = trpc.user.getUser.useQuery({
        email: 'brendansirakydeveloper@gmail.com',
    })
    const users = trpc.user.getAll.useQuery()

    const session = useSession()

    console.log(session.status)

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name='description' content='Dashboard' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <button onClick={() => signOut()}>Sign Out</button>
            <div>{user.data && <h3>{user.data.email}</h3>}</div>
            <div>
                {users.data?.map((user) => (
                    <h3 key={user.id}>{user.email}</h3>
                ))}
            </div>
        </>
    )
}

export default Home
