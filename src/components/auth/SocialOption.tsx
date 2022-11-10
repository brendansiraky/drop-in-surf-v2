import Image from 'next/image'
import { ClientSafeProvider, signIn } from 'next-auth/react'

import { styled } from '../../stitches.global'

const SocialItemContainer = styled('div', {
    flexer: 'row-center-center',
})

const SocialItem = styled('div', {
    borderRadius: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 4px',
    backgroundColor: '$background',
    cursor: 'pointer',
    flexer: 'row-center-center',
    py: '$sm',
    px: '$md',
})

const SocialText = styled('div', {
    marginLeft: '$sm',
})

type SocialOptionProps = ClientSafeProvider

export const SocialOption: React.FC<SocialOptionProps> = ({ id, name }) => {
    return (
        <SocialItemContainer>
            <SocialItem onClick={() => signIn(id)}>
                <Image src={`/${id}.png`} alt={name} width='30' height='30' />
                <SocialText>Sign in with {name}</SocialText>
            </SocialItem>
        </SocialItemContainer>
    )
}
