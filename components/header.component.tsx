import Link from 'next/link'
import styled from 'styled-components'


const StyledHeader = styled.header`
    background-color: pink;
    padding: 1rem 12rem;
`
const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
`

const StyledLink = styled.a`
    text-decoration: none;
`

const Header: React.FC = () => (
    <StyledHeader>
        <StyledNav>
            <StyledLink href="/">
                Home
            </StyledLink>
            <StyledLink href="/posts/new">
                Add
            </StyledLink>
        </StyledNav>
    </StyledHeader>
)

export default Header