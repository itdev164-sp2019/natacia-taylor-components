import React from 'react'
import PropTypes from 'prop-types'
import { Box, Link } from 'rebass'
import styled from 'styled-components'

const Outer = styled(Box)`
height: ${props => props.height};
width: 100%;
background-color: rebeccapurple;
margin-bottom: 1.45rem;
`
const StyledLink = styled(Link)`
color: white;
text-decoration: none;
`

export const Masthead = ({ height, siteTitle }) => {
    return (
        <Outer height={height}>
        <StyledLink 
        href="/">
            {siteTitle}
        </StyledLink>
    </Outer>
    )
}

Masthead.propTypes = {
    height: PropTypes.string.isRequired,
    siteTitle: PropTypes.string
}
