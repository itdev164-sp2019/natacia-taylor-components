import React from 'react'
import PropTypes from 'prop-types'
import { FacebookShareButton } from './index'
import { Flex } from 'rebass'


export const ShareButtonList = props => (
<Flex flexDirection="column">
    <FacebookShareButton {...props} />
 </Flex>   
)

ShareButtonList.propTypes = {
    addThisPubId: PropTypes.string.isRequired,
    contentTitle: PropTypes.string.isRequired,
    contentImage: PropTypes.string.isRequired,
    contentDescription: PropTypes.string.isRequired,
}


