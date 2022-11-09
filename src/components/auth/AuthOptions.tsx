import { styled } from '@stitches/react'
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signinSchema = z.object({
    email: z.string().email(),
})

type Signin = z.infer<typeof signinSchema>

const Container = styled('div', {})

type AuthOptionsProps = {
    providers: {
        [k in keyof ClientSafeProvider]: ClientSafeProvider
    }
}

export const AuthOptions: React.FC<AuthOptionsProps> = ({ providers }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Signin>({
        resolver: zodResolver(signinSchema),
    })
    const onSubmit = handleSubmit(async (data) => {
        signIn('email', {
            email: data.email,
        })
    })

    return (
        <Container>
            {Object.values(providers).map((provider) => {
                if (provider.name === 'Email') {
                    return (
                        <form key={provider.id} onSubmit={onSubmit}>
                            <label>First Name</label>
                            <input {...register('email')} />
                            {errors.email?.message && (
                                <p>{errors.email?.message}</p>
                            )}

                            <input type='submit' />
                        </form>
                    )
                }
                return (
                    <div key={provider.id}>
                        <button onClick={() => signIn(provider.id)}>
                            {provider.name}
                        </button>
                    </div>
                )
            })}
        </Container>
    )
}
