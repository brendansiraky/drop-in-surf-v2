import { type ClientSafeProvider, signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { z } from 'zod'

import { styled } from '../../stitches.global'
import { Button } from '../shared/button/Button'
import { InputRow } from '../shared/input/InputRow'
import { SocialOption } from './SocialOption'
import { type Providers } from '../../pages/api/auth/[...nextauth]'
import { SigninError } from './SigninError'

const signinSchema = z.object({
    email: z.string().email(),
})

export type Signin = z.infer<typeof signinSchema>

const Container = styled('div', {
    width: '100%',
})

const SignInButtonContainer = styled('div', {
    marginTop: '$md',
    flexer: 'row-end-start',
})

const Divider = styled('div', {
    borderBottom: '1px solid lightgrey',
    boxSizing: 'content-box',
    width: '100%',
    height: '1px',
    my: '$lg',
    overflow: 'visible',
    flexer: 'row-center-center',

    '& span': {
        backgroundColor: '$sidebarBackground',
        px: '$sm',
    },
})

type AuthOptionsProps = {
    providers: Providers
}

export const AuthOptions: React.FC<AuthOptionsProps> = ({ providers }) => {
    const router = useRouter()

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

    const { email, ...rest } = providers

    return (
        <Container>
            {router.query?.error && (
                <SigninError message={router.query.error.toString()} />
            )}
            <form onSubmit={onSubmit}>
                <InputRow
                    register={register}
                    label='email'
                    fieldName='email'
                    errorMessage={errors.email?.message}
                />
                <SignInButtonContainer>
                    <Button type='submit'>Sign In</Button>
                </SignInButtonContainer>
            </form>
            <Divider>
                <span>OR</span>
            </Divider>
            {Object.values(rest).map((provider: ClientSafeProvider) => (
                <SocialOption key={provider.id} {...provider} />
            ))}
        </Container>
    )
}
