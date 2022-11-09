import { styled } from '../../stitches.global'

const Container = styled('div', {
    backgroundColor: '$sidebar',
    minHeight: '100vh',
    width: '30%',
    padding: '$lg',
})

type SidebarProps = {
    children: JSX.Element
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return <Container>{children}</Container>
}
