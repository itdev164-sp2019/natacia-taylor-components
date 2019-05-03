import React from 'react'
import { Image as ImageBase } from 'rebass'
import PropTypes from 'prop-types'



export const Image = ({src, ...props}) => 
<ImageBase src={src} {...props}/>

Image.propTypes = {
    src: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}