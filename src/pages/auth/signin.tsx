import { GetStaticProps } from 'next'
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type SigninProps = {
    providers: {
        [k in keyof ClientSafeProvider]: ClientSafeProvider
    }
}

const signinSchema = z.object({
    email: z.string().email()
})

type Signin = z.infer<typeof signinSchema>

const Signin: React.FC<SigninProps> = ({ providers }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Signin>({
        resolver: zodResolver(signinSchema)
    })
    const onSubmit = handleSubmit(async data => {
        signIn('email', {
            email: data.email
        })
    })

    return (
        <div>
            <h2>Custom Sign In</h2>
            {Object.values(providers).map(provider => {
                if (provider.name === 'Email') {
                    return (
                        <form key={provider.id} onSubmit={onSubmit}>
                            <label>First Name</label>
                            <input {...register('email')} />
                            {errors.email?.message && <p>{errors.email?.message}</p>}

                            <input type="submit" />
                        </form>
                    )
                }
                return (
                    <div key={provider.id}>
                        <button onClick={() => signIn(provider.id)}>{provider.name}</button>
                    </div>
                )
            })}
        </div>
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
