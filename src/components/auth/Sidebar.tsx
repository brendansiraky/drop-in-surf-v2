import { styled } from '../../stitches.global'

const Container = styled('div', {
    backgroundColor: '$sidebarBackground',
    minHeight: '100vh',
    width: '40%',
    padding: '$lg',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    flexer: 'column-center-start',
})

const Title = styled('h1', {
    marginBottom: '$sm',
})

const Subtitle = styled('p', {
    marginBottom: '$lg',
})

type SidebarProps = {
    children: JSX.Element
    title: string
    subtitle: string
}

export const Sidebar: React.FC<SidebarProps> = ({
    children,
    title,
    subtitle,
}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {children}
        </Container>
    )
}
