import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
    MediaQuery,
    BaseContainer, 
    Link,
    Image, 
    Header, 
    Button, 
    Section } from '../../Elements'
import { MenuButton, SearchButton } from '../../Buttons'

const StyledHeader = styled(Header)`
${props => props.theme.defaults.masthead}
`
const Item = ({ children, ...props}) => (
    <Section {...props}>{children}</Section>
)
Item.defaultProps = {
    my: 'auto',
    mr: 3
}
const Nav = props => <BaseContainer as="nav" {...props}/>

export const DefaultLayout = ({ image }) => (
    <StyledHeader flex alignItems="center" p={3}>
    <Section flex wdith={[24, 1 / 3, 1 / 3]} mr={3}>
    <Item>
        <MenuButton variant="constrast" />
    </Item>
    <MediaQuery device="desktop">
    <Nav flex>
    <Item>
        <Link variant="contrast" href="about.html">
        About
        </Link>
    </Item>
    <Item>
        <Link variant="contrast" href="contact.html">
        Contact
        </Link>
    </Item>
    </Nav>
    </MediaQuery>
    </Section>
    <Section flex width={[4 / 12, 1 / 3, 1 / 3]} justifyContent="center">
        <Image 
        src={image} 
        alt="masthead logo" 
        height={[24, 60, 60]}
        width={[100, 246, 246]}
        mx="auto"/>
    </Section>
    <Section flex width={[8 / 12, 1 / 3, 1 / 3]} justifyContent="flex-end">
    <Item>
        <MediaQuery device="tablet">
        <SearchButton variant="contrast" />
        </MediaQuery>
    </Item>
    <Item>
        <Button fontSize={[0, 2, 3]} variant="contrast">
        Subscribe
        </Button>
    </Item>
    </Section>  
    </StyledHeader>
)

DefaultLayout.propTypes = {
    image: PropTypes.node.isRequired
}
