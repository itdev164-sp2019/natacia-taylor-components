import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'styled-components'
import { IconButton } from '../Elements'

export const MenuButton = props => (
    <ThemeConsumer>
        {theme => <IconButton icon={theme.icons.Menu}
        {...props} />}
    </ThemeConsumer>
)

MenuButton.propTypes = {
    variant: PropTypes.string
}