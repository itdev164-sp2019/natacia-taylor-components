import React from 'react'
import mastheadImage from './images/styled-components.png'
import { Menu, Search } from 'styled-icons/feather'
import { darken } from 'polished'

const images = {
    mastheadImage
}
const icons = {
    Menu: <Menu/>,
    Search: <Search/>
}
const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    lineHeights: {
        solid: 1, 
        title: 1.25,
        copy: 1.5
    }, 
    letterSpacings: {
        normal: 'normal',
        tracked: '0.1em',
        tight: '-0.05em',
        mega: '0.25em'
    },
    borders: [
        0,
        '1px solid',
        '2px solid',
        '3px solid',
        '4px solid',
        '8px solid',
        '16px solid',
        '32px solid'
    ],
    colors: {
        primary: {
          light: 'hsl(208, 13%, 35%)',
          main: 'hsl(208, 13%, 25%)',
          dark: 'hsl(208, 13%, 15%)',
          contrastText: '#ffffff'  
        },
        text: {
            primary: 'hsl(208, 13%, 35%)',
            secondary: 'hsl(208, 13%, 45%)',
            disabled: 'hsl(208, 13%, 75%)',
            hint: 'hsl(208, 13%, 75%)'
        }
    }
}

const defaults = {
    //todo
    masthead: {
        height: '100%',
        width: '100%',
        background: theme.colors.primary.main,
        borderBottom: theme.borders[1],
        borderColor: darken(0.1, theme.colors.primary.main)
    },
    link: {
        textDecoration: 'none'
    },
    button:{
      padding: `${theme.space[2] / 16}em ${(theme.space[3] + 4) / 16}em`,
      border: theme.borders[3],
      textTransform: 'uppercase',
      letterSpacing: theme.letterSpacings.tracked  
    },
    text: {
        lineHeight: theme.lineHeights.copy
    }
}

const variants = {
    //todo
    button: {
        primary: {
            ...defaults.button,
            color: theme.colors.primary.main,
            borderColor: theme.colors.primary.main
        },
        constrast: {
            ...defaults.button,
            color: theme.colors.primary.contrastText
        }
    },
    linkButton: {
        primary: {
            color: theme.colors.primary.main
        },
        constrast: {
            color: theme.colors.primary.contrastText
        }
    },
    iconButton : {
        primary: {
            color: theme.colors.primary.main
        },
        contrast: {
            color: theme.colors.primary.contrastText
        }
    },
    link: {
        primary: {
            ...defaults.link,
            color: theme.colors.primary.main
        },
        contrast: {
            ...defaults.link,
            color: theme.colors.primary.contrastText
        }
    }
}

const Gray = {...theme, defaults, variants, images,
                icons}
export { Gray }